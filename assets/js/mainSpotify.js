// Client ID eb6f3c00e7284fc8a663afe965bf07f4
// client secret 313a1f6cf1494efc998665ef968bb252
var client_id = 'eb6f3c00e7284fc8a663afe965bf07f4';
var client_secret = '313a1f6cf1494efc998665ef968bb252';

// var authOptions = {
//   url: 'https://accounts.spotify.com/api/token',
//   headers: {
//     'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
//   },
//   form: {
//     grant_type: 'client_credentials'
//   },
//   json: true
// };

// request.post(authOptions, function(error, response, body) {
//   if (!error && response.statusCode === 200) {
//     var token = body.access_token;
//   }
// });

fetch('https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
 //       'Content-Type': 'application/json'
      },
}).then(response => {
    return response.json();
}).then(data => {
    console.log(data);
});


/* I still need to receive the access token
{
    "access_token": "NgCXRKc...MzYjw",
    "token_type": "bearer",
    "expires_in": 3600
 }
 */
 const clientId = "eb6f3c00e7284fc8a663afe965bf07f4"
 const clientSecret = "313a1f6cf1494efc998665ef968bb252"
 let token = "";
 
 async function getToken() {
  
     const response = await fetch('https://accounts.spotify.com/api/token', {
         method: 'POST',
         body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret,
         headers: {
             'Content-Type': 'application/x-www-form-urlencoded'
         }
        
     });
      let res = await response.json()
      console.log(res);
      token = res.access_token
     
 }
 
 getToken()
 setInterval(getToken, 3600000)
 
 
 
 
 async function exampleSpotifyCall() {
     const response = await fetch(`https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb`, {
         method: "GET",
         headers: {
           "Authorization": `Bearer ${token}`
         }
     })
     let res= await response.json()
     console.log(res)
 }
 // exampleSpotifyCall();

 setTimeout(exampleSpotifyCall, 5000);
