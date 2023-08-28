function clock() {
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    var day = document.querySelector('.day p');
    var date = document.querySelector('.date');
  
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var d = now.toLocaleDateString('en-US', { weekday: 'long' });
    var dt = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
    day.innerHTML = d;
    date.innerHTML = dt;
  }
  
  var interval = setInterval(clock, 1000);
  