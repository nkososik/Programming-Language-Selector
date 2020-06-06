$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();

    let userName = $("#firstname").val();
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();
    const operator = $("input:radio[name=operator]:checked").val();
    const cheese = $("input:checkbox[name=cheese]:checked").val();

    if (age && userName) {
      if (cheese === "on") {
        $("#csharp").fadeIn();
        $("#javascript,#python,#ruby").hide();
      } else if (age <= 30 && gender === "Non-Binary") {
        $("#ruby").fadeIn();
        $("#javascript,#python,#csharp").hide();
      } else if (age >= 30 && age < 45) {
        $("#python").fadeIn();
        $("#javascript,#csharp,#ruby").hide();
      } else if (age >= 45 && gender === "Male") {
        $("#javascript").fadeIn();
        $("#csharp,#python,#ruby").hide();
      } else if (gender === "Female") {
        $("#javascript").fadeIn();
        $("#csharp,#python,#ruby").hide();
      }
    } else {
      alert("Please enter your age and first name")
    }

    $("span.name1").text(userName);

  });
});