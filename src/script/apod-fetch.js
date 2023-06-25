const api_key = "K7m7I0ojhrv7Rd5iREYgNWnyVTTPUohd7obnFAOP";
let base_url = "https://api.nasa.gov/planetary/apod?api_key=";

fetch(base_url+api_key)
.then(function(response) {
    return response.json();
})
