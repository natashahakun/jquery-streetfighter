$(document).ready(function(){
  $(".ryu").mouseenter(function(){
    if (hold == false) {
      position($(".ryu-ready"));
    }
    stance = "ready";
  })
  .mouseleave(function(){
    if (hold == false) {
      position($(".ryu-still"));
    }
    stance = "still";
  })
  .mousedown(function(){
    playHadouken();
    position($(".ryu-throwing"));
    $(".hadouken").finish().show().animate(
      {"left": "1020px"},
      500,
      function(){
        $(this).hide();
        $(this).css("left", "520px");
      });
  })
  .mouseup(function(){
    position($(".ryu-ready"));
  });

  $("body").on("keydown", function(e){
    if (e.which == 88){
      hold = true;
      position($(".ryu-cool"));
    }
  });
  $("body").on("keyup", function(e){
    if (e.which == 88){
      hold = false;
      if (stance == "still"){
        position($(".ryu-still"));
      }
      else {
        position($(".ryu-ready"));
      }
    }
  });
});

var position = function(ryu) {
  $(".ryu-cool").hide();
  $(".ryu-throwing").hide();
  $(".ryu-still").hide();
  $(".ryu-ready").hide();
  ryu.show();
};

var stance = "still";
var hold = false;


function playHadouken(){
  $("#hadouken-sound")[0].volume = 0.5;
  $("#hadouken-sound")[0].load();
  $("#hadouken-sound")[0].play();
}

