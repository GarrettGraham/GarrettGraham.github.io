//var mydate=new Date()
//var year=mydate.getYear()
//if (year < 1000)
//year+=1900
//var day=mydate.getDay()
//var month=mydate.getMonth()
//var daym=mydate.getDate()
//if (daym<10)
//daym="0"+daym
//var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
//var montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December")
//document.write("<small><font color='000000' face='Arial'><b>"+dayarray[day]+", "+montharray[month]+" "+daym+", "+year+"</b></font></small>")
//document.getElementById("currentDate");

//<!-- 

// Array of day names
var dayNames = new Array("Sunday","Monday","Tuesday","Wednesday",
				"Thursday","Friday","Saturday");

// Array of month Names
var monthNames = new Array(
"January","February","March","April","May","June","July",
"August","September","October","November","December");

var now = new Date();
document.getElementById("currentDate").innerHTML = (dayNames[now.getDay()] + ", " + 
monthNames[now.getMonth()] + " " + 
now.getDate() + ", " + now.getFullYear());


// -->
