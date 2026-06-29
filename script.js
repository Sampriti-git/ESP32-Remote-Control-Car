// ─── Wi-Fi Setup Page ───────────────────────────────────────────────

const saveBtn = document.getElementById("saveBtn");

if (saveBtn) {
  saveBtn.addEventListener("click", () => {
    const ssid = document.getElementById("ssid").value.trim();
    const password = document.getElementById("password").value.trim();

    if (ssid === "" || password === "") {
      alert("Please enter Wi-Fi Name and Password.");
      return;
    }

    // When running on real ESP32, replace the line below with:
    // fetch("/save?ssid=" + encodeURIComponent(ssid) + "&pass=" + encodeURIComponent(password))
    //   .then(() => window.location.href = "./control.html")
    //   .catch(() => alert("Could not reach ESP32."));

    // For GitHub Pages demo — goes straight to control page:
    window.location.href = "./control.html";
  });
}


// ─── Car Control Page ────────────────────────────────────────────────

const esp32 = "http://YOUR_ESP32_IP"; // ← Replace with your ESP32's IP

const buttons = {
  forward: "F",
  reverse: "B",
  left:    "L",
  right:   "R",
  stop:    "S"
};

Object.keys(buttons).forEach(id => {
  const btn = document.getElementById(id);
  if (!btn) return;

  // Mouse press → send command
  btn.addEventListener("mousedown", () => {
    const command = buttons[id];
    fetch(esp32 + "/" + command)
      .then(() => console.log("Sent: " + command))
      .catch(() => console.log("ESP32 not connected"));
  });

  // Touch press (mobile) → send command
 
  // Mouse release → stop
  btn.addEventListener("click", () => {

    let command = buttons[id];

    fetch(esp32 + "/" + command)
    .then(() => console.log(command))
    .catch(() => console.log("ESP32 not connected"));

});

  // Touch release (mobile) → stop
  btn.addEventListener("touchend", (e) => {
    e.preventDefault();
    fetch(esp32 + "/S").catch(() => {});
  });
});
