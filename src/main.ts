import "./style.css";

const keys = [...document.querySelectorAll(".keys")] as HTMLElement[];
const displayInput = document.querySelector(
  ".display .input"
) as HTMLInputElement;
const displayOutput = document.querySelector(
  ".display .output"
) as HTMLInputElement;

let input = "";

keys.forEach((key: HTMLElement) => {
  const value = key.dataset.key;
  key.addEventListener("click", () => {
    if (value === "clear") {
      input = "";
      displayInput.innerHTML = "";
      displayOutput.innerHTML = "";
    } else if (value === "backspace") {
      input = input.slice(0, -1);
    }
  });
});
