$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();

    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();
    const operator = $("input:radio[name=operator]:checked").val();
    const cheese = $("input:checkbox[name=cheese]:checked").val();

    if (age) {
      if (cheese === "on") {
        $("#csharp").fadeIn();
        $("#javascript").hide();
        $("#python").hide();
        $("#ruby").hide();
      } else if (age <= 30 && gender === "Non-Binary") {
        $("#ruby").fadeIn();
        $("#javascript").hide();
        $("#python").hide();
        $("#csharp").hide();
      } else if (age >= 30 && age < 45) {
        $("#python").fadeIn();
        $("#javascript").hide();
        $("#csharp").hide();
        $("#ruby").hide();
      } else if (age >= 45 && gender === "Male") {
        $("#javascript").fadeIn();
        $("#csharp").hide();
        $("#python").hide();
        $("#ruby").hide();
      } else if (gender === "Female") {
        $("#javascript").fadeIn();
        $("#csharp").hide();
        $("#python").hide();
        $("#ruby").hide();
      }
    } else {
      alert("Please enter your age")
    }

  });
});