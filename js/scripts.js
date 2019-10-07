//business logic//
var beepBoop = function(userInput) {
  var numberArray = []
for (var index=0; index <= userInput; index++) {
  numberArray.push(index);
}
var results = numberArray.map(function(user) {
var userToString = user.toString();
if (userToString.indexOf(3) > - 1) {
  return "I'm sorry, Dave. I'm afraid I can't do that.";
  } else if (userToString.indexOf(2) > -1) {
  return "Boop";
  } else if (userToString.indexOf(1) > -1) {
  return "Beep";
  } else {
  return " " + user;
}
})

return results;
}

//user interface logic//
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $(".userInput").val();
    var results = beepBoop(userInput);
    console.log (results)
    $("#results").text(results);
})
})
