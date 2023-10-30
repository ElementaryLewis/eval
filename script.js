const buttonAdd = document.getElementById("buttonAdd");
const filledBlock = document.getElementById("filled");
const buttonNo = document.getElementById("buttonNo");
const buttonYes = document.getElementById("buttonYes");

let writeText = document.getElementById("writeText");
let warningBlock = document.getElementById("warning");

buttonAdd.addEventListener("click", () => {
  if (writeText.value === "") {
    window.alert("It's empty");
    return;
  } else {
    //Create div class=valueFill with writeText value.
    let valueFill = document.createElement("div");
    valueFill.textContent = writeText.value;
    //Create div class=buttonDelete and img id=bin with src.

    let buttonDelete = document.createElement("div");
    let bin = document.createElement("img");

    //ajouter bin à  buttonDelete

    buttonDelete.appendChild(bin);
    //ajout de classe à valueFill
    valueFill.classList.add("valueFill");

    buttonDelete.classList.add("buttonDelete");

    buttonDelete.addEventListener("click", () => {
      warningBlock.style.setProperty("--hide-n-seek", "flex");

      buttonYes.addEventListener("click", () => {
        valueFill.remove();
        buttonDelete.remove();
        bin.remove();
        warningBlock.style.setProperty("--hide-n-seek", "none");
      });

      buttonNo.addEventListener("click", () => {
        warningBlock.style.setProperty("--hide-n-seek", "none");
      });
    });

    bin.setAttribute("id", "bin");
    bin.setAttribute("alt", "Delete the text");
    bin.setAttribute("src", "./484662.png");
    //ajout du buttonDelete à valueFill
    valueFill.appendChild(buttonDelete);
    //Insert the created html to const filledBlock
    filledBlock.appendChild(valueFill);
    filledBlock.appendChild(buttonDelete);
    buttonDelete.appendChild(bin);
  }
});
