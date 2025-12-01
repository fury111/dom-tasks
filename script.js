const task1 = document.getElementById('task1');

task1.onmouseover = function() {
    this.style.backgroundColor = 'yellow';
    this.style.fontWeight = 'bold';
};

task1.onmouseout = function() {
    this.style.backgroundColor = 'white';
    this.style.fontWeight = 'normal';
};


 const select = document.getElementById('flags');
 const image = document.getElementById('flagImage');

        function updateFlag() {
            const country = select.value;
            image.src = `${country.toLowerCase()}.png`;
            image.alt = `${country} Flag`;
        }

        select.addEventListener('change', updateFlag);

        updateFlag();



const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

function validatePasswordLength() {
    const password = passwordInput.value;
    
    if (password.length > 0 && password.length < 6) {
        passwordError.textContent = 'Too short';
        passwordInput.style.borderColor = 'red';
    } else {
        passwordError.textContent = '';
        passwordInput.style.borderColor = '#ddd';
    }
}

function validatePasswordMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    
    if (confirmPassword.length > 0 && password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordInput.style.borderColor = 'red';
    } else {
        confirmPasswordError.textContent = '';
        confirmPasswordInput.style.borderColor = '#ddd';
    }
}

passwordInput.addEventListener('input', function() {
    validatePasswordLength();
    validatePasswordMatch();
});

confirmPasswordInput.addEventListener('input', validatePasswordMatch);



const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const section = this.parentElement;
        const content = section.querySelector('.content');
        const heading = section.querySelector('h3');
        
        if (content.classList.contains('hidden')) {
            
            content.classList.remove('hidden');
            this.textContent = 'Hide';
        } else {
            content.classList.add('hidden');
            this.textContent = 'Show';
        }
    });
});



const fontFamily = document.getElementById('fontFamily');
const fontSize = document.getElementById('fontSize');
const boldBtn = document.getElementById('boldBtn');
const italicBtn = document.getElementById('italicBtn');
const underlineBtn = document.getElementById('underlineBtn');
const editableText = document.getElementById('editableText');

fontFamily.addEventListener('change', function() {
    editableText.style.fontFamily = this.value;
});

fontSize.addEventListener('change', function() {
    editableText.style.fontSize = this.value;
});

boldBtn.addEventListener('click', function() {
    document.execCommand('bold', false, null);
    this.classList.toggle('active');
});

italicBtn.addEventListener('click', function() {
    document.execCommand('italic', false, null);
    this.classList.toggle('active');
});

underlineBtn.addEventListener('click', function() {
    document.execCommand('underline', false, null);
    this.classList.toggle('active');
});

editableText.addEventListener('input', function() {
    updateButtonStates();
});

editableText.addEventListener('click', function() {
    updateButtonStates();
});

function updateButtonStates() {
    boldBtn.classList.toggle('active', document.queryCommandState('bold'));
    italicBtn.classList.toggle('active', document.queryCommandState('italic'));
    underlineBtn.classList.toggle('active', document.queryCommandState('underline'));
}