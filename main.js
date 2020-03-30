var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1_WTRL_jodERcYOb0fK6PsUhfpbUzRR57Y7cD0d9TBwY/edit?usp=sharing';

function init() {
    Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: showInfo,
        simpleSheet: true,
        orderby: 'points',
        reverse: true
    })
}

function showInfo(data, tabletop) {
    tabletop.sheets()['info'].elements.forEach(function(data) {
        intro.innerHTML = data.intro;
        headline.innerHTML = data.headline;
        year.innerHTML = data.year;
        subtitle.innerHTML = data.subtitle;
    });

    standen.innerHTML = '';
    tabletop.sheets()['week1'].elements.forEach(function(data) {

        let win1 = (data.score1 > data.score2) ? 'win' : 'lose';
        let win2 = (data.score1 < data.score2) ? 'win' : 'lose';

        standen.innerHTML += '<div class="match">' +
            '<div class="' + win1 + '">' +
            '<div class="teamName">' + data.team1 + '</div>' +
            '<div class="teamScore">' + data.score1 + '</div>' +
            '</div>' +
            '<div class="vs">VS</div>' +
            '<div class="' + win2 + '">' +
            '<div class="teamScore">' + data.score2 + '</div>' +
            '<div class="teamName">' + data.team2 + '</div>' +
            '</div>' +
            '</div>';
    });

    toep.innerHTML = '';
    tabletop.sheets()['teams'].elements.forEach(function(data) {
        toep.innerHTML +=
            '<div class="lteam">' + data.name +
            '<span class="lpoints">' + data.points + '</span>' +
            '<span class="lwl">' + data.wins + '/' + data.loses + '</span>' +
            '</div>';
    });
}
window.addEventListener('DOMContentLoaded', init);

window.setInterval(function() {
    init();
}, 7500);