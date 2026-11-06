/*enquiry.js*/

var enquiryForm = document.getElementById('enquiry-form');

if (enquiryForm){
    var BUSINESS_EMAIL = 'khwezilomso686@gmail.com';
    var BUSINESS_PHONE = '068 536 0225'

    /*Base = "packages start from" prices are refered on service.html 
    include = guests covered by tht basse price, per head = cost per extra guest
    notice = minimum days of notice the company needs*/

    var EVENTS = {
        wedding: {label:'Wedding catering', base: 15000, included: 50, perHead: 150, notice: 7},
        corporate: {label:'Corporate catering', base: 5000, included: 20, perHead: 120, notice: 4},
        private: {label:'Private catering', base: 9000, included: 10, perHead: 150, notice: 2},
        birthady: {label:'Birthday party catering', base: 10000, included: 20, perHead: 200, notice: 7},
        funeral: {label:'Funeral catering', base: 20000, included: 50, perHead: 150, notice: 2},
        weekday: {label:'Weekday catering', perMeal:80}

    };

    /*Prices taken from menu page */
    var EXTRAS = {
        dessert: {label: 'Desert table (20 cups)', price: 1500},
        canapes: {label: 'Canapes (20 canapes)', price: 2500},
        cake: {label: 'Custom cake (from)', price: 800},
        fingerfood: {label: 'Finger food spread (from)', price: 3500}
    };

    var money = new Intl.NumberFormat('en-ZA', {maximumFractionDigits: 0});
    function rand(n) {return 'R' + money.format(n).replace(/\u00A0/g, ''); }

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
     var today = startOfDay(newDate());
     document.getElementById('event-date').min = iso(today);

     //Validation
     var rules = [
        {id: 'full-name', check: function (v) {
            return v.trim().length >= 2 ? '' : 'Please enter your full name.';}}, 
            {id: 'enq-email', check: function (v){
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())? '' : 'Please enter a valid email address, e.g. name@example.com';}},
        
      {id: 'enq-phone', check: function (v) {
        return /^[0-9 + ]{10,15}$/.test(v.trim())? '' : 'Please enter a valid phone number (10 t0 15 digits).';}},

        {id: 'event-type', check: function (v){
            return EVENTS[v]? '' : 'Please choose a type of event.';}},

             {id: 'guests', check: function (v){
               var type = document.getElementById('event-type').value;
               var min = (type === 'weekday') ? 1 : 10;
               var n = Number (v);
               if (v.trim() === '' || !Number.isInteger(n) || n < min) {
                return 'Please enter a whole number between ' + min + ' or more.';
               }
               return ''; }},
               {id: 'event-date', check: function (v){
                 if (!v) { return 'Please choose a date.';}
                 var d = parseDate(v);
                 if (!d) { return 'Please enter valid date.';}
                 if (d < today) {return 'Please choose today or a future date.';}
                 var type = document.getElementById('event-type').value;
                 if (type === 'weekday' && (d.getDay() === 0 || d.getDay() === 6)) {
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
                    document.getElementById('guest-label').textContent =
                    typeSelect.value === 'weekday' ? 'Number of meals:' : 'Number of guests:';
                 }
                 typeSelect.addEventListener('change', updateGuestLabel);

                 // Service page links here
                 var wanted = new URLSearchParams(window.location.search).get('type');
                 if (wanted && EVENTS[wanted]) { typeSelect.value = wanted; }
                 updateGuestLabel();

                 /* Processing and response */

                 

                 
             
            



        
     

}