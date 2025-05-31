const Product = require("../models/productModel");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

const allowedCategories = ["Vegetables", "Fruits", "Grains", "Dairy", "Others"];

// Function to upload image to Cloudinary and delete local file
const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "KrishiMitra/Products",
    });

    // Delete local file after upload
    fs.unlinkSync(filePath);
    return result;
  } catch (err) {
    console.error("Upload Error:", err);
    throw err;
  }
};

// Controller function to handle product upload
module.exports.uploadProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      description,
      quantity,
      price,
      location,
      deliveryDistance,
      deliveryFee,
      specialNotes,
    } = req.body;

    const pickup = req.body.pickup === "on";
    const delivery = req.body.deliveryOption === "Delivery";
    const localMarket = req.body.localMarket === "on";
    const organic = req.body.organic === "on";

    // Validate category
    if (!allowedCategories.includes(category)) {
      return res.status(400).json({ error: "Invalid category selected." });
    }

    // Upload images to Cloudinary
    const imageUrls = [];
    for (const file of req.files) {
      const result = await uploadToCloudinary(file.path);
      imageUrls.push(result.secure_url);
    }

    const newProduct = new Product({
      name,
      category,
      description,
      quantity,
      price,
      images: imageUrls,
      location,
      deliveryOptions: {
        pickup,
        delivery: delivery
          ? {
              available: true,
              distance: deliveryDistance || undefined,
              fee: deliveryFee || undefined,
            }
          : { available: false },
        localMarket,
      },
      organic,
      specialNotes,
    });

    await newProduct.save();

    res
      .status(201)
      .json({ message: "Product uploaded successfully.", newProduct });
  } catch (err) {
    console.error("Upload Error:", err.message);
    res
      .status(500)
      .json({ error: "Something went wrong while uploading the product." });
  }
};
