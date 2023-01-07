var monthList=[
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
function dateShow(){
    var dateGlobal=new Date();
    var month=dateGlobal.getMonth();
    month=monthList[month];

    var day=dateGlobal.getUTCDay();


    var date=document.getElementById('date');
    date.innerHTML=month+", "+day;

}