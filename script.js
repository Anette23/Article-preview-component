const shareBtn = document.querySelector(".share-btn");
const afterContent = document.querySelector(".after");
const afterShareBtn = document.querySelector(".after-share-btn");

shareBtn.addEventListener("click", () => {
  afterContent.style.visibility = "visible";
});

afterShareBtn.addEventListener("click", () => {
  afterContent.style.visibility = "hidden";
});
