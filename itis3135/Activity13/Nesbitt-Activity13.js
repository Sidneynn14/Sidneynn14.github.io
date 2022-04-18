$(document).ready(function () {
    $.ajax({
      type: "get",
      url: "team.json",
      beforeSend: function () {
        $("#team").html("Loading...");
      },
      timeout: 1000,
      error: function (xhr, status, error) {
        alert("Error: " + xhr.status + " - " + error);
      },
      dataType: "json",
      success: function (data) {
        $("#team").html("");
        $.each(data, function () {
          $.each(this, function (key, value) {
            $("#team").append("<h3>" + "Name: " + value.name + "<br>" + "</h3>" + "Team: " + value.title + "<br>" + "Bio: " + value.bio + "<br>");
          });
        });
      },
    });
  });//end ready