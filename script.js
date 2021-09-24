const menuBtn = document.querySelector('.menu-btn')
const navLink = document.querySelector('.nav-links')
const roadmapLink = document.getElementById('roadmap')
const buyBtn = document.getElementById('buy-btn-id')

menuBtn.addEventListener('click', () => {
    navLink.classList.toggle('mobile-menu')
})
roadmapLink.addEventListener('click', () => {
    document.getElementById('roadmap-img').scrollIntoView()
    navLink.classList.toggle('mobile-menu')
})
buyBtn.addEventListener('click', () => {
    document.getElementById('buy-section').scrollIntoView()
})

function copyToClipboard() {
    var copyText = document.getElementById("wallet");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}


// var countDownDate = new Date("Oct 1, 2021 22:00:00").getTime();
var countDownDate = new Date("Oct 1, 2021 22:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
document.getElementById("countdown-div").style.display = "flex";

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";

// If the count down is finished, write some text
if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-div").style.display = "none";
    document.getElementById("buy-btn-id").style.display = "inline"
    document.getElementById("buy-section").style.display = "flex"
}
}, 1000);