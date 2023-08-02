window.onload = () => {
  createDivs();
  swal("Click To The Box To Copy The Color");
};

document.querySelector(".refresh-btn").addEventListener("click", () => {
  document.querySelector(".container").textContent = "";
  createDivs();
});

let boxsNumber = 35;

function createDivs() {
  for (let i = 0; i < boxsNumber; i++) {
    let div = document.createElement("div");
    div.className = "color";

    let colorHex = Math.random().toString(16).slice(2, 8).toUpperCase();
    div.style.backgroundColor = `#${colorHex}`;
    div.appendChild(document.createTextNode(`#${colorHex}`));

    document.querySelector(".container").appendChild(div);

    div.addEventListener("click", () => copyColor(colorHex));
  }
}

function copyColor(colorHex) {
  navigator.clipboard.writeText(`#${colorHex}`);
  swal({
    text: `The Color #${colorHex} Copied To The Clipboard`,
    icon: "success",
    button: "Ok",
  });
}
