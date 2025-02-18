const yearButton = document.getElementById("yearButton");
let allLeagues = [];
let filteredLeagues = [];

document.getElementById("btnSearch").addEventListener("click", function () {
    const searchInput = document.getElementById("leagueSearch").value;
    filterLeagues(searchInput);
    printFilteredLeagues();
})




function fetchAvailableYears(league) {
    fetch("https://api.openligadb.de/getavailableyears/" + league)
        .then(response => response.json())
        .then(years => {

        })
        .catch(error => console.error("Error fetching years:", error));
}



function fetchAllLeagues() {
    fetch("https://api.openligadb.de/getavailableleagues")
        .then(response => response.json())
        .then(leagues => {
            console.log("Leagues", leagues);
            allLeagues = leagues;
            filteredLeagues = leagues;
            console.log("filtered", filteredLeagues);
            printAllLeagues();

        });
}

function printFilteredLeagues() {
    const contentDiv = document.querySelector('.content');

    contentDiv.innerHTML = '';

    if (filteredLeagues.length === 0) {
        contentDiv.textContent = 'No leagues found.';
        return;
    }

    filteredLeagues.forEach(league => {
        const leagueItem = document.createElement('div');
        leagueItem.classList.add('league-item');
        leagueItem.textContent = league.leagueName;
        contentDiv.appendChild(leagueItem);
    });
}


function printAllLeagues() {

}

function filterLeagues(search) {
    filteredLeagues = allLeagues.filter(league => league.leagueName.toLowerCase().includes(search.toLowerCase()))



}
fetchAllLeagues();



function printFilteredLeagues() {
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = '';

    if (filteredLeagues.length === 0) {
        contentDiv.textContent = 'No leagues found.';
        return;
    }

    const table = document.createElement('table');
    table.classList.add('league-table');


    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headerCell = document.createElement('th');
    headerCell.textContent = 'Season';
    headerRow.appendChild(headerCell);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    filteredLeagues.forEach(league => {
        const row = document.createElement('tr');
        row.style.cursor = "pointer";

        row.addEventListener("click", function () {
            leagueClicked(league);
        });

        const cell = document.createElement('td');
        cell.textContent = league.leagueSeason;
        row.appendChild(cell);

        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    contentDiv.appendChild(table);
}



function leagueClicked(league) {
    fetchAvailableYears(league);
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



