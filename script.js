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

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },

    {
        threshold: 0.15
    }
);

reveals.forEach((section) => {
    observer.observe(section);
});
//

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    let count = 0;

    const update = () => {
        if (count < 1000) {
            count += 25;

            counter.innerText = count + "+";

            setTimeout(update, 20);
        }
    };

    update();
});
//

const navMenu = document.getElementById("navMenu");

document.addEventListener("click", function (event) {
    const hamburger = document.querySelector(".hamburger");

    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        navMenu.classList.remove("active");
    }
});
//
function addSubject() {
    const row = document.createElement("div");

    row.className = "subject-row";

    row.innerHTML = `

<input
type="number"
placeholder="Credits"
class="credit">

<input
type="number"
placeholder="Grade Point"
class="grade">

`;

    document.getElementById("subjects").appendChild(row);
}

function calculateSGPA() {
    const credits = document.querySelectorAll(".credit");

    const grades = document.querySelectorAll(".grade");

    let totalCredits = 0;

    let totalPoints = 0;

    for (let i = 0; i < credits.length; i++) {
        const c = parseFloat(credits[i].value) || 0;

        const g = parseFloat(grades[i].value) || 0;

        totalCredits += c;

        totalPoints += c * g;
    }

    const sgpa = totalPoints / totalCredits;

    document.getElementById("result").innerText = "Your SGPA: " + sgpa.toFixed(2);
}
