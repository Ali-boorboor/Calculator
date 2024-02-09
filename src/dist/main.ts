//  ! constants
const $ = document;
const calScreen = $.getElementById("cal-screen") as HTMLInputElement;
const btns = $.querySelectorAll("#btn")!;
const resultBtn = $.getElementById("result-btn") as HTMLInputElement;
const clearBtn = $.getElementById("clear-btn") as HTMLInputElement;
const cBtn = $.getElementById("c-btn") as HTMLInputElement;

// ! events
resultBtn.addEventListener("click", () => {
  const operator: RegExpMatchArray = calScreen.value.match(/\*|\+|\-|\//)!;
  const userValue: string[] = calScreen.value.split(/\*|\+|\-|\//);

  operator?.[0] === "+"
    ? (calScreen.value = String(+userValue[0] + +userValue[1]))
    : operator?.[0] === "-"
    ? (calScreen.value = String(+userValue[0] - +userValue[1]))
    : operator?.[0] === "*"
    ? (calScreen.value = String(+userValue[0] * +userValue[1]))
    : operator?.[0] === "/"
    ? (calScreen.value = String(+userValue[0] / +userValue[1]))
    : null;
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => (calScreen.value += (btn as HTMLInputElement).value));
});

clearBtn.addEventListener("click", () => (calScreen.value = ""));

cBtn.addEventListener("click", () => (calScreen.value = calScreen.value.slice(0, -1)));