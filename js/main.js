window.onload = function (){

  let http = new XMLHttpRequest();

  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      let dashboardView = document.getElementById("dashboard-view-cont");
      console.log(dashboardView);
      console.log(http);
    }
  }
  http.open("GET", "dataAdd.html", true);
  http.send();
}