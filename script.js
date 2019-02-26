var today = new Date();
var firstDay = new Date();
firstDay.setDate(1);
  
window.onload = function() {
  var title = document.getElementById("title")
  title.innerHTML = "Liturgia de las Horas - " + monthAsString(today.getMonth()) + " de " + today.getFullYear()


  genMonth(firstDay.getMonth());
};

function dayOfWeekAsString(dayIndex) {
  return ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"][dayIndex];
}

function dayAsLink(day) {
  if (day < 10)
    return "0" + day
  else
    return "" + day
}

function monthAsString(monthIndex) {
  return ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"][monthIndex];
}

function monthAsLink(monthIndex) {
  return ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"][monthIndex];
}

function createcalendar_jsDay(day, month) {

  var calendar = document.getElementById("calendar_js");
  var div = document.createElement("div");
  var p = document.createElement("p");
  var a = document.createElement("a");

  a.innerHTML = day;

  a.href = "sync/" + today.getFullYear() + "/" + monthAsLink(today.getMonth()) + "/" + dayAsLink(day) + "/index.htm"

  if (day == today.getDate() && month == today.getMonth()) {
    div.className = "calendar_js-day special_js";
  } else {
    div.className = "calendar_js-day";  
  }

  p.appendChild(a);
  div.appendChild(p);
  calendar.appendChild(div);
}

function jsCalendar_EmptyDays(days) {
  var currentcalendar_js = document.getElementById("calendar_js");

  for (i = 0; i < days; i++) {

    var newDay = document.createElement("div");
    var date = document.createElement("a");
    var dayElement = document.createElement("p");
    newDay.className = "calendar_js-empty";

    newDay.appendChild(date);
    newDay.appendChild(dayElement);

    currentcalendar_js.appendChild(newDay);
  }
}

function clearcalendar_js() {
  var currentcalendar_js = document.getElementById("calendar_js");

  currentcalendar_js.innerHTML = "";

  for (i = 0; i < 7; i++) {

    var newDay = document.createElement("div");
    var dayElement = document.createElement("p");
    dayElement.innerHTML = dayOfWeekAsString(i);
    newDay.className = "calendar_js-day special_js";

    newDay.appendChild(dayElement);

    currentcalendar_js.appendChild(newDay);
  }
}

function Create_Month(i) {
  firstDay.setMonth(i);
  genMonth(firstDay.getMonth());
}

// Generate a HTML Month ...
function genMonth(month) {
  clearcalendar_js();
  var currentcalendar_js = document.getElementById("calendar_js");

  var date_i = new Date();
  date_i.setDate(1);
  date_i.setMonth(month);
  date_i.setYear(date_i.getFullYear());

  jsCalendar_EmptyDays(date_i.getDay());

  createcalendar_jsDay(date_i.getDate(), date_i.getMonth());
  date_i.setDate(date_i.getDate() + 1);

  while (date_i.getDate() != 1) {
    createcalendar_jsDay(date_i.getDate(), date_i.getMonth());
    date_i.setDate(date_i.getDate() + 1);
  }
}
