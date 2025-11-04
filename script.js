const display = document.getElementById("display");

// Tambah nombor/operator
function appendValue(value) {
  if (display.value === "0" && value !== ".") {
    display.value = value;
  } else {
    display.value += value;
  }
}

// Clear All
function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculateResult() {
  try {
    const expression = display.value
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/−/g, "-");

    const specials = {
      "1+1": "shibal",
      "2+2": "sekiya",
    };

    if (specials.hasOwnProperty(expression.replace(/\s+/g, ""))) {
      display.value = specials[expression.replace(/\s+/g, "")];
      return;
    }

    display.value = eval(expression);
  } catch (e) {
    display.value = "Error";
  }
}
