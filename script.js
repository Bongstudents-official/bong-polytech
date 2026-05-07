//quotes
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

function changeQuotes() {
    const q = document.getElementById("lines");
    if (q == null) {
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

//navmenu

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

//searchbar

function goSearch(event) {
    if (event.key !== "Enter") {
        return;
    }
    const serach = document.getElementById("siteSearch").value.toLowerCase().trim();
    if (serach.includes("first year")) {
        window.location = "first-year-all-branches.html";
    } else if (serach.includes("first semester")) {
        window.location = "1-sem.html";
    } else if (serach.includes("1 semester")) {
        window.location = "1-sem.html";
    } else if (serach.includes("second semester")) {
        window.location = "2-second.html";
    } else if (serach.includes("2 semester")) {
        window.location = "2-second.html";
    }
}

//
