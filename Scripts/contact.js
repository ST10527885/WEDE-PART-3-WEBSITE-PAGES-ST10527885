
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
        note.setAttribute('role', 'alert');
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
        var email = document.getElementById('email').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var reasonSelect = document.getElementById('reason');
        var reason = reasonSelect.options[reasonSelect.selectIndex].text;
        var message = document.getElementById('message').value.trim();
        
        var subject = 'Website message: ' + reason + ' ('+ name +')';
        var body = [
            'Name: ' + name,
            'Email: ' + email,
             'Phone: ' + (phone || 'Not provided' ),
             'Type of message: ' + reason,
             '',
             'Message:',
             message
        ].join('\n');
        
        var mailto = 'mailto:' + CONTACT_EMAIL +
          '?subject=' + encodeURIComponent(subject) +
          '&body=' + encodeURIComponent;

          var panel = document.createElement('div');
          panel.className = 'form-success';
          panel.setAttribute('role', 'status');

          var h = document.createElement('h3');
          h.textContent = 'Your email is ready, ' + name + '!';

          var p = document.createElement('p');
          p.textContent = 'Your email app should open with your message filled in. ' + 
          'Press send there to finish. If nothing opened, use the button below.';

          var link = document.createElement('a');
          link.className = 'btn';
          link.href = mailto;
          link.textContent = 'Open my email app';

          var preview = document.createElement('pre');
          preview.className = 'email-preview';
          preview.textContent = 'To: ' + CONTACT_EMAIL + '\nSubject: ' + subject + '\n\n' + body;

          var again = document.createElement('button');
          again.type = "button";
          again.className = 'btn btn-dark';
          again.addEventListener('click', function () { window.location.reload ();});

          panel.appendChild(h);
          panel.appendChild(p);
          panel.appendChild(link);
          panel.appendChild(preview);
          panel.appendChild(again);
          form.replaceWith(panel);

        window.location.href = mailto;
        
       
    });
}
