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
        } else if (gender === "male" && weapon === "magic" && home === "nomadic" && mount === "pony") {
          $("#gandalf").show();
        }  else if (gender === "male" && weapon === "magic" && home === "cave" && mount === "pony") {
          $("#gandalf").show();
        }  else if (gender === "male" && weapon === "magic" && home === "forest" && mount === "pony") {
          $("#gandalf").show();
        }  else if (gender === "male" && weapon === "magic" && home === "hole" && mount === "pony") {
          $("#gandalf").show();
        }  else if (gender === "male" && weapon === "magic" && home === "hole" && mount === "horse") {
          $("#gandalf").show();
        }  else if (gender === "male" && weapon === "magic" && home === "hole" && mount === "eagle") {
          $("#gandalf").show();
        }  else if (gender === "male" && weapon === "magic" && home === "hole" && mount === "feet") {
          $("#gandalf").show();
        }  else if (gender === "male" && weapon === "magic" && home === "forest" && mount === "feet") {
          $("#gandalf").show();
        }  else if (gender === "male" && weapon === "magic" && home === "cave" && mount === "feet") {
          $("#gandalf").show();
        }  else if (gender === "male" && weapon === "magic" && home === "nomadic" && mount === "feet") {
          $("#gandalf").show();
        }  else if (gender === "male" && weapon === "magic" && home === "forest" && mount === "horse") {
          $("#gandalf").show();
        }  else if (gender === "male" && weapon === "magic" && home === "forest" && mount === "eagle") {
          $("#gandalf").show();
        }  else if (gender === "male" && weapon === "magic" && home === "cave" && mount === "horse") {
          $("#gandalf").show();
        }  else if (gender === "male" && weapon === "magic" && home === "cave" && mount === "eagle") {
          $("#gandalf").show();
        } else if (gender === "male" && weapon === "magic" && home === "nomadic" && mount === "eagle") {
          $("#gandalf").show();
        } else if (gender === "male" && weapon === "rock" && home === "nomadic" && mount === "horse") {
          $("#gollum").show();
        } else if (gender === "male" && weapon === "rock" && home === "nomadic" && mount === "pony") {
          $("#gollum").show();
        }  else if (gender === "male" && weapon === "rock" && home === "cave" && mount === "pony") {
          $("#gollum").show();
        }  else if (gender === "male" && weapon === "rock" && home === "forest" && mount === "pony") {
          $("#gollum").show();
        }  else if (gender === "male" && weapon === "rock" && home === "hole" && mount === "pony") {
          $("#gollum").show();
        }  else if (gender === "male" && weapon === "rock" && home === "hole" && mount === "horse") {
          $("#gollum").show();
        }  else if (gender === "male" && weapon === "rock" && home === "hole" && mount === "eagle") {
          $("#gollum").show();
        }  else if (gender === "male" && weapon === "rock" && home === "hole" && mount === "feet") {
          $("#gollum").show();
        }  else if (gender === "male" && weapon === "rock" && home === "forest" && mount === "feet") {
          $("#gollum").show();
        }  else if (gender === "male" && weapon === "rock" && home === "nomadic" && mount === "feet") {
          $("#gollum").show();
        }  else if (gender === "male" && weapon === "rock" && home === "forest" && mount === "horse") {
          $("#gollum").show();
        }  else if (gender === "male" && weapon === "rock" && home === "forest" && mount === "eagle") {
          $("#gollum").show();
        }  else if (gender === "male" && weapon === "rock" && home === "cave" && mount === "horse") {
          $("#gollum").show();
        }  else if (gender === "male" && weapon === "rock" && home === "cave" && mount === "eagle") {
          $("#gollum").show();
        }  else if (gender === "male" && weapon === "rock" && home === "nomadic" && mount === "eagle") {
          $("#gollum").show();
        } else if (gender === "male" && weapon === "dagger" && home === "nomadic" && mount === "eagle") {
          $("#frodo").show();
        } else if (gender === "male" && weapon === "dagger" && home === "nomadic" && mount === "horse") {
          $("#frodo").show();
        } else if (gender === "male" && weapon === "dagger" && home === "cave" && mount === "pony") {
          $("#frodo").show();
        }  else if (gender === "male" && weapon === "dagger" && home === "forest" && mount === "pony") {
          $("#frodo").show();
        }  else if (gender === "male" && weapon === "dagger" && home === "hole" && mount === "pony") {
          $("#frodo").show();
        }  else if (gender === "male" && weapon === "dagger" && home === "hole" && mount === "horse") {
          $("#frodo").show();
        }  else if (gender === "male" && weapon === "dagger" && home === "hole" && mount === "eagle") {
          $("#frodo").show();
        }  else if (gender === "male" && weapon === "dagger" && home === "hole" && mount === "feet") {
          $("#frodo").show();
        }  else if (gender === "male" && weapon === "dagger" && home === "forest" && mount === "feet") {
          $("#frodo").show();
        }  else if (gender === "male" && weapon === "dagger" && home === "cave" && mount === "feet") {
          $("#frodo").show();
        }  else if (gender === "male" && weapon === "dagger" && home === "nomadic" && mount === "feet") {
          $("#frodo").show();
        }  else if (gender === "male" && weapon === "dagger" && home === "forest" && mount === "horse") {
          $("#frodo").show();
        }  else if (gender === "male" && weapon === "dagger" && home === "forest" && mount === "eagle") {
          $("#frodo").show();
        }  else if (gender === "male" && weapon === "dagger" && home === "cave" && mount === "horse") {
          $("#frodo").show();
        }  else if (gender === "male" && weapon === "dagger" && home === "cave" && mount === "eagle") {
          $("#frodo").show();
        } else if (gender === "male" && weapon === "dagger" && home === "nomadic" && mount === "eagle") {
          $("#frodo").show();
        } else if (gender === "male" && weapon === "archery" && home === "nomadic" && mount === "eagle") {
          $("#legolas").show();
        } else if (gender === "male" && weapon === "archery" && home === "nomadic" && mount === "pony") {
          $("#legolas").show();
        }  else if (gender === "male" && weapon === "archery" && home === "cave" && mount === "pony") {
          $("#legolas").show();
        }  else if (gender === "male" && weapon === "archery" && home === "forest" && mount === "pony") {
          $("#legolas").show();
        }  else if (gender === "male" && weapon === "archery" && home === "hole" && mount === "pony") {
          $("#legolas").show();
        }  else if (gender === "male" && weapon === "archery" && home === "hole" && mount === "horse") {
          $("#legolas").show();
        }  else if (gender === "male" && weapon === "archery" && home === "hole" && mount === "eagle") {
          $("#legolas").show();
        }  else if (gender === "male" && weapon === "archery" && home === "hole" && mount === "feet") {
          $("#legolas").show();
        }  else if (gender === "male" && weapon === "archery" && home === "forest" && mount === "feet") {
          $("#legolas").show();
        }  else if (gender === "male" && weapon === "archery" && home === "cave" && mount === "feet") {
          $("#legolas").show();
        }  else if (gender === "male" && weapon === "archery" && home === "nomadic" && mount === "feet") {
          $("#legolas").show();
        }  else if (gender === "male" && weapon === "archery" && home === "forest" && mount === "eagle") {
          $("#legolas").show();
        }  else if (gender === "male" && weapon === "archery" && home === "cave" && mount === "horse") {
          $("#legolas").show();
        }  else if (gender === "male" && weapon === "archery" && home === "cave" && mount === "eagle") {
          $("#legolas").show();
        } else if (gender === "male" && weapon === "archery" && home === "nomadic" && mount === "eagle") {
          $("#legolas").show();
        } else {
          alert("Try again.");
          return;
        }
    }
    event.preventDefault();
  });

});
