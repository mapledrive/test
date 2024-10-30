import "./style.css";
//import { setupCounter } from './counter.js'

const toggleButton = document.querySelector(".logo-icon");
const svg = document.querySelector(".logo-icon svg");
const arrowPath = svg.querySelector("#arrow-path");
const hamburgerPath = svg.querySelector("#hamburger-path");
hamburgerPath.style.display = "none";
const element = document.getElementById("sidebar");
const logoText = document.querySelector(".logo-text");
const testList = document.getElementById("tests");
const testLinks = testList.querySelectorAll("a");
const contentArea = document.getElementById("content");

toggleButton.addEventListener("click", () => {
  if (arrowPath.style.display === "none") {
    arrowPath.style.display = "block";
    logoText.style.display = "flex";
    testList.style.display = "block";
    hamburgerPath.style.display = "none";
    sidebar.style.flex = "0 1 300px";
  } else {
    arrowPath.style.display = "none";
    logoText.style.display = "none";
    testList.style.display = "none";
    hamburgerPath.style.display = "block";
    sidebar.style.flex = "0 1 50px";
  }
});

testLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    testLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");

    // Create the new "description" div
    const descriptionDiv = document.createElement("div");
    descriptionDiv.textContent = "Описание"; // Set content
    descriptionDiv.classList.add("description"); // Add class for styling

    const randomTextDiv = document.createElement("div");
    randomTextDiv.classList.add("explanation"); // Add class for styling
    const selectedTestName = event.target.innerText.slice(2);
    randomTextDiv.textContent = findTestById(selectedTestName);

    // Create the button container div
    const buttonContainerDiv = document.createElement("div");
    buttonContainerDiv.classList.add("button-container"); // Add class for styling

    // Create the start button
    const startButton = document.createElement("button");
    startButton.textContent = "Начать";
    startButton.classList.add("starting");
    startButton.addEventListener("click", function () {
      // Handle start button click logic here (e.g., trigger actions)
      console.log("start", currentTest);
    });

    // Create the cancel button
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Отмена";
    cancelButton.classList.add("cancelling");
    cancelButton.addEventListener("click", function () {
      // Handle cancel button click logic here (e.g., remove elements)
      contentArea.removeChild(descriptionDiv);
      contentArea.removeChild(randomTextDiv);
      contentArea.removeChild(buttonContainerDiv);
    });

    // Append buttons to the button container
    buttonContainerDiv.appendChild(startButton);
    buttonContainerDiv.appendChild(cancelButton);

    // Clear contentArea (optional, depending on desired behavior)
    contentArea.innerHTML = "";

    // Add the newly created elements to the contentArea
    contentArea.appendChild(descriptionDiv);
    contentArea.appendChild(randomTextDiv);
    contentArea.appendChild(buttonContainerDiv);

    // Set contentArea styling (optional, customize as needed)
    contentArea.style.justifyContent = "flex-start";
    contentArea.style.display = "flex"; // Ensure contentArea is displayed as flexbox
    contentArea.style.flexDirection = "column"; // Arrange elements in a column
  });
});

let currentTest;

const testArray = [
  {
    id: "Test's name",
    name: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip",
  },
  {
    id: "Another Test",
    name: "ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
  },
  {
    id: "Test",
    name: "dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt ",
  },
  {
    id: "Название теста",
    name: "proident sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
];

function findTestById(textString) {
  let result = testArray.find((obj) => obj.id === textString);
  currentTest = result;
  console.log("currentTest", currentTest);
  return result.name;
}
