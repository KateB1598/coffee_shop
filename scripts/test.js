const button = document.querySelector(".button");
const input = document.querySelector("input");

const callback = () => {
  console.log("Click");
};
button.addEventListener("click", callback);
button.removeEventListener("click", callback);

const handleInputFocus = () => {
  console.log("Focus");
};

const handleInputBlur = () => {
  console.log("Blur");
};

const handleInputChange = (event) => {
  console.log(event.target.value);
};

input.addEventListener("blur", handleInputBlur);
//input.removeEventListener("blur", handleInputBlur);//
input.addEventListener("focus", handleInputFocus);
//input.removeEventListener("focus", handleInputFocus);//
input.addEventListener("input", handleInputChange);
//input.removeEventListener("input", handleInputChange);//

function handleButtonClick(buttonId, message) {
  const button = document.getElementById(buttonId);
  if (!button) {
    console.warn(`Button with ID "${buttonId}" not found`);
    return;
  }
  const handler = () => console.log(message);
  button.addEventListener("click", handler);
}
handleButtonClick("myButton", "Button clicked!");

function trackMousePosition() {
  window.mouseHandeler = (event) => {
    console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
  };
  document.addEventListener("mousemove", window.mouseHandeler);
}
function stopMouseTracking() {
  if (window.mouseHandeler) {
    document.removeEventListener("mousemove", window.mouseHandeler);
    console.log(TrackingOff);
  }
}
trackMousePosition();

function setupEventDelegation(selector) {
  const list = document.querySelector(selector);
  if (!list) {
    console.warn(`List selector "${selector}" not found`);
    return;
  }
  list.addEventListener("click", (event) => {
    if (event.target && event.target.tagName === "LI") {
      const text = event.target.textContent.trim();
      console.log(`Iten clicked: ${text}`);
    }
  });
}
function createTestList() {
  document.body.innerHTML += `
    <ul id="testList">
     <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    `;
}
createTestList();
setupEventDelegation("#testList");
