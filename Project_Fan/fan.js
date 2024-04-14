document.getElementById("onoff").addEventListener("click", () => 
{
    document.getElementById("fanBlade").classList.toggle("fanOn");
    document.getElementById("fanBlade").classList.remove("fanOne");
    document.getElementById("fanBlade").classList.remove("fanTwo");
    document.getElementById("fanBlade").classList.remove("fanThree");
    
});



document.getElementById("slow").addEventListener("click", () => {
    document.getElementById("fanBlade").classList.add("fanOne");
    document.getElementById("fanBlade").classList.remove("fanTwo");
    document.getElementById("fanBlade").classList.remove("fanThree");
    
});
document.getElementById("medium").addEventListener("click", () => {
    document.getElementById("fanBlade").classList.remove("fanOne");
    document.getElementById("fanBlade").classList.add("fanTwo");
    document.getElementById("fanBlade").classList.remove("fanThree");

});
document.getElementById("high").addEventListener("click", () => {

    document.getElementById("fanBlade").classList.remove("fanOne");
    document.getElementById("fanBlade").classList.remove("fanTwo");
    document.getElementById("fanBlade").classList.add("fanThree");

});



