


$(document).ready(function () {
  $("button").on("click", function (event) {
    event.preventDefault();
    document.querySelector('#results').innerHTML = ""; /// any new submit will clear the page and bring new results
    var Searchlocation = document.getElementById("search-location").value;
    console.log(Searchlocation);
    var genre = document.getElementById("genre").value;
    console.log(genre);
    var date = document.getElementById("date").value;
    console.log(date);
    var distance = document.getElementById("distance").value;
    exampleSpotifyCall(genre);
    $.ajax({
      type: "GET",
      url: `https://app.ticketmaster.com/discovery/v2/events.json?size=10&radius=${distance}&postalCode=${Searchlocation}&classificationName=[music,${genre}]&apikey=fRxWNBut35gtcCbvmA6gavOYvhqsLzKQ`,
      async: true,
      dataType: "json",
      success: function (json) {
        console.log("HERE -------------     ", json);
        console.log(json);

        var events = json._embedded.events;

        for (var i = 0; i < events.length; i++) {
          var divnew = document.createElement('div');
          var titleEl = document.createElement('h2');
          var moreInfoEl = document.createElement('a');
          var imageEl = document.createElement('img');
          // add classes and attributes to event card elements
          divnew.classList.add('card');
          titleEl.textContent = events[i].name;
          moreInfoEl.textContent = 'More info >';

          moreInfoEl.setAttribute('href', events[i].url);
          moreInfoEl.setAttribute('target', '_blank');

          imageEl.setAttribute('src', events[i].images[0].url);
          // append event card elements to card container
          divnew.appendChild(titleEl);
          divnew.appendChild(moreInfoEl);
          divnew.appendChild(imageEl);
          document.querySelector('#results').appendChild(divnew);

          // get artist names
          var artist = [];
          var attractions = events[i]._embedded.attractions;
          if(attractions && attractions.length > 0){
            for (var j = 0; j < attractions.length; j++) {
              artist.push(events[i]._embedded.attractions[j].name);
            }
            console.log(artist);
          }
        }
        // hide .box and show #results
        $('.main-card').hide();
        $('#results').show();
      }
    });
  });
});
