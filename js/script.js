 const date = "1 January 2022 ";

 function countdown() {
     const newYearDate = new Date(date);
     const currentDate = new Date();

     const distance = ( newYearDate -currentDate)/1000;

     const days = Math.floor(distance / (60*60*24));
     const hours =Math.floor(distance %( 3600*24)/(3600));
     const minutes =Math.floor(distance % 3600/ 60);
     const seconds =Math.floor(distance % 60);

     document.getElementById('days').innerText = formatTime(days);
     document.getElementById('minutes').innerText = formatTime(minutes) ;
     document.getElementById('hours').innerText = formatTime(hours);
     document.getElementById('secondes').innerText = formatTime(seconds);
     
    }

    function formatTime(time) {
        
        return time < 10? (`0${time}`) : time;

    }

    setInterval(countdown,1000);
    countdown();