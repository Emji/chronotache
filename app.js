// Set the date we're counting down to
var Input = document.querySelector("input");

let btn = document.querySelector("#launch")


var value = Input.value
var Totaltime = ((value * 60) * 60) * 1000;
var countDownDate = Totaltime








// Update the count down every 1 second
let count = function () {



    var value = Input.value
    var Totaltime = ((value * 60) * 60) * 1000;
    var countDownDate = Totaltime

    // Get todays date and time
    var now = 0;


    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = hours + "h "
        + minutes + "m " + seconds + "s ";

    countDownDate = countDownDate - 1000
    valuemilli = countDownDate
    Input.value = (((valuemilli / 1000) / 60) / 60)

    Input.classList.add("d-none")


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
