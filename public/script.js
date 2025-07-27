
const socket = io();
const textarea = document.getElementById("sharedText");
const wipeBtn = document.getElementById("wipeBtn");

textarea.addEventListener("input", () => {
    socket.emit("typing", textarea.value);
});

socket.on("updateText", (data) => {
    textarea.value = data;
});

wipeBtn.addEventListener("click", () => {
    socket.emit("wipe");
});

socket.on("clearText", () => {
    textarea.value = "";
});
