window.onload = function (){

  let http = new XMLHttpRequest();

  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      let dashboardView = document.getElementById("dashboard-view-cont");
      let addStudent = document.getElementById("addStudent").addEventListener("click", revealData);

      function revealData() {
        dashboardView.innerHTML = this.responseText;
      }
    }
  };
  http.open("GET", "dataAdd.html", true);
  http.send();
}