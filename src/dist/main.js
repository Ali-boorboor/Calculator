"use strict";
//  ! constants
const $ = document;
const calScreen = $.getElementById("cal-screen");
const btns = $.querySelectorAll("#btn");
const resultBtn = $.getElementById("result-btn");
const clearBtn = $.getElementById("clear-btn");
const cBtn = $.getElementById("c-btn");
// ! events
resultBtn.addEventListener("click", () => {
    const operator = calScreen.value.match(/\*|\+|\-|\//);
    const userValue = calScreen.value.split(/\*|\+|\-|\//);
    (operator === null || operator === void 0 ? void 0 : operator[0]) === "+"
        ? (calScreen.value = String(+userValue[0] + +userValue[1]))
        : (operator === null || operator === void 0 ? void 0 : operator[0]) === "-"
            ? (calScreen.value = String(+userValue[0] - +userValue[1]))
            : (operator === null || operator === void 0 ? void 0 : operator[0]) === "*"
                ? (calScreen.value = String(+userValue[0] * +userValue[1]))
                : (operator === null || operator === void 0 ? void 0 : operator[0]) === "/"
                    ? (calScreen.value = String(+userValue[0] / +userValue[1]))
                    : null;
});
btns.forEach((btn) => {
    btn.addEventListener("click", () => (calScreen.value += btn.value));
});
clearBtn.addEventListener("click", () => (calScreen.value = ""));
cBtn.addEventListener("click", () => (calScreen.value = calScreen.value.slice(0, -1)));