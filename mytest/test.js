// function bt1(fileName)
// {
//     alert("hi");
//     let img=document.querySelector("#ban");
//     img.setAttribute("scr",fileName);
// }

//puppy.addEventListener("click",bt1);



// let kit=document.getElementById("b1");
// let pup=document.getElementById("b2");
// let imo=document.getElementById("im");
// function bt1()
// {
//     document.getElementById("im").src="../images/sandra.jpg"
// }
// function bt2()
// {
//     document.getElementById("im").src="../images/logo-vectoriel.jpg"
// }


// kit.onclick=bt1;
// pup.onclick=bt2;

// $("p:first").remove();

function bt1()
{
    document.getElementById("im").src="../images/sandra.jpg"
}
function bt2()
{
    document.getElementById("im").src="../images/logo-vectoriel.jpg"
}

window.onload()=function(){
   let kit=document.getElementById("b1");
let pup=document.getElementById("b2"); 
kit.onclick=bt1;
pup.onclick=bt2;
}