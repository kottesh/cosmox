function fetchAPODData(date, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=Gpi0aBJ3UXXg7uV26fDS57UrEOeDXOxWaHMcPN0E&date=' + date, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      if (response.code) {
        var errorMessage = 'Error ' + response.code + ': ' + response.msg;
        displayError(errorMessage);
      } else {
        callback(response);
      }
    } else {
      var errorMessage = 'Error ' + xhr.status + ': ' + xhr.statusText;
      displayError(errorMessage);
    }
    hideLoader();
  };
  xhr.onerror = function () {
    var errorMessage = 'Error: Request failed';
    displayError(errorMessage);
    hideLoader(); // Hide the loader once error occurs
  };
  xhr.send();
}

function displayAPODData(data) {
  var apodDiv = document.getElementById('apod');
  var html = '<h2>' + data.title + '</h2>';

  if (data.media_type === 'image') {
    html += '<img src="' + data.url + '" alt="' + data.title + '">';
  } else {
    html += '<p>No image available for this date.</p>';
  }

  html += '<p>' + data.explanation + '</p>';
  apodDiv.innerHTML = html;
}

function displayError(errorMessage) {
  var apodDiv = document.getElementById('apod');
  apodDiv.innerHTML = '<p class="error">' + errorMessage + '</p>';
}

function showLoader() {
  document.getElementById('loader').style.display = 'block';
}

function hideLoader() {
  document.getElementById('loader').style.display = 'none';
}

fetchAPODData('', displayAPODData);

function fetchCustomAPOD() {
  var date = document.getElementById('dateInput').value;
  if (date) {
    showLoader(); 
    fetchAPODData(date, displayAPODData);
  }
}
