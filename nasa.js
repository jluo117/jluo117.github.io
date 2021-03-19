function nextSunday(){ //should return date in String
  var todayDay = new Date();
  if (todayDay.getDay() == 0){
    return String(todayDay.getMonth()+1) + " " + String(todayDay.getDate()) + " " + String(todayDay.getFullYear());
  }
  var daysTillSunday = 7 - todayDay.getDay();
  todayDay.setDate(todayDay.getDate() + 7-todayDay.getDay());
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];



  return monthNames[todayDay.getMonth()] + " " + String(todayDay.getDate()) + " " + String(todayDay.getFullYear());
}
async function loadData(aVal,bVal){
  fetch('http://localhost:5001/serverleibary/us-central1/add',{
    method:"POST",
    
    body:JSON.stringify({a:aVal,b:bVal})
  })
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        document.getElementById("text").innerHTML = data["result"];
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
async function subVal(aVal,bVal){
  fetch('http://localhost:5001/serverleibary/us-central1/addFunction',{
    method:"PUT",
    
    body:JSON.stringify({a:aVal,b:bVal})
  })
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        document.getElementById("text").innerHTML = data["result"];
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

async function callSocial(){
  fetch(("http://localhost:5001/serverleibary/us-central1/getLink"),{
    method:"POST",
    body:JSON.stringify({link:"siteA"})
  }).then(
    function(response){
      console.log(response)
      response.json().then(function(data){
        console.log(data);
      })
    }
    )
}



