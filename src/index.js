const lines = document.querySelectorAll('.bottom_section .line');
const sideBarImg = document.getElementById("side_bar_img");
const mobile_icon = document.querySelector('.fa-solid');
const side_menu_mobile = document.querySelector('.side_menu_mobile')
const close_menu = document.querySelector('.close_menu')
// Add Active Class To Lines

lines.forEach((ele) => {

    ele.addEventListener("click", () => {

        lines.forEach((ele) => {
            ele.classList.remove("active")
        })

        ele.classList.add("active")

    })
})

// Add Active Class To Lines



sideBarImg.onclick = function (e) {
  e.stopPropagation();

  document.body.innerHTML += `
    <div class = 'img_background' style = "height: 50%; width: fit-content; background: white; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); borderRadius: 20px; display: flex; alignItems: center; justifyContent: center; padding: 20px      ">
        <img src = ${sideBarImg.src}></img>
    </div>
  `
}

document.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelector(".img_background")?.remove()
})

mobile_icon.addEventListener("click", () => {
    side_menu_mobile.style.left = '0px'
})


close_menu.addEventListener("click", function () {
    side_menu_mobile.style.left = '-400px'
})


window.addEventListener("resize", () => {
    if(window.innerWidth > 850) {
        side_menu_mobile.style.left = '-400px'
    }
})



