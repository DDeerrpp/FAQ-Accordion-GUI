var btns = document.querySelectorAll(".faq-btn");
var questions = document.querySelectorAll(".faq-question");


btns.forEach((element, index) => {
    element.addEventListener('click', () => {
        // console.log("clicked from " + index)
        if (questions[index].style.height == "auto") {
            questions[index].style.height = "10%";
            element.src = "./assets/images/icon-plus.svg";
        } else {
            questions.forEach((el, i) => {
                el.style.height = "10%";
                btns[i].src = "./assets/images/icon-plus.svg";
            })
            questions[index].style.height = "auto";
            element.src = "./assets/images/icon-minus.svg";
        }
    })
})
