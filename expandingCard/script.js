const panel = document.querySelectorAll(".panel")
const photoTitle = document.querySelectorAll(".photo-title")


// function expandPanel() {
//         console.log("panel clicked");
//         panel[2].classList.add("active") 
// }
panel.forEach(element => {
    // console.log(element);
    element.addEventListener("click", ()=>{
        panel.forEach((ele)=>{
            ele.classList.remove("active")
            ele.firstChild.classList.remove("active")
        })
        element.classList.add("active")
        element.firstChild.classList.add("active")
    })
});
// console.log( panel[2].classList);