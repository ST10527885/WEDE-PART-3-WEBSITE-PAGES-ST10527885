
/*Contact js */

var form = document.getElementById('contact-form');

if (form) {
    var rules = [
        {id: 'name',
        ok: function (v) {return v.trim().length >= 2; },
        msg: 'Please enter your full name.'},
        {id: 'email',
         ok: function (v) {return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test (v.trim());},
         msg: 'Please enter a valid email address, e.g. name@example.com'},
         {id: 'phone', ok: function (v) {return v.trim() === '' || /^[0-9 +]{10,15}$/.test(v.trim());},
         msg: 'Please enter a valid phone number (10 to 15 digits).'   
        },

        {id: 'message',
         ok: function (v) {return v.trim ().length >= 10;},
         msg: 'Please write at least 10 characters.'}
    ];

    function clearError(input){
        input.classList.remove('field-invalid');
        input.removeAttribute('aria-invalid');
        var old = document.getElementById(input.id + '-error');
        if (old) { old.remove (); }
    }

    function showError(input, msg) {
        clearError(input);
        input.classList.add('field-invalid');
        input.setAttribute('aria-invalid', 'true');
        var note = document.createElement('span');
        note.className = 'error-msg';
        note.id = input.id + '-error';
        note.textContent = msg;
        input.insertAdjacentElement('afterend', note);
    }

    //Will remove a field's error as soon as the user starts typing again
    rules.forEach(function (rule) {
        document.getElementById(rule.id).addEventListener('input', function () {
            clearError(this);
        });
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var firstBad = null;

        rules.forEach(function(rule) {
            var input = document.getElementById(rule.id);
            if (rule.ok(input.value)) {
                clearError(input);
            } else {
                showError(input, rule.msg);
                if (!firstBad) { firstBad = input;}
            }
        });
        if (firstBad) {
            firstBad.focus();
            return;
        }

        //Swap the form for thank you message
        var name = document.getElementById('name').value.trim();
        var thanks = document.createElement('div');
        thanks.className = 'form-success';
        var h = document.createElement('h3');
        h.textContent = 'Thank you, ' + name + '!';
        var p = document.createElement('p');
        p.textContent = 'We have received your enquiry and we will get back to you shortly.';
        thanks.appendChild(h);
        thanks.appendChild(p);
        form.replaceWith(thanks);
    });
}
