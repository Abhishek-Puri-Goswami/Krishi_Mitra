const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    images: {
      type: [String],
      required: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    deliveryOptions: {
      pickup: {
        type: Boolean,
        default: false,
      },
      delivery: {
        available: {
          type: Boolean,
          default: false,
        },
        distance: {
          type: Number,
          min: 1,
        },
        fee: {
          type: Number,
          min: 0,
        },
      },
      localMarket: {
        type: Boolean,
        default: false,
      },
    },
    organic: {
      type: Boolean,
      default: false,
    },
    specialNotes: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;
