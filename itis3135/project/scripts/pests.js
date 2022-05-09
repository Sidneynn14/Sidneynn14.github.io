$(document).ready(function(){
  $.getJSON("json_files/pests.json", function(data){
      $.each(data, function() {
          $.each(this, function(key, value){
              $("#pestlist").append("<img src="+ "'" + value.image + "'><br>" + "<h2>" + value.nickname + "</h2>" + "<br>" + "<h3>" +  value.long_official_name + "</h3>" + "<h3>" +  value.how_to_identify + "</h3>" + "<br>" + "<p>" + value.manage + "</p>" + "<br>" + "<hr>");
          })
      })
  });
});
