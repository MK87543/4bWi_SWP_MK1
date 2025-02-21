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
            printFilteredLeagues();

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
        name = league.name =
            leagueItem.textContent = league.leagueName;
        contentDiv.appendChild(leagueItem);
    });
}



function filterLeagues(search) {
    filteredLeagues = allLeagues.filter(league => league.leagueName.toLowerCase().includes(search.toLowerCase()))
}



/*function printFilteredLeagues() {
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


        const cell = document.createElement('td');
        cell.textContent = league.leagueSeason;
        row.appendChild(cell);

        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    contentDiv.appendChild(table);
}


*/

fetchAllLeagues();
