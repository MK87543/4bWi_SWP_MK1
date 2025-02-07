const leagueButton = document.getElementById("leagueButton");
const yearButton = document.getElementById("yearButton");
const leagueDropdown = document.getElementById("leagueDropdown");
const yearDropdown = document.getElementById("yearDropdown");
const selectionArea = document.querySelector(".selection-area");


leagueDropdown.addEventListener("click", (event) => {
    const selectedLeague = event.target.dataset.league;
    if (selectedLeague) {
        currentLeague = selectedLeague;
        leagueButton.textContent = event.target.textContent;
        if (currentYear) {
            loadData();
            loadData2();
        }
    }
});

yearDropdown.addEventListener("click", (event) => {
    const selectedYear = event.target.dataset.year;
    if (selectedYear) {
        currentYear = selectedYear;
        yearButton.textContent = event.target.textContent;
        if (currentLeague) {
            loadData();
        }
    }
});

const loadData = () => {

    const url = "https://api.openligadb.de/getgoalgetters/" + currentLeague + "/" + currentYear;
    fetch(url)
        .then(result => result.json())
        .then(data => fillTable(data))
};


fetch("https://api.openligadb.de/getavailableleagues")
    .then(response => response.json())
    .then(leagues => {
        const leagueDropdown = document.getElementById("leagueDropdown");
        leagues.forEach(league => {
            const item = document.createElement("a");
            item.href = "#";
            item.textContent = league.leagueName;
            item.dataset.league = league.leagueShortcut;
            item.addEventListener("click", (e) => {
                e.preventDefault();
                document.getElementById("leagueButton").textContent = league.leagueName;
            });
            leagueDropdown.appendChild(item);
        });
    })


function fetchAvailableYears(league) {
    fetch("https://api.openligadb.de/getavailableyears/" + league)
        .then(response => response.json())
        .then(years => {
            const yearDropdown = document.getElementById("yearDropdown");
            yearDropdown.innerHTML = ""; // Clear previous years
            years.forEach(year => {
                const a = document.createElement("a");
                a.href = "#";
                a.textContent = year;
                a.dataset.year = year;
                a.addEventListener("click", function (e) {
                    e.preventDefault();
                    currentYear = this.dataset.year;
                    document.getElementById("yearButton").textContent = this.textContent;
                    yearDropdown.style.display = "none";
                    // Call function here if needed to load data
                });
                yearDropdown.appendChild(a);
            });
        })
        .catch(error => console.error("Error fetching years:", error));
}


/*
  document.getElementById("leagueButton").addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown("leagueDropdown");
  });

  document.getElementById("yearButton").addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown("yearDropdown");
  }); */

/* const fillTable = (data) => {
    const header_goals = "<h2>Goals</h2>";
    const header_name = "<h2>Name</h2>";
    const spacer = "<div> ----------------</div>";

    let goals_html = "";
    let name_html = "";
    data.forEach(element => {
        goals_html += "<div> | " + element.goalCount + " </div>";
        goals_html += spacer;
        name_html += "<div> " + element.goalGetterName + " | </div>";
        name_html += spacer;

    });
    document.getElementById("goals").innerHTML = header_goals + spacer + goals_html;
    document.getElementById("name").innerHTML = header_name + spacer + name_html;

};
 */



