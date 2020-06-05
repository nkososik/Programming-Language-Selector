$(document).ready(function() {
  $("form#form1").submit(function(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();
    const operator = $("input:radio[name=operator]:checked").val();
    const cheese = $("#defaultCheck1").val();

    event.preventDefault();
  });
});