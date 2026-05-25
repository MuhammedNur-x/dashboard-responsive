const lines = document.querySelectorAll('.bottom_section .line');


lines.forEach((ele) => {

    ele.addEventListener("click", () => {

        lines.forEach((ele) => {
            ele.classList.remove("active")
        })

        ele.classList.add("active")

    })
})