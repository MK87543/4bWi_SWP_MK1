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
        if (currentYear) { // Only load if year is also selected
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
        if (currentLeague) { // Only load if league is also selected
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

const fillTable = (data) => {
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




