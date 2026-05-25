const lines = document.querySelectorAll('.bottom_section .line');
const sideBarImg = document.getElementById("side_bar_img");



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
  const div = document.createElement("div");
  div.classList.add("img_background")
  div.style.height = '50%';
  div.style.width = '50%';
  div.style.background = 'white'
  div.style.position = "absolute"
  div.style.left = '50%'
  div.style.top = '50%'
  div.style.transform = 'translate(-50%, -50%)'
  div.style.borderRadius = '20px'
  div.style.display = 'flex'
  div.style.justifyContent = 'center';
  div.style.alignItems = 'center'
  div.style.width = 'fit-content'
  div.style.padding = '20px'
  document.body.appendChild(div)

  const img = document.createElement("img")
  img.style.width = '400px'
  img.src = this.src
  div.appendChild(img)
}

document.addEventListener("click", (e) => {
    
    document.querySelector(".img_background").remove()
})

