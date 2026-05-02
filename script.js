
// changing css
function darkmode(){
    document.getElementById("body").style.background = "black";
    document.getElementById("body").style.color = "white";
}
function brightmode(){
    document.getElementById("body").style.background = "white";
    document.getElementById("body").style.color = "black";
}
const quotes = [
    '"Remember why you started"',
    '"Small progress everyday adds up."',
    '"Discipline beats motivation."',
    '"Your future is in your hands."',
    '"Direction makes goals."',
    '"Push yourself because no one is coming to do it fot you."',
    '"Dream big, work hard."',
    '"Consistency is the key to success."'
];
let index = 0;

function changeQuotes(){
    const q = 
    document.getElementById("lines");
    if(q == null){
        console.log("Element not found");
    }
    
    q.style.opacity = 0; 
    
    setTimeout(() => {
        q.innerText = quotes[index];
        q.style.opacity = 1;
        index = (index + 1) % quotes.length;
    }, 500);
    
}
setInterval(changeQuotes, 4000);