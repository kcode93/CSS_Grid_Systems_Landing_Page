const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

//adds and removes class hover-left when hovering hover
left.addEventListener('mouseenter', () => {
  container.classList.add("hover-left");
});

left.addEventListener('mouseleave', () => {
  container.classList.remove("hover-left");
});

//adds and removes class hover-right when hovering hover
right.addEventListener('mouseenter', () => {
  container.classList.add("hover-right");
});

right.addEventListener('mouseleave', () => {
  container.classList.remove("hover-right");
});
