const planButtons = document.querySelectorAll(".plan button");
const backDrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const cancel = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

// const gogo = () => {
//   lele();
// }
// gogo();
// const lele = () => {
//   console.log("lele");
// }

const buttonClick = () => {
  // backDrop.style.display = "block";
  // modal.style.display = "block";
  backDrop.classList.add("open");
  modal.classList.add("open");
};

const noClick = () => {
  // backDrop.style.display = "none";
  // modal.style.display = "none";
  // mobileNav.style.display = "none";
  backDrop.classList.remove("open");
  if (modal) {
    modal.classList.remove("open");
  }
  mobileNav.classList.remove("open");
  // buttonToggle();
};

const buttonToggle = () => {
  // mobileNav.style.display = "block";
  // backDrop.style.display = "block";
  backDrop.classList.add("open");
  mobileNav.classList.add("open");
  // console.log("!!"); 이미 한 번 다 훑었고, 첫 클릭에서 버튼 토글을 실행했었음. 그래서 가능. 위 주석과 비교.
};

for (let i = 0; i < planButtons.length; ++i) {
  planButtons[i].addEventListener("click", buttonClick);
}
backDrop.addEventListener("click", noClick);
if (modal) {
  cancel.addEventListener("click", noClick);
}
toggleButton.addEventListener("click", buttonToggle);
