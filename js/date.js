var monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'December'

];
var dateGlobal = new Date();
var day =dateGlobal.getDate();
var month = dateGlobal.getMonth();
month = monthList[month];
function dateShow() {
    var date = document.getElementById('date');
    date.innerHTML = month+", "+day;

}