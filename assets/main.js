// favicon randomiser

let faviconElem = document.getElementById('favicon');
    let randomNumber = Math.floor(Math.random() * 7) + 1;
    faviconElem.setAttribute('href', `assets/favicon/favi-${randomNumber}.png`);


// textLoader

    function showNext1() {
    var typed = new Typed('#line-1', {
      stringsElement: '#string-1',
      typeSpeed: 3,
      showCursor: false,
    });
   }

   function showNext2() {
    var typed = new Typed('#line-2', {
      stringsElement: '#string-2',
      typeSpeed: 3,
      showCursor: false,
    });
   }

   function showNext3() {
    var typed = new Typed('#line-3', {
      stringsElement: '#string-3',
      typeSpeed: 3,
      showCursor: false,
    });
   }

   function showNext4() {
    var typed = new Typed('#line-4', {
      stringsElement: '#string-4',
      typeSpeed: 3,
      showCursor: false,
    });
   }

   function showNextLiam() {
    var typed = new Typed('#line-liam', {
      stringsElement: '#string-liam',
      typeSpeed: 3,
      showCursor: false,
    });
   }

// clock

   const { DateTime } = luxon;
    

    function updateTime() {
      const aucklandTimeElement = document.getElementById('auckland-time');

      const now = DateTime.local();
      const aucklandTime = now.setZone('Pacific/Auckland');
      

      aucklandTimeElement.textContent = `${aucklandTime.toLocaleString(DateTime.TIME_WITH_SECONDS)} NZST`;
    }

    // Initial call and then update every second
    updateTime();
    setInterval(updateTime, 1000);
