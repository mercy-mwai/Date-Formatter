const currentDateParagraph=document.getElementById("current-date");
const dateOptionsSelectElement=document.getElementById("date-options");
const date=new date();
const day=date.getDate();
const month=date.getMonth() +1;
const year=date.getFullYear();
const hours=date.getHours();
const minutes=date.getMinutes();
const formattedDate=`${day}`;