let accordian = document.querySelectorAll(".FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    this.querySelector(".fa").classList.toggle("fa-plus");
    this.querySelector(".fa").classList.toggle("fa-times");

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
