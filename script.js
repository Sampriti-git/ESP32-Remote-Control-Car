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

        // Later ESP32 Wi-Fi setup will be added here

        window.location.href = "./control.html";

    });

}


// ESP32 Control

const esp32 = "http://YOUR_ESP32_IP";


const buttons = {
    forward: "F",
    reverse: "B",
    left: "L",
    right: "R",
    stop: "S"
};


Object.keys(buttons).forEach(id => {

    const btn = document.getElementById(id);

    if (!btn) return;


    btn.addEventListener("mousedown", () => {

        let command = buttons[id];

        fetch(esp32 + "/" + command)
        .then(() => console.log(command))
        .catch(() => console.log("ESP32 not connected"));

    });


    btn.addEventListener("mouseup", () => {

        fetch(esp32 + "/S")
        .catch(() => console.log("ESP32 not connected"));

    });

});