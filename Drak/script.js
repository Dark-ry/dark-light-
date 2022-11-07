const toggle =document.querySelector(".tuggle");
const con =document.querySelector(".con");

toggle.addEventListener("click", function(){
    toggle.classList.toggle("active");
    document.body.classList.toggle("light");
    con.classList.toggle("active");
});