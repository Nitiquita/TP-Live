$(function(){
    var $hotels = $(hotels)
    for (var i = 0; i < hotels.length; i++) {
      $('.hotel').append(`<option>${hotels[i].name}<option>`);
    }
    var $restaurants = $(restaurants)
    for (var i = 0; i < restaurants.length; i++) {
      $('.restaurants').append(`<option>${restaurants[i].name}<option>`);
    }
    var $activities = $(activities)
    for (var i = 0; i < activities.length; i++) {
      $('.activities').append(`<option>${activities[i].name}<option>`);
    }

    //event handlers 
    $("#hotel").on('click', function(event) {
        var log = $(".hotel").val();
        $('.selected-hotel').append(`<li>${log}</li>`);
    })

    $("#restaurant").on('click', function() {
       var log = $(".restaurants").val();
       console.log(log);
       $('.selected-restaurant').append(`<li>${log}</li>`);
    })

    $("#activity").on('click', function(event) {
        var log = $(".activities").val();
        $('.selected-activity').append(`<li>${log}</li>`);
    })
  })