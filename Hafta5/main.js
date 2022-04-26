document.getElementById("myName").innerHTML = prompt("Tam adınızı giriniz.");

function showTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  
  const d = new Date();
  let day = d.getDay();
  switch (day) {
    case 1:
      day = "Pazartesi";
      break;
    case 2:
      day = "Salı";
      break;
    case 3:
      day = "Çarşamba";
      break;
    case 4:      
      day = "Perşembe";
      break;
    case 5:
      day = "Cuma";
      break;
    case 6:
      day = "Cumartesi";
      break;
    case 7:
      day = "Pazar";
      break;
  }
  document.getElementById("myClock").innerHTML =
    h + ":" + m + ":" + s + " " + day;
  setInterval(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
showTime();
