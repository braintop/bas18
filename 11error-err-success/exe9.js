/*
const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
*/

function success(showPosition) {
    console.log(showPosition)
    console.log(showPosition.coords.latitude)

}
function error(err) {
    console.log(err)
}
navigator.geolocation.getCurrentPosition(success, error);

