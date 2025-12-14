function start(){
    console.log("Game Started");

    document.getElementById("rolldice1").disabled = false;
    document.getElementById("restart").disabled = false;
    document.getElementById("start").disabled = true;
}
function restart(){
    window.location.reload();
}

function p1Play(){
    console.log("Player1Playing")
    let Score = Number(document.getElementById("p1Score").innerText);
    const DF = Math.floor(Math.random() * 6) + 1;
    switch (DF){
        case 1: document.getElementById("p1dice").src = "./"
    }
    Score = Score + DF
    document.getElementById("p1Score").innerText = Score;
}
function p2Play(){
    console.log("Player2Playing")

}