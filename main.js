// XHR - XML HTTP Request
let rides = [];

const domStringBuilder = (arrayToPrint) => {
  console.log('arrayToPrint', arrayToPrint);
  // loop over arrayToPrint and build up domString
  // call printToDom
};

// can't do a fat arrow function because of "this"
function executeThisCodeAfterFileLoads(){
  const data = JSON.parse(this.responseText);
  rides = data.rides;
  domStringBuilder(data.rides);
};

function executeThisCodeIfXHRFails(){
  console.error('doh!');
}

const getRidesData = () => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
  myRequest.addEventListener('error', executeThisCodeIfXHRFails);
  myRequest.open('GET', './db/rides.json');
  console.log(myRequest);
  myRequest.send();
};

const init = () => {
  getRidesData();
};

init();