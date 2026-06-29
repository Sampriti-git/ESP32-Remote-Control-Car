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

        window.location.href = "https://github.com/Sampriti-git/ESP32-Remote-Control-Car.git./control.html";
    });
}

// Control Buttons
const buttons = {

    forward: "F",
    reverse: "B",
    left: "L",
    right: "R",
    stop: "S"

};
};

Object.keys(buttons).forEach(id => {
    const btn = document.getElementById(id);

    if (!btn) return;

    btn.addEventListener("mousedown", () => {
       const esp32 = "http://192.168.43.92";
    });

    btn.addEventListener("mouseup", () => {
        console.log("Stop");
        // We'll send the stop command here when the button is released.
    });

    btn.addEventListener("mousedown", () => {

    let command = buttons[id];

    fetch(esp32 + "/" + command);

});;
    });

    btn.addEventListener("mouseup", () => {

    fetch(esp32 + "/stop");

});
    });
});
