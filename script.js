// Wi-Fi Setup Page
const saveBtn = document.getElementById("saveBtn");

if (saveBtn) {
    saveBtn.addEventListener("click", () => {
        const ssid = document.getElementById("ssid").value;
        const password = document.getElementById("password").value;

        if (ssid === "" || password === "") {
            alert("Please enter Wi-Fi Name and Password.");
            return;
        }

        // This is where we'll send the Wi-Fi details to the ESP32 later.

        window.location.href = "control.html";
    });
}

// Control Buttons
const buttons = {
    forward: "forward",
    reverse: "back",
    left: "left",
    right: "right",
    stop: "stop"
};

Object.keys(buttons).forEach(id => {
    const btn = document.getElementById(id);

    if (!btn) return;

    btn.addEventListener("mousedown", () => {
        console.log("Command:", buttons[id]);
        // We'll send the command to the ESP32 here.
    });

    btn.addEventListener("mouseup", () => {
        console.log("Stop");
        // We'll send the stop command here when the button is released.
    });

    btn.addEventListener("touchstart", (e) => {
        e.preventDefault();
        console.log("Command:", buttons[id]);
    });

    btn.addEventListener("touchend", (e) => {
        e.preventDefault();
        console.log("Stop");
    });
});