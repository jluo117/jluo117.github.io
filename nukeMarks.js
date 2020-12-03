function elonMusk(){
    document.write("<img src = \"https://fossbytes.com/wp-content/uploads/2015/10/elon-musk-plans-nuke-mars-.jpg\">")
  }
  function startTime() {
      var today = new Date();
      var h = today.getHours() % 12;
      var m = today.getMinutes();
      var s = today.getSeconds();
      var AM = " AM";
      if (today.getHours() >= 12){
        AM = " PM";
      }
      if (h == 0){
        h = 12;
      }
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('txt').innerHTML = "<h3It is " +
      h + ":" + m  + AM;


  }
  function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
  }
  (function () {
    console.log("test")




          startTime();




        }
        //seconds
      }, 1000)
  }());
