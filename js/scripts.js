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
      } else if (age >= 30 && age < 45 && operator === "add") {
        $("#python").show();
      } else if (age >= 45 && gender === "Male" && operator === "divide") {
        $("#javascript").show();
      } else if (gender === "Female") {
        $("#javascript").show();
      }
    } else {
      alert("Please enter your age")
    }


    event.preventDefault();
  });
});