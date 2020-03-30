var teamsAmount = 32;
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1_WTRL_jodERcYOb0fK6PsUhfpbUzRR57Y7cD0d9TBwY/edit?usp=sharing';


if (window.location.hash == "#bracket") {
    document.getElementById("share").style.display = "none";
    document.getElementById("hero").style.display = "none";

    document.getElementById("bracket").style.height = "100vh";
    document.getElementById("bracket").style.padding = "0";

    document.getElementById("bracket").firstChild.nextElementSibling.classList.add("vCenter");
}



function winCheck() {
    Array.from(document.getElementsByClassName("score")).forEach((el) => {
        if (el.innerHTML == "WIN") {
            if (el.parentElement.classList.contains("lose")) {
                el.parentNode.classList.remove("lose");
            }
            el.parentNode.classList.add("win");
            el.parentNode.style.opacity = 1;
        } else if (el.innerHTML == "LOSE") {
            if (el.parentElement.classList.contains("win")) {
                el.parentNode.classList.remove("win");
            }
            el.parentNode.classList.add("lose");
            el.parentNode.style.opacity = 1;
        }
    });
}

function init() {
    Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: showInfo,
        simpleSheet: true
    })
    winCheck();
}

function showInfo(data, tabletop) {
    tabletop.sheets()['info'].elements.forEach(function(data) {
        intro.innerHTML = data.intro;
        headline.innerHTML = data.headline;
        year.innerHTML = data.year;
        subtitle.innerHTML = data.subtitle;

        round1.innerHTML = data.round1;
        date1.innerHTML = data.date1;
        round2.innerHTML = data.round2;
        date2.innerHTML = data.date2;
        round3.innerHTML = data.round3;
        date3.innerHTML = data.date3;
        round1_right.innerHTML = data.round1_right;
        date1_right.innerHTML = data.date1_right;
        round2_right.innerHTML = data.round2_right;
        date2_right.innerHTML = data.date2_right;
        round3_right.innerHTML = data.round3_right;
        date3_right.innerHTML = data.date3_right;

        semiTop.innerHTML = data.semiTop;
        semiTopDate.innerHTML = data.semiTopDate;
        semiBot.innerHTML = data.semiBot;
        semiBotDate.innerHTML = data.semiBotDate;
        championship.innerHTML = data.championship;
        championshipDate.innerHTML = data.championshipDate;
    });

    tabletop.sheets()['round1'].elements.forEach(function(data) {
        for (let i = 1; i <= teamsAmount; i++) {
            let team = document.getElementById("team" + i);
            let score = document.getElementById("score" + i);

            team.innerHTML = data["team" + i];
            team.parentNode.style.opacity = (data["team" + i] !== '') ? 1 : '';
            score.innerHTML = data["score" + i];
        }
    })

    tabletop.sheets()['round2'].elements.forEach(function(data) {
        for (let i = 1; i <= (teamsAmount / 2); i++) {
            let r2team = document.getElementById("r2team" + i);
            let r2score = document.getElementById("r2score" + i);

            r2team.innerHTML = data["team" + i];
            r2team.parentNode.style.opacity = (data["team" + i] !== '') ? 1 : '';
            r2score.innerHTML = data["score" + i];
        }
    })

    tabletop.sheets()['round3'].elements.forEach(function(data) {
        for (let i = 1; i <= (teamsAmount / 4); i++) {
            let r3team = document.getElementById("r3team" + i);
            let r3score = document.getElementById("r3score" + i);

            r3team.innerHTML = data["team" + i];
            r3team.parentNode.style.opacity = (data["team" + i] !== '') ? 1 : '';
            r3score.innerHTML = data["score" + i];
        }
    })

    tabletop.sheets()['finals'].elements.forEach(function(data) {
        for (let i = 1; i <= ((teamsAmount / 8) + 2); i++) {
            let r4team = document.getElementById("r4team" + i);
            let r4score = document.getElementById("r4score" + i);

            r4team.innerHTML = data["team" + i];
            r4team.parentNode.style.opacity = (data["team" + i] !== '') ? 1 : '';
            r4score.innerHTML = data["score" + i];
        }
    })
}
window.addEventListener('DOMContentLoaded', init);

window.setInterval(function() {
    init();
}, 1000);