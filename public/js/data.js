// $(function initializeMap () {

//   const fullstackAcademy = new google.maps.LatLng(40.705086, -74.009151);

//   const styleArr = [
//     {
//       featureType: 'landscape',
//       stylers: [{ saturation: -100 }, { lightness: 60 }]
//     },
//     {
//       featureType: 'road.local',
//       stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: 'on' }]
//     },
//     {
//       featureType: 'transit',
//       stylers: [{ saturation: -100 }, { visibility: 'simplified' }]
//     },
//     {
//       featureType: 'administrative.province',
//       stylers: [{ visibility: 'off' }]
//     },
//     {
//       featureType: 'water',
//       stylers: [{ visibility: 'on' }, { lightness: 30 }]
//     },
//     {
//       featureType: 'road.highway',
//       elementType: 'geometry.fill',
//       stylers: [{ color: '#ef8c25' }, { lightness: 40 }]
//     }, 
//     {
//       featureType: 'road.highway',
//       elementType: 'geometry.stroke',
//       stylers: [{ visibility: 'off' }]
//     }, 
//     {
//       featureType: 'poi.park',
//       elementType: 'geometry.fill',
//       stylers: [{ color: '#b6c54c' }, { lightness: 40 }, { saturation: -40 }]
//     }
//   ];

//   const mapCanvas = document.getElementById('map-canvas');

//   const currentMap = new google.maps.Map(mapCanvas, {
//     center: fullstackAcademy,
//     zoom: 13,
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//     styles: styleArr
//   });

//   // const iconURLs = {
//   //   hotel: '/images/lodging_0star.png',
//   //   restaurant: '/images/restaurant.png',
//   //   activity: '/images/star-3.png'
//   // };

//   function drawMarker (type, coords) {
//     const latLng = new google.maps.LatLng(coords[0], coords[1]);
//     const marker = new google.maps.Marker({
//       position: latLng
//     });
//     marker.setMap(currentMap);
//   }

//   // drawMarker('hotel', [40.705137, -74.007624]);
//   // drawMarker('restaurant', [40.705137, -74.013940]);
//   // drawMarker('activity', [40.716291, -73.995315]);

//   //


// });
  
  
  
  
  
  
  
  $(function(){
    var $hotels = $(hotels)
    for (var i = 0; i < hotels.length; i++) {
      $('.hotel').append(`<option data-location = ${hotels[i].place.location}>${hotels[i].name}<option>`);
     // console.log(hotels[i]);
    }
    var $restaurants = $(restaurants)
    for (var i = 0; i < restaurants.length; i++) {
      $('.restaurants').append(`<option data-location = ${restaurants[i].place.location}>${restaurants[i].name}<option>`);
    }
    var $activities = $(activities)
    for (var i = 0; i < activities.length; i++) {
      $('.activities').append(`<option data-location = ${activities[i].place.location}>${activities[i].name}<option>`);
    }

    //event handlers 
    $("#hotel").on('click', function(event) {
        var log = $(".hotel").val();
        $('.selected-hotel').append(`<span class="title">${log}</span>`);
     //   $('.selected-hotel').append(`<span class="title" ></span>`)
        $('.selected-hotel').append(`<button class="btn btn-xs btn-danger remove btn-circle">x</button>`)

        var loc = ($(".hotel").children().data().location).split(',')
        var locNum = loc.map(function(el){
          return +el;
        })
        drawMarker('hotel', locNum);
    })

    $("#restaurant").on('click', function() {
       var log = $(".restaurants").val();
       $('.selected-restaurant').append(`<li>${log}</li>`);
        var loc = ($(".restaurants").children().data().location).split(',')
        var locNum = loc.map(function(el){
          return +el;
        })
        drawMarker('restaurant', locNum);


    })

    $("#activity").on('click', function(event) {
        var log = $(".activities").val();
        $('.selected-activity').append(`<li>${log}</li>`);

        var loc = ($(".activities").children().data().location).split(',')
        var locNum = loc.map(function(el){
          return +el;
        })
        drawMarker('activity', locNum);
    })

  // drawMarker('hotel', [40.705137, -74.007624]);
  // drawMarker('restaurant', [40.705137, -74.013940]);
  // drawMarker('activity', [40.716291, -73.995315]);


$(".selected-hotel").on("click", ".remove", function(event) {
        var log = $(".selected-hotel").children().text();
        console.log(log)
        
    })

$("#remove-restaurant").on('click', function(event) {
        var log = $(".hotel").val();
        
    })

$("#remove-activity").on('click', function(event) {
        var log = $(".hotel").val();
        
    })


})