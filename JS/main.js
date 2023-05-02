function openNav() {
    document.getElementById("mySidenav").style.left="400px";
    document.getElementById("Openbtn").style.marginLeft="600px";
}

function closeNav() {
    document.getElementById("mySidenav").style.left="-600px";
    document.getElementById("Openbtn").style.marginLeft="0px";

}
function showTime() {
    var date = new Date();
    var houres = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (houres > 12) {
        houres = houres - 12 
    };
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    houres = (houres < 10) ? "0" + houres : houres;
    var time = houres + ":" + minutes + ":" +seconds;
    document.getElementById("myClockDisplay").innerHTML=time;
    setTimeout(showTime, 1000);

}
showTime();
function moveTime() {
    document.getElementById("myClockDisplay").style.left="0px";
}
function moveTime2() {
    document.getElementById("myClockDisplay").style.left="-355px";
}
