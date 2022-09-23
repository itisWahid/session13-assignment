let inputFeild = document.getElementById("input-field");
let op;
inputFeild.addEventListener("input", function () {
  if (inputFeild.value === "") {
    inputFeild.value = "0";
  }
});
inputFeild.addEventListener("keydown", function (e) {
  let lastChar = inputFeild.value[inputFeild.value.length - 1];
  if (
    (e.keyCode >= 48 && e.keyCode <= 57) ||
    (e.keyCode >= 96 && e.keyCode <= 105)
  ) {
    if (inputFeild.value === "0") {
      inputFeild.value = "";
    }
  } else if (e.keyCode === 13) {
    if (
      lastChar === "+" ||
      lastChar === "*" ||
      lastChar === "/" ||
      lastChar === "-"
    ) {
      return;
    }
    calculate();
  } else if (
    e.keyCode === 111 ||
    e.keyCode === 107 ||
    e.keyCode === 109 ||
    e.keyCode === 106
  ) {
    if (
      lastChar === "+" ||
      lastChar === "*" ||
      lastChar === "/" ||
      lastChar === "-"
    ) {
      inputFeild.value = inputFeild.value.slice(0, inputFeild.value.length - 1);

      op = e.key;
      return;
    }
    if (op) {
      calculate();

      //   inputFeild.value = e.key;
    }
    op = e.key;
  } else if (e.keyCode === 8) {
    if (
      lastChar === "+" ||
      lastChar === "*" ||
      lastChar === "/" ||
      lastChar === "-"
    ) {
      op = undefined;
    }
  } else {
    e.preventDefault();
    return;
  }
});

function clearLeadingZero() {
  if (inputFeild.value === "0") {
    inputFeild.value = "";
  }
}
function input1() {
  clearLeadingZero();
  inputFeild.value = inputFeild.value + "1";
}
function input2() {
  clearLeadingZero();
  inputFeild.value = inputFeild.value + "2";
}
function input3() {
  clearLeadingZero();
  inputFeild.value = inputFeild.value + "3";
}
function input4() {
  clearLeadingZero();
  inputFeild.value = inputFeild.value + "4";
}
function input5() {
  clearLeadingZero();
  inputFeild.value = inputFeild.value + "5";
}
function input6() {
  clearLeadingZero();
  inputFeild.value = inputFeild.value + "6";
}
function input7() {
  clearLeadingZero();
  inputFeild.value = inputFeild.value + "7";
}
function input8() {
  clearLeadingZero();
  inputFeild.value = inputFeild.value + "8";
}
function input9() {
  clearLeadingZero();
  inputFeild.value = inputFeild.value + "9";
}
function input0() {
  clearLeadingZero();
  inputFeild.value = inputFeild.value + "0";
}

function calculate() {
  let nums = inputFeild.value;
  if (op) {
    nums = nums.split(op);

    let n1 = parseInt(nums[0]);
    let n2 = parseInt(nums[1]);

    switch (op) {
      case "/":
        inputFeild.value = n1 / n2;
        break;
      case "*":
        inputFeild.value = n1 * n2;
        break;
      case "+":
        inputFeild.value = n1 + n2;
        break;
      case "-":
        inputFeild.value = n1 - n2;
        break;
    }
    op = undefined;
  }
}

function clearInput() {
  inputFeild.value = "0";
}

function operateDiv() {
  if (op) {
    calculate();
  }
  op = "/";
  inputFeild.value = inputFeild.value + "/";
}
function operateMin() {
  if (op) {
    calculate();
  }
  op = "-";
  inputFeild.value = inputFeild.value + "-";
}
function operateMul() {
  if (op) {
    calculate();
  }
  op = "*";
  inputFeild.value = inputFeild.value + "*";
}
function operateSum() {
  if (op) {
    calculate();
  }
  op = "+";
  inputFeild.value = inputFeild.value + "+";
}
