$(document).ready(function () {
    $("#nav_list a").click(function (event) {
      console.log("! list element clicked");
      plantfile = $(this).attr("title") + ".json";
      console.log(plantfile);
      $.getJSON("json_files/plants/" + plantfile, function (data) {
        $.each(data, function () {
          $.each(this, function (key, value) {  
            $("main h1").remove();
            $("main h2").remove();
            $("main h3").remove();
            $("main img").remove();
            $("main p").remove();
            $("main").append("<h1>" + value.long_official_name + "</h1>" + "<h2>" + value.name + "</h2>" + "<h3>" + value.nickname + "</h3>" + "<img src=" + value.image + ">" + "<p>" + value.text + "</p>");
          });
        });
      });
    });
    $.ajax({type: "get",url: ""});
}); 