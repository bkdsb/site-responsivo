const menuItems = document.querySelectorAll('.nav a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollonclick);
});

function scrollonclick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute('href');
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to - 10,
    behavior: "smooth",
  });
}