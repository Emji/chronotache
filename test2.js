// Set the date we're counting down to
var Input = document.querySelector("input");

let btn = document.querySelector("#launch")


var value = Input.value
var Totaltime = ((value * 60) * 60) * 1000;
var countDownDate = Totaltime



// function chronometre
let count = function () {

    var value = Input.value
    var Totaltime = ((value * 60) * 60) * 1000;
    var countDownDate = Totaltime

    // met un temps de depart 
    let now = 0;


    // calcule le temps restant
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = hours + "h "
        + minutes + "m " + seconds + "s ";

    var countDownDate = countDownDate - 1000;

    let valuemilli = countDownDate
    Input.value = (((valuemilli / 1000) / 60) / 60)




    // If the count down is finished, write some text 
    if (distance < 0) {
        ;
        document.getElementById("demo").innerHTML = "EXPIRED";
        return;
    };


};


let discout = function () {

    let regex = /\d/;
    let InputTest = regex.test(Input.value)

    if (InputTest === false) { alert("Entrez un nombre valide"); Input.value = ""; } else {

        setInterval(count, 1000)
    }
}

btn.addEventListener("click", discout)
