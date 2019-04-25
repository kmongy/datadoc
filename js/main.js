function addStudent() {
  let addingStudentHtml = new XMLHttpRequest();
  addingStudentHtml.onload = function() {
    if (addingStudentHtml.readyState == 4 && addingStudentHtml.status == 200) {
      document.getElementById("dashboard-view-cont").innerHTML = this.responseText;
    }
  };

  addingStudentHtml.open("GET", "dataAdd.html", true);
  addingStudentHtml.send();
}