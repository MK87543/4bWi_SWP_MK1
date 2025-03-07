const yearButton = document.getElementById("yearButton");
let allLeagues = [];
let filteredLeagues = [];
let uniqueLeagues = [];
let league_short = "";

document.getElementById("btnSearch").addEventListener("click", function () {
    const searchInput = document.getElementById("leagueSearch").value;
    filterLeagues(searchInput);
    processUniqueLeagues();
    printFilteredLeagues();
});


document.getElementById("leagueSearch").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btnSearch").click();
    }
});

function fetchAllLeagues() {
    fetch("https://api.openligadb.de/getavailableleagues")
        .then(response => response.json())
        .then(leagues => {
            console.log("Leagues", leagues);
            allLeagues = leagues;
            filteredLeagues = leagues;
            console.log("filtered", filteredLeagues);

            processUniqueLeagues()
            printFilteredLeagues();

        });
}



function filterLeagues(search) {
    filteredLeagues = allLeagues.filter(league => league.leagueName.toLowerCase().includes(search.toLowerCase()))
}

function processUniqueLeagues() {
    const leagueMap = new Map();

    filteredLeagues.forEach(league => {
        const fullName = league.leagueName.trim();
        const normalized = normalizeLeagueName(fullName);

        if (!leagueMap.has(normalized.group)) {
            leagueMap.set(normalized.group, {
                name: normalized.display,
                seasons: [],
                originalData: []
            });
        }

        leagueMap.get(normalized.group).originalData.push(league);

        const seasonInfo = {
            leagueId: league.leagueId,
            season: league.leagueSeason,
            fullName: league.leagueName,
            leagueShortcut: league.leagueShortcut
        };

        if (seasonInfo.season &&
            !leagueMap.get(normalized.group).seasons.some(s =>
                s.leagueId === seasonInfo.leagueId && s.season === seasonInfo.season
            )) {
            leagueMap.get(normalized.group).seasons.push(seasonInfo);
        }
    });

    leagueMap.forEach(league => {
        league.seasons.sort((a, b) => {
            const seasonA = parseInt(a.season) || a.season;
            const seasonB = parseInt(b.season) || b.season;

            if (typeof seasonA === 'number' && typeof seasonB === 'number') {
                return seasonB - seasonA;
            } else {
                return String(b.season).localeCompare(String(a.season));
            }
        });
    });

    uniqueLeagues = Array.from(leagueMap.values());
}


function printFilteredLeagues() {
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = '';

    if (uniqueLeagues.length === 0) {
        contentDiv.textContent = 'No leagues found.';
        return;
    }

    uniqueLeagues.forEach(league => {
        const leagueContainer = document.createElement('div');
        leagueContainer.classList.add('league-container');
        leagueContainer.style.marginBottom = '10px';

        const leagueHeader = document.createElement('div');
        leagueHeader.classList.add('league-item');
        leagueHeader.textContent = league.name;
        leagueHeader.style.cursor = 'pointer';
        leagueHeader.style.fontWeight = 'bold';
        leagueHeader.style.padding = '8px 0';
        leagueHeader.style.borderBottom = '1px solid #ddd';

        const seasonsContainer = document.createElement('div');
        seasonsContainer.classList.add('seasons-container');
        seasonsContainer.style.display = 'none';
        seasonsContainer.style.paddingLeft = '20px';

        if (league.seasons.length > 0) {
            league.seasons.forEach(seasonInfo => {
                const seasonElement = document.createElement('div');
                seasonElement.classList.add('season-item');
                seasonElement.textContent = seasonInfo.season;
                seasonElement.title = seasonInfo.fullName;
                seasonElement.style.cursor = 'pointer';
                seasonElement.style.padding = '5px 0';

                seasonElement.addEventListener('click', function () {
                    const nextElement = seasonElement.nextElementSibling;
                    if (nextElement && nextElement.classList.contains('goalgetters-container')) {
                        nextElement.remove();
                    } else {
                        const goalGettersContainer = document.createElement('div');
                        goalGettersContainer.classList.add('goalgetters-container');
                        goalGettersContainer.style.paddingLeft = '20px';
                        goalGettersContainer.style.marginBottom = '10px';

                        const loadingElement = document.createElement('div');
                        loadingElement.textContent = 'Loading goalgetters...';
                        goalGettersContainer.appendChild(loadingElement);

                        seasonElement.parentNode.insertBefore(goalGettersContainer, seasonElement.nextSibling);

                        fetchGoalGetters(seasonInfo.leagueShortcut, seasonInfo.season, goalGettersContainer);
                    }
                });

                seasonsContainer.appendChild(seasonElement);
            });
        } else {
            const noSeasonsElement = document.createElement('div');
            noSeasonsElement.textContent = 'No seasons available for this league.';
            seasonsContainer.appendChild(noSeasonsElement);
        }

        leagueHeader.addEventListener('click', function () {
            seasonsContainer.style.display = seasonsContainer.style.display === 'none' ? 'block' : 'none';
        });

        leagueContainer.appendChild(leagueHeader);
        leagueContainer.appendChild(seasonsContainer);
        contentDiv.appendChild(leagueContainer);
    });
}

function fetchGoalGetters(leagueShortcut, season, container) {
    if (!leagueShortcut) {
        container.innerHTML = 'League shortcut not available for this league.';
        return;
    }

    fetch(`https://api.openligadb.de/getgoalgetters/${leagueShortcut}/${season}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(goalGetters => {
            container.innerHTML = '';

            if (!goalGetters || goalGetters.length === 0) {
                container.textContent = 'No goalgetters available for this league or season.';
                return;
            }

            const table = document.createElement('table');
            table.style.width = '100%';
            table.style.borderCollapse = 'collapse';
            table.style.marginTop = '10px';

            const headerRow = document.createElement('tr');
            const nameHeader = document.createElement('th');
            nameHeader.textContent = 'Player';
            nameHeader.style.textAlign = 'left';
            nameHeader.style.padding = '5px';

            const goalHeader = document.createElement('th');
            goalHeader.textContent = 'Goals';
            goalHeader.style.textAlign = 'right';
            goalHeader.style.padding = '5px';

            headerRow.appendChild(nameHeader);
            headerRow.appendChild(goalHeader);
            table.appendChild(headerRow);

            goalGetters.forEach((goalGetter, index) => {
                const row = document.createElement('tr');
                row.style.backgroundColor = index % 2 === 0 ? '#f9f9f9' : 'white';

                const nameCell = document.createElement('td');
                nameCell.textContent = goalGetter.goalGetterName;
                nameCell.style.padding = '5px';

                const goalCell = document.createElement('td');
                goalCell.textContent = goalGetter.goalCount;
                goalCell.style.textAlign = 'right';
                goalCell.style.padding = '5px';

                row.appendChild(nameCell);
                row.appendChild(goalCell);
                table.appendChild(row);
            });

            container.appendChild(table);
        })
        .catch(error => {
            console.error("Error fetching goalgetters:", error);
            container.innerHTML = `Error loading goalgetters: ${error.message}`;
        });
}

function normalizeLeagueName(fullName) {
    let name = fullName.replace(/\s+\d{2,4}(\/\d{2,4})?.*$/, "");
    name = name.replace(/\s+powered by.*$/i, "");
    name = name.replace(/\s+imoled Content.*$/i, "");
    name = name.trim();
    const groupKey = name.toLowerCase().replace(/fussball/g, "fußball");
    return { display: name, group: groupKey };
}

fetchAllLeagues();