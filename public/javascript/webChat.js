function sendMessage() {
            const input = document.getElementById("messageInput");
            const message = input.value.trim();
            if (message !== "") {
                const chatBox = document.getElementById("chatBox");
                const newMessage = document.createElement("div");
                newMessage.className = "message right";
                newMessage.textContent = message;
                chatBox.appendChild(newMessage);
                input.value = "";
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        }