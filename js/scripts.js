$(document).ready(function() {
  $("#User").submit(function(event) {

    var gender = $("input:radio[name=gender]:checked").val();
    var weapon = $("input:radio[name=weapon]:checked").val();
    var home = $("input:radio[name=home]:checked").val();
    var mount = $("input:radio[name=mount]:checked").val();

    if (gender === "female") {
      console.log("hi");
      $("#arwen").show();
    } else {

        if (gender === "male" && weapon === "archery" && home === "forest" && mount === "horse") {
          $("#legolas").show();
        } else if (gender === "male" && weapon === "archery" && home === "nomadic" && mount === "horse") {
          $("#legolas").show();
        } else if (gender === "male" && weapon === "dagger" && home === "nomadic" && mount === "pony") {
          $("#frodo").show();
        } else if (gender === "male" && weapon === "dagger" && home === "hole" && mount === "pony") {
          $("#frodo").show();
        } else if (gender === "male" && weapon === "rock" && home === "cave" && mount === "feet") {
          $("#gollum").show();
        } else if (gender === "male" && weapon === "magic" && home === "nomadic" && mount === "eagle") {
          $("#gandalf").show();
        } else if (gender === "male" && weapon === "magic" && home === "nomadic" && mount === "horse") {
          $("#gandalf").show();
        } else {
          alert("Try again.");
          return;
        }
    }
    event.preventDefault();
  });

});
