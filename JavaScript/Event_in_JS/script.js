function on(){
    document.getElementById("bulb").style.backgroundColor = "yellow";
}
function off(){
    document.getElementById("bulb").style.backgroundColor = "white"
}
function red(){
    document.getElementById("bulb").style.backgroundColor = "red";
}function blue(){
    document.getElementById("bulb").style.backgroundColor = "blue";
}function green(){
    document.getElementById("bulb").style.backgroundColor = "green";
}
const userColor = document.getElementById("color");
function SB_Control(){
    const btn = document.getElementById("SB_btn");
    if(btn.innerText === "On"){
        document.getElementById("SB_btn").innerText = "off";
        document.getElementById("SmartBulb").classList.add("on")
    } else{
        document.getElementById("SB_btn").innerText = "on"
        document.getElementById("SB_btn").classList.remove("off")

    }
}
