$(document).ready(function () {
    $("#nav_list a").click(function (event) {
      console.log("! list element clicked");
      speakerfile = $(this).attr("title") + ".json";
      console.log(speakerfile);
      $.getJSON("json_files/" + speakerfile, function (data) {
        $.each(data, function () {
          $.each(this, function (key, value) {  
            $("main h1").remove();
            $("main h2").remove();
            $("main h3").remove();
            $("main img").remove();
            $("main p").remove();
            $("main").append("<h1>" + value.title + "</h2>" + "<h2>" + value.month + "</h2>" + "<h3>" + value.speaker + "</h3>" + "<img src=" + value.image + ">" + "<p>" + value.text + "</p>");
          });
        });
      });
    });
    $.ajax({type: "get",url: ""});
}); // end ready
  