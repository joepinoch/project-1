


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

    $.ajax({
      type: "GET",
      url: `https://app.ticketmaster.com/discovery/v2/events.json?size=10&postalCode=${Searchlocation}&classificationName=[music,${genre}]&radius=${distance}&apikey=fRxWNBut35gtcCbvmA6gavOYvhqsLzKQ`,
      async: true,
      dataType: "json",
      success: function (json) {
        console.log(json);

        //for (var i = 0; i <= json._embedded.events.length; i++) {
          // var resultsEventName = json._embedded.events[i].name;
          // console.log(resultsEventName);
          //results = [event name, event date, venue name, ticketmaster link, spotify link]
          //resultsEventName[i] = [json._embedded.events[i].name.value];
          //json._embedded.events[i].dates.start.localDate, json._embedded.events[i]._embedded.venues[0].name, json._embedded.events[i].url, "Insert Spotify here"];
          //console.log(json);

          var events = json._embedded.events;

          for (var i = 0; i < events.length; i++) {
            console.log(events[i]);
            var titleEl = document.createElement('h2');
            var moreInfoEl = document.createElement('a');
            var imageEl = document.createElement('img');

            titleEl.textContent = events[i].name;
            moreInfoEl.textContent = 'More info >';

            moreInfoEl.setAttribute('href', events[i].url);
            moreInfoEl.setAttribute('target', '_blank');

            imageEl.setAttribute('src', events[i].images[0].url);

           

            document.querySelector('#results').appendChild(titleEl);
            document.querySelector('#results').appendChild(moreInfoEl);
            document.querySelector('#results').appendChild(imageEl);

            for (var j=0; j<events.length; j++) {
              var artist = [];
              artist[j] = events[i].name;
              
            }
          }
          
          console.log(artist);
          //let artist = new Array(json._embedded.events.length);
          // for (let i = 0; i <= json._embedded.events.length; i++) {
          //   var artist = json._embedded.events[i]._embedded.attractions[0].artist || "No Artist";
          //   //if (json._embedded.events[i]._embedded.attractions[i]=false) {
          //   // artist[i]="Artist Name not Available";
          //   // } else {
          //   // artist[i] = json._embedded.events[i]._embedded.attractions[i]; 
          //   //}

          // }
          // console.log(artist);

        //}
      },
      error: function (xhr, status, err) {
        console.log("it no work")
        // This time, we do not end up here!
      }
    });
  });
});