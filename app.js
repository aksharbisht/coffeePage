function showBar()
{
    let element = document.querySelector(".navPhone");

    let backDrop = document.querySelector(".backdrop");
    backDrop.style.display='block'
    element.style.left='0%';
 

}
function hidebar()
{
    console.log("hide clicked");
    let element = document.querySelector(".navPhone");
    let backDrop = document.querySelector(".backdrop");
    element.style.left="-50%";
    backDrop.style.display='none';
}
window.addEventListener("resize", (event) => {

    if (checkWindowWidth(768)) {
        const menu = document.querySelector(".navPhone");
        menu.style.display = "none";
        element.style.left="-50%"
    }
    });


    function checkWindowWidth(width) {
        return window.innerWidth >= width;
    }
