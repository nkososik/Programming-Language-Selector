$(document).ready(function() {
  $("form#form1").submit(function(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();
    const operator = $("input:radio[name=operator]:checked").val();
    const cheese = $("input:checkbox[name=cheese]:checked").val();

    if (age) {
      if (cheese === "on") {
        $("#csharp").show();
      } else if (age <= 30 && gender === "Non-Binary") {
        $("#ruby").show();
      } else if (age > 30 && age <= 50 || operator === "add") {
        $("#python").show();
      } else if (gender === "Male" || operator === "divide","multiply") {
        $("#javascript").show();
      } else if (gender === "Female" && age >= 1) {
        $("#python").show();
      }
    } else {
      alert("Please enter your age")
    }


    event.preventDefault();
  });
});