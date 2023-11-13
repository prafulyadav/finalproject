elements = Array.from(document.querySelectorAll(".card"));

btn = [
  [],
  [3, 4, 6, 7, 8, 9, 10],
  [2, 3, 5, 8],
  [1, 2, 5, 6, 7, 8, 9, 10],
  [1, 2, 4, 5, 7],
];

buttons = Array.from(document.querySelectorAll(".myButton"));

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener(
    "click",
    (function (index) {
      return function () {
        elements.forEach(function (e) {
          if (btn[index].includes(parseInt(e.id))) {
            e.style.display = "none";
          } else {
            e.style.display = "block";
          }
        });
      };
    })(i)
  );
}
