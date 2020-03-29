var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1_WTRL_jodERcYOb0fK6PsUhfpbUzRR57Y7cD0d9TBwY/edit?usp=sharing';

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

    tabletop.sheets()['teams'].elements.forEach(function(data) {
        team1.innerHTML = data.team1;
        score1.innerHTML = data.score1;
        team2.innerHTML = data.team2;
        score2.innerHTML = data.score2;
        team3.innerHTML = data.team3;
        score3.innerHTML = data.score3;
        team4.innerHTML = data.team4;
        score4.innerHTML = data.score4;
        team5.innerHTML = data.team5;
        score5.innerHTML = data.score5;
        team6.innerHTML = data.team6;
        score6.innerHTML = data.score6;
        team7.innerHTML = data.team7;
        score7.innerHTML = data.score7;
        team8.innerHTML = data.team8;
        score8.innerHTML = data.score8;
        team9.innerHTML = data.team9;
        score9.innerHTML = data.score9;
        team10.innerHTML = data.team10;
        score10.innerHTML = data.score10;
        team11.innerHTML = data.team11;
        score11.innerHTML = data.score11;
        team12.innerHTML = data.team12;
        score12.innerHTML = data.score12;
        team13.innerHTML = data.team13;
        score13.innerHTML = data.score13;
        team14.innerHTML = data.team14;
        score14.innerHTML = data.score14;
        team15.innerHTML = data.team15;
        score15.innerHTML = data.score15;
        team16.innerHTML = data.team16;
        score16.innerHTML = data.score16;
        team17.innerHTML = data.team17;
        score17.innerHTML = data.score17;
        team18.innerHTML = data.team18;
        score18.innerHTML = data.score18;
        team19.innerHTML = data.team19;
        score19.innerHTML = data.score19;
        team20.innerHTML = data.team20;
        score20.innerHTML = data.score20;
        team21.innerHTML = data.team21;
        score21.innerHTML = data.score21;
        team22.innerHTML = data.team22
        score22.innerHTML = data.score22
        team23.innerHTML = data.team23;
        score23.innerHTML = data.score23;
        team24.innerHTML = data.team24;
        score24.innerHTML = data.score24;
        team25.innerHTML = data.team25;
        score25.innerHTML = data.score25;
        team26.innerHTML = data.team26;
        score26.innerHTML = data.score26;
        team27.innerHTML = data.team27;
        score27.innerHTML = data.score27;
        team28.innerHTML = data.team28
        score28.innerHTML = data.score28
        team29.innerHTML = data.team29;
        score29.innerHTML = data.score29;
        team30.innerHTML = data.team30;
        score30.innerHTML = data.score30;
        team31.innerHTML = data.team31;
        score31.innerHTML = data.score31;
        team32.innerHTML = data.team32;
        score32.innerHTML = data.score32;
    })
}
window.addEventListener('DOMContentLoaded', init);

window.setInterval(function() {
    init();
}, 5000);


function winCheck() {
    for (let i = 1; i <= 32; i++) {
        if (document.getElementById("score" + i).innerHTML == "WIN") {
            document.getElementById("score" + i).parentNode.classList.add("win");
        } else if (document.getElementById("score" + i).innerHTML == "LOSE") {
            document.getElementById("score" + i).parentNode.classList.add("lose");
        }
    }
}