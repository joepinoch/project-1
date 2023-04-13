


// $(document).ready(function () {
//   $("button").on("click", function (event) {
//     event.preventDefault();
//     document.querySelector('#results').innerHTML = ""; /// any new submit will clear the page and bring new results
//     var Searchlocation = document.getElementById("search-location").value;
//     console.log(Searchlocation);
//     var genre = document.getElementById("genre").value;
//     console.log(genre);
//     var date = document.getElementById("date").value;
//     console.log(date);
//     var distance = document.getElementById("distance").value;
//     exampleSpotifyCall(genre);
//     $.ajax({
//       type: "GET",
//       url: `https://app.ticketmaster.com/discovery/v2/events.json?size=10&radius=${distance}&postalCode=${Searchlocation}&classificationName=[music,${genre}]&apikey=fRxWNBut35gtcCbvmA6gavOYvhqsLzKQ`,
//       async: true,
//       dataType: "json",
//       success: function (json) {
//         console.log("HERE -------------     ", json);
//         console.log(json);

//         //for (var i = 0; i <= json._embedded.events.length; i++) {
//         // var resultsEventName = json._embedded.events[i].name;
//         // console.log(resultsEventName);
//         //results = [event name, event date, venue name, ticketmaster link, spotify link]
//         //resultsEventName[i] = [json._embedded.events[i].name.value];
//         //json._embedded.events[i].dates.start.localDate, json._embedded.events[i]._embedded.venues[0].name, json._embedded.events[i].url, "Insert Spotify here"];
//         //console.log(json);

//         var events = json._embedded.events;

//         for (var i = 0; i < events.length; i++) {
//           var divnew = document.createElement('div');
//           var titleEl = document.createElement('h2');
//           var moreInfoEl = document.createElement('a');
//           var imageEl = document.createElement('img');
//           // add classes and attributes to event card elements
//           divnew.classList.add('card');
//           titleEl.textContent = events[i].name;
//           moreInfoEl.textContent = 'More info >';

//           moreInfoEl.setAttribute('href', events[i].url);
//           moreInfoEl.setAttribute('target', '_blank');

//           imageEl.setAttribute('src', events[i].images[0].url);
//           // append event card elements to card container
//           divnew.appendChild(titleEl);
//           divnew.appendChild(moreInfoEl);
//           divnew.appendChild(imageEl);
//           document.querySelector('#results').appendChild(divnew);

//           // get artist names
//           var artist = [];
//           var attractions = events[i]._embedded.attractions;
//           if(attractions && attractions.length > 0){
//             for (var j = 0; j < attractions.length; j++) {
//               artist.push(events[i]._embedded.attractions[j].name);
//             }
//             console.log(artist);
//           }
//         }
//         // hide .box and show #results
//         $('.main-card').hide();
//         $('#results').show();
//       }
//     });
//   });
// });

      //   }

      //   console.log(artist);
      //   //let artist = new Array(json._embedded.events.length);
      //   // for (let i = 0; i <= json._embedded.events.length; i++) {
      //   //   var artist = json._embedded.events[i]._embedded.attractions[0].artist || "No Artist";
      //   //   //if (json._embedded.events[i]._embedded.attractions[i]=false) {
      //   //   // artist[i]="Artist Name not Available";
      //   //   // } else {
      //   //   // artist[i] = json._embedded.events[i]._embedded.attractions[i]; 
      //   //   //}

      //   // }
      //   // console.log(artist);

      //   //}
      // },
// error: function (xhr, status, err) {
//   console.log("it no work")
//   // This time, we do not end up here!
// }
//     });
//   });
// });

$(document).ready(function () {
  $("button").on("click", function (event) {
    event.preventDefault();
    document.querySelector('#results').innerHTML = "";

    var zipcodes = document.getElementById("search-location").value.split(",");
    var genre = document.getElementById("genre").value;
    var date = document.getElementById("date").value;
    var distance = document.getElementById("distance").value;
    exampleSpotifyCall(genre);

    for (var i = 0; i < zipcodes.length; i++) {
      var zipcode = zipcodes[i].trim();
      if (zipcode !== "") {
        $.ajax({
          type: "GET",
          url: `https://app.ticketmaster.com/discovery/v2/events.json?size=10&radius=${distance}&postalCode=${zipcode}&classificationName=[music,${genre}]&apikey=fRxWNBut35gtcCbvmA6gavOYvhqsLzKQ`,
          async: true,
          dataType: "json",
          success: function (json) {
            var events = json._embedded.events;
            for (var j = 0; j < events.length; j++) {
              var divnew = document.createElement('div');
              var titleEl = document.createElement('h2');
              var moreInfoEl = document.createElement('a');
              var imageEl = document.createElement('img');
              divnew.classList.add('card');
              titleEl.textContent = events[j].name;
              moreInfoEl.textContent = 'More info >';
              moreInfoEl.setAttribute('href', events[j].url);
              moreInfoEl.setAttribute('target', '_blank');
              imageEl.setAttribute('src', events[j].images[0].url);
              divnew.appendChild(titleEl);
              divnew.appendChild(moreInfoEl);
              divnew.appendChild(imageEl);
              document.querySelector('#results').appendChild(divnew);
              var artist = [];
              var attractions = events[j]._embedded.attractions;
              if(attractions && attractions.length > 0){
                for (var k = 0; k < attractions.length; k++) {
                  artist.push(events[j]._embedded.attractions[k].name);
                }
                console.log(artist);
              }
            }
            $('.main-card').hide();
            $('#results').show();
          }
        });
      }
    }
  });
});