const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "Node.js" },
  { label: "React" },
  { label: "Vue" },
  { label: "Next.js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "GraphQl" },
  { label: "PostgreSQL" },
  { label: "MongoDB" },
];

const listElement = document.querySelector(".js-list");
const inputElement = document.querySelector("#filter");
console.log(listElement);
const createListMarkup = (arr) => {
  const markup = arr.map((item) => `<li>${item.label}</li>`).join("");
  // console.log(markup);
  return markup;
};

const onInputChange = (event) => {
  // console.log(event.target.value);
  const filterValue = event.target.value.toLowerCase();
  console.log(filterValue);
  const filteredItems = tech.filter((item) =>
    item.label.toLowerCase().includes(filterValue)
  );
  console.log(filteredItems);
  listElement.innerHTML = createListMarkup(filteredItems);
};

// console.dir(_);

inputElement.addEventListener("input", _.debounce(onInputChange, 650));

// Напишіть скрипт привітання користувача на сторінці. Коли користувач
// введе своє ім’я в інпут на екрані повино з’явитися текст “Вітаємо,
//  ім’я!”. Текст повинен змінитися лише після того як користувач по
// вністю ввів своє ім’я.

const userGreating = (event) => {
  // console.log(event.target.value)
  if (event.target.value == 0) {
    alert(`Вітаємо, user !`);
  } else {
    alert(`Вітаємо, ${event.target.value} !`);
  }
};

inputElement.addEventListener("input", _.debounce(userGreating, 850));

const rangeInput = document.querySelector(".slider__input");
const sliderImg = document.querySelector(".slider__image");
const stopButton = document.querySelector(".stop_button");
// console.log(Number(rangeInput.value));
// console.log(sliderImg.width);
// console.log(sliderImg.height);
let inputValue = 0;
const onInput = (event) => {
  inputValue = Number(rangeInput.value);
  sliderImg.width = inputValue * 10;
  sliderImg.height = inputValue * 3;
};

rangeInput.addEventListener("input", _.debounce(onInput, 250));

const movebaleBox = document.querySelector("#box");

const onMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    movebaleBox.style.left = (mouseX - movebaleBox.clientWidth / 2) + 'px';
    movebaleBox.style.top = (mouseY - movebaleBox.clientHeight / 2) + 'px';
};



const onStopButtonClick = (event) => {
  // document.removeEventListener();
  document.addEventListener("mousemove", _.throttle(onMouseMove, 250));
}

stopButton.addEventListener("click", onStopButtonClick);