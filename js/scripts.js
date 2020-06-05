$(document).ready(function() {
  $("form#form1").submit(function(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();
    const operator = $("input:radio[name=operator]:checked").val();
    const cheese = $("input:checkbox[name=cheese]:checked").val();

    if (cheese === "on") {
      $("#csharp").show();
    } else if (age <= 30 && gender === "Non-Binary") {
      $("#ruby").show();
    }

    event.preventDefault();
  });
});