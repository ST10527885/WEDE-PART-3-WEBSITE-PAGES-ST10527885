/*Gallery.js (New for part 3): Added to meet the POE's requirements
This will be linked to the gallery.html in order for pictures to br enlarged when clients click on the images
Without this page the images would still the same as part 2 */

var lblinks = document.querySelectorAll('.lb-link');

if (lblinks.length > 0) {
    var current = 0;
    var lastFocused = null;

    var box = document.createElement('div');
    box.className = 'lightbox';
    box.hidden = true;
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Image viewer');

    function makeButton(cls, label, symbol) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'lb-btn '+ cls;
        b.setAttribute('aria-label', label);
        b.textContent = symbol;
        return b;
    }
    var closeBtn = makeButton('lb-close', 'Close image viewer', '\u00d7');
    var prevBtn = makeButton('lb-prev', 'Previous photo', '\u2039');
    var nextBtn = makeButton('lb-next', 'Next photo', '\u203A');

    var fig = document.createElement('figure');
    var bigImg = document.createElement('img');
    var cap = document.createElement ('figcaption');
    fig.appendChild(bigImg);
    fig.appendChild(cap);

    box.appendChild(closeBtn);
    box.appendChild(prevBtn);
    box.appendChild(fig);
    box.appendChild(nextBtn);
    document.body.appendChild(box);

    function show(i) {
        current = (i + lblinks.length) % lblinks.length;
        var link = lblinks[current];
        bigImg.src = link.href;
        bigImg.alt = link.querySelector('img').alt;
        cap.textContent = (link.dataset.caption || '') + '(' + (current + 1) + ' of ' + lblinks.length + ')';

    }
    function openBox(i) {
        lastFocused = document.activeElement;
        show(i);
        box.hidden = false;
        document.body.classList.add('lb-open');
        closeBtn.focus();
    }
    function closeBox() {
        box.hidden = true;
        document.body.classList.remove('lb-open');
        bigImg.removeAttribute('src');
        if (lastFocused) {lastFocused.focus(); }

    }

    lblinks.forEach(function(link, i) {
        link.addEventListener('click', function (e){
            e.preventDefault();
            openBox(i);
        });
    });
    closeBtn.addEventListener('click', closeBox);
    prevBtn.addEventListener('click', function () { show(current -1); });
    nextBtn.addEventListener('click', function () { show(current +1); });
    box.addEventListener('click', function (e) {
        if(e.target === box) {closeBox(); } 
    });

    document.addEventListener('keydown', function (e) {
     if (box.hidden) { return; }
     if (e.key === 'Escape') { closeBox(); }
     else if (e.key === 'ArrowLeft') {show(current - 1); }
     else if (e.key === 'ArrowRight') {show(current + 1); }
     else if (e.key === 'Tab') {
         
        // keeps keyboard focused inside the viewer while its open
       var stops = [closeBtn, prevBtn, nextBtn];
       var pos = stops.indexOf(document.activeElement);
       e.preventDefault();
       var next = e.shiftKey ? pos - 1 : pos + 1;
       stops[(next + stops.length) % stops.length].focus();
     } 
    });
}