/*FAQ accordion on services.html, One question opens at a time.
This page allows questions that are frequently asked to show up on the html page */

var accButtons = document.querySelectorAll('.acc-btn');

if (accButtons.length > 0) {
    function setOpen(btn, open) {
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.getElementById(btn.getAttribute('aria-controls')).hidden =!open;

    }
  
    // Start with every answer closed
    accButtons.forEach(function (btn) { setOpen(btn, false); });

    accButtons.forEach(function (btn){
        btn.addEventListener('click', function () {
            var wasOpen = btn.getAttribute('aria-expanded') === 'true';
            accButtons.forEach(function (b) { setOpen(b, false); });
            if (!wasOpen) { setOpen(btn, true); }
        });
    });
}
