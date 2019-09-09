$(document).ready(function(){
  $("#form-message").addClass("hidden");
  $("#survey").on("submit", function() {
    var formValid = true;

    var dayIsValid=$("#daysAttended").prop("validity").valid;
    if(dayIsValid){
      $("#day-message").addClass("hidden");
    } else {
      formValid = false;
      $("#form-message").removeClass("hidden");
      $("#day-message").removeClass("hidden");
    }

    var timeIsValid=$("#timesAttended").prop("validity").valid;
    if(timeIsValid) {
      $("#time-message").addClass("hidden");
    } else {
      formValid = false;
      $("#form-message").removeClass("hidden");
      $("#time-message").removeClass("hidden");
    }

    // var foodIsValid=$("#faveFood").prop("validity").valid;
    // if(foodIsValid) {
    //   $("#food-message").addClass("hidden");
    // } else {
    //   formValid = false;
    //   $("#form-message").removeClass("hidden");
    //   $("#food-message").removeClass("hidden");
    // }

    // var craftIsValid=$("#faveCraft").prop("validity").valid;
    // if(craftIsValid){
    //   $("#craft-message").addClass("hidden");
    // } else {
    //   formValid = false;
    //   $("#form-message").removeClass("hidden");
    //   $("#craft-message").removeClass("hidden");
    // }

    return formValid;
  });
});
