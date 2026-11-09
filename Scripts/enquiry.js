/*enquiry.js*/

var enquiryForm = document.getElementById('enquiry-form');

if (enquiryForm){
    var BUSINESS_EMAIL = 'khwezilomso686@gmail.com';
    var BUSINESS_PHONE = '068 536 0225';

    /*Base = "packages start from" prices are refered on service.html 
    include = guests covered by tht basse price, per head = cost per extra guest
    notice = minimum days of notice the company needs*/

    var EVENTS = {
        wedding: {label:'Wedding catering', base: 15000, included: 50, perHead: 150, notice: 7},
        corporate: {label:'Corporate catering', base: 5000, included: 20, perHead: 120, notice: 4},
        private: {label:'Private catering', base: 9000, included: 10, perHead: 150, notice: 2},
        birthday: {label:'Birthday party catering', base: 10000, included: 20, perHead: 200, notice: 7},
        funeral: {label:'Funeral catering', base: 20000, included: 50, perHead: 150, notice: 2},
        weekday: {label:'Weekday catering (pickup)', perMeal: 80, notice: 1},
        'weekday-delivery': {label:'Weekday catering (delivery)', perMeal: 80, notice: 1}

    };

    function isWeekday(t) { return t === 'weekday' || t === 'weekday-delivery'; }

    /*Prices taken from menu page */
    var EXTRAS = {
        dessert: {label: 'Dessert table (20 cups)', price: 1500},
        canapes: {label: 'Canapes (20 canapes)', price: 2500},
        cake: {label: 'Custom cake (from)', price: 800},
        fingerfood: {label: 'Finger food spread (from)', price: 3500}
    };

    var money = new Intl.NumberFormat('en-ZA', {maximumFractionDigits: 0});
    function rand(n) {return 'R' + money.format(n).replace(/[\u00A0\u202F]/g, ''); }

    function el(tag, cls, text) {
        var n = document.createElement(tag);
        if (cls) {n.className = cls; }
        if (text !== undefined) { n.textContent = text;}
        return n;
    }
    function val(id){ return document.getElementById(id).value.trim();}

    /*dates*/
    function startOfDay(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate());}
    function parseDate(v) {
        var p = v.split('-');
        if (p.length !== 3) {return null; }
        var d = new Date(Number(p[0]), Number(p[1]) -1, Number(p[2]));
        return isNaN(d.getTime()) ? null : d;
    }
    function iso(d){
        return d.getFullYear() + '-' + String(d.getMonth() +1).padStart(2, '0') + '-' + String (d.getDate()).padStart(2, '0');

    }
     var today = startOfDay(new Date());
     document.getElementById('event-date').min = iso(today);

     //Validation
     var rules = [
        {id: 'enq-name', check: function (v) {
            return v.trim().length >= 2 ? '' : 'Please enter your full name.';}}, 
            {id: 'enq-email', check: function (v){
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())? '' : 'Please enter a valid email address, e.g. name@example.com';}},
        
      {id: 'enq-phone', check: function (v) {
        return /^[0-9 + ]{10,15}$/.test(v.trim())? '' : 'Please enter a valid phone number (10 to 15 digits).';}},

        {id: 'event-type', check: function (v){
            return EVENTS[v]? '' : 'Please choose a type of event.';}},

             {id: 'guests', check: function (v){
               var type = document.getElementById('event-type').value;
               var min = isWeekday(type)  ? 1 : 10;
               var n = Number (v);
               if (v.trim() === '' || !Number.isInteger(n) || n < min) {
                return 'Please enter a whole number of ' + min + ' or more.';
               }
               return ''; }},
               {id: 'event-date', check: function (v){
                 if (!v) { return 'Please choose a date.';}
                 var d = parseDate(v);
                 if (!d) { return 'Please enter valid date.';}
                 if (d < today) {return 'Please choose today or a future date.';}
                 var type = document.getElementById('event-type').value;
                 if (isWeekday(type)  && (d.getDay() === 0 || d.getDay() === 6)) {
                    return 'Weekday meals are made Monday to Friday. Please choose a weekday.';
                 }
                 return ''; }},
                 {id: 'venue', check: function (v){
                    return v.trim().length >= 2 ? '' : 'Please tell us the town and venue.';}}
                 ];
                 function clearError(input){
                    input.classList.remove('field-invalid');
                    input.removeAttribute('aria-invalid');
                    var old = document.getElementById(input.id + '-error');
                    if (old){old.remove(); }
                 } 
                 function showError(input, msg){
                    clearError(input);
                    input.classList.add('field-invalid');
                    input.setAttribute('aria-invalid', 'true');
                    var note = el('span', 'error-msg', msg);
                    note.id = input.id + '-error';
                    note.setAttribute('role', 'alert');
                    input.insertAdjacentElement('afterend', note);
                 }

                 rules.forEach(function (rule){
                    var input = document.getElementById(rule.id);
                    input.addEventListener('input', function() {clearError(this); });
                    input.addEventListener('change', function () {clearError(this); });
                 });

                 var typeSelect = document.getElementById('event-type');
                 function updateGuestLabel(){
                    document.getElementById('guests-label').textContent =
                   isWeekday(typeSelect.value)  ? 'Number of meals:' : 'Number of guests:';
                 }
                 typeSelect.addEventListener('change', updateGuestLabel);

                 // Service page links here
                 var wanted = new URLSearchParams(window.location.search).get('type');
                 if (wanted && EVENTS[wanted]) { typeSelect.value = wanted; }
                 updateGuestLabel();

                 /* Processing and response */
                 var result = document.getElementById('result');
                 var defaultResult = result.innerHTML;

                 enquiryForm.addEventListener('reset', function (){
                    rules.forEach(function (r) {clearError(document.getElementById(r.id));});
                    result.innerHTML = defaultResult;
                    result.classList.remove('result-panel')
                    setTimeout(updateGuestLabel, 0);
                 });

                 enquiryForm.addEventListener('submit', function (e) {
                    e.preventDefault()
                    var firstBad = null;

                    rules.forEach(function (rule){
                        var input = document.getElementById(rule.id);
                        var problem = rule.check(input.value)
                       if (problem) {
                        showError(input, problem);
                        if (!firstBad) {firstBad = input;}
                       }else{
                        clearError(input);
                       }
                    });
                    if (firstBad) { firstBad.focus(); return; }

                    /*collect the validated values */
                    var type = val ('event-type');
                    var cfg = EVENTS[type];
                    var guests = Number(val('guests'));
                    var eventDate = parseDate (val('event-date'));
                    var prettyDate = eventDate.toLocaleDateString('en-ZA', {weekday:'long', day: 'numeric', month: 'long', year: 'numeric'});
                    var pref = enquiryForm.querySelector('input[name="contact-pref"]:checked').value;
                    var notes = val('notes');

                    /*work out the estimate */
                    var total = 0;
                    var breakdown = [];
                    if (cfg.perMeal){
                        total = guests * cfg.perMeal;
                        breakdown.push(guests + ' meals at ' + rand(cfg.perMeal) + ' each: ' + rand(total));
                    }else{
                        var extraGuests = Math.max(0, guests - cfg.included);
                        var guestCost = extraGuests * cfg.perHead;
                        total = cfg.base + guestCost;
                        breakdown.push('Package from' + rand(cfg.base) + '(covers up to '+ cfg.included +' guests)');
                        if (extraGuests > 0){
                            breakdown.push(extraGuests + ' extra guests at ' + rand(cfg.perHead) + ' each: ' + rand(guestCost));
                        }
                    }
                    var chosenExtras = [];
                    enquiryForm.querySelectorAll('input[name="extras"]:checked').forEach(function (box) {
                        var ex = EXTRAS[box.value];
                        total += ex.price;
                        chosenExtras.push(ex.label);
                        breakdown.push(ex.label + ': ' + rand(ex.price));
                    });

                    /*Availability */
                    var days = Math.round ((eventDate - today) /86400000);
                    var availability;
                    if (days < cfg.notice) {
                        availability = 'Short notice: we normally need at least ' + cfg.notice + 
                        (cfg.notice === 1? ' day' : ' days') + ' for ' + cfg.label.toLowerCase() + '. Please phone ' + BUSINESS_PHONE + ' to check if we can fit you in. ';

                    }else{
                        availability = 'Your date meets our usual notice period (' + cfg.notice + (cfg.notice === 1 ? ' day' : ' days') +'). Khwezi will confirm availability when she replies.';
                    }

                    /*compile an email the customer can send */

                   var lines = [
                    'Name:' + val('enq-name'),
                    'Email: ' + val('enq-email'),
                    'Phone: ' + val('enq-phone'),
                    'Event: ' + cfg.label,
                    (meals ? 'Meals: ' : 'Guests: ') + guests,
                    'Date: ' + prettyDate,
                    'Venue / town: ' + val('venue'),
                    'Extras: ' + (chosenExtras.length ? chosenExtras.join(', '): 'None'),
                    'Prefer to be contacted by: ' + pref,
                    'Estimate shown: ' + rand(total),
                    'Notes: ' + (notes || 'None')
                   ];
                   var mailto = 'mailto:' + BUSINESS_EMAIL +
                   '?subject=' + encodeURIComponent('Catering enquiry: ' + cfg.label + ' on ' + prettyDate) +
                   '&body=' + encodeURIComponent(lines.join('\n'));
                   
                   // show the response
                   result.innerHTML = '';
                   result.classList.add('result-panel');
                   result.appendChild(el('h2', '', 'Your estimate'));
                   result.appendChild(el('p', 'estimate', rand(total)));
                   result.appendChild(el('p', 'small', 'This is an estimate only. Khwezi confirms the final quote after reading your enquiry'));

                   var dl = el('dl');
                   [['Event', cfg.label],
                   [type === 'weekday' ? 'Meals' : 'Guests', String(guests)],
                   ['Date', prettyDate],
                   ['Venue / town', val('venue')],
                   ['Contact by', pref]].forEach(function (pair) {
                     dl.appendChild(el('dt', '', pair[0]));
                     dl.appendChild(el('dd', '', pair[1]));
                   });
                   result.appendChild(dl);

                   var ul = el('ul', 'breakdown');
                   breakdown.forEach(function (line) { ul.appendChild(el('li', '', line)); });
                   result.appendChild(ul);

                   result.appendChild(el('p', 'notice' + (days < cfg.notice ? ' notice-warn' : ''), availability));

                   var actions = el('div', 'actions');
                   var send = el('a', 'btn', 'Email this enquiry to Khwezi');
                   send.href = mailto;
                   var call = el('a', 'btn btn-dark', 'Phone ' + BUSINESS_PHONE);
                   call.href = 'tel:+27685360225';
                   actions.appendChild(send);
                   actions.appendChild(call);
                   result.appendChild(actions);

                   result.setAttribute('tabindex', '-1');
                   result.focus();
                   result.scrollIntoView({behavior: 'smooth', block: 'start'});
               

                /* AJAX submission: send the data to the form service without reloading the page */
        var data = new FormData(enquiryForm);
        data.append('estimate', rand(total));
        data.append('availability_note', availability);
        var submitBtn = enquiryForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
 
        fetch(enquiryForm.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(function (response) {
            if (!response.ok) { throw new Error('Send failed'); }
            status.textContent = 'Thank you! Your enquiry has been sent to Khwezi. We will reply by ' + pref.toLowerCase() + '.';
        }).catch(function () {
            status.textContent = 'We could not send your enquiry automatically. Please use the email button below or phone us.';
        }).then(function () {
            submitBtn.disabled = false;
        });
    });
}
            