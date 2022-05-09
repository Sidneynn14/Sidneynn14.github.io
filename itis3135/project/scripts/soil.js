function getHardinessZone() {
    var select = document.getElementById('area');
    var zone = select.options[select.selectedIndex].value;
    console.log(zone);
    document.getElementById("result").innerHTML = ("<p>Your hardiness zone is zone number " + zone + ".</p>")
  }