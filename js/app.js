$(document).ready(function(){
  $(".ryu").mouseenter(function(){
    if (hold == false) {
      $(".ryu-still").hide();
      $(".ryu-ready").show();
    }
    stance = "ready";
  })
  .mouseleave(function(){
    if (hold == false) {
      $(".ryu-ready").hide();
      $(".ryu-still").show();
    }
    stance = "still";
  })
  .mousedown(function(){
    playHadouken();
    $(".ryu-ready").hide();
    $(".ryu-cool").hide();
    $(".ryu-throwing").show();
    $(".hadouken").finish().show().animate(
      {"left": "1020px"},
      500,
      function(){
        $(this).hide();
        $(this).css("left", "520px");
      });
  })
  .mouseup(function(){
    $(".ryu-throwing").hide();
    $(".ryu-ready").show();
  });

  $("body").on("keydown", function(e){
    if (e.which == 88){
      hold = true;
      if (stance == "still"){
      $(".ryu-cool").show();
      $(".ryu-still").hide();
      }
      else {
        $(".ryu-cool").show();
        $(".ryu-ready").hide();
      }
    }
  });
  $("body").on("keyup", function(e){
    if (e.which == 88){
      hold = false;
      if (stance == "still"){
        $(".ryu-cool").hide();
        $(".ryu-still").show();
      }
      else {
        $(".ryu-cool").hide();
        $(".ryu-ready").show();
      }
    }
  });
});

var stance = "still";
var hold = false;


function playHadouken(){
  $("#hadouken-sound")[0].volume = 0.5;
  $("#hadouken-sound")[0].load();
  $("#hadouken-sound")[0].play();
}

