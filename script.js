// Get the element
const task1 = document.getElementById('task1');

// Add hover effect
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

        // Function to update flag image
        function updateFlag() {
            const country = select.value;
            image.src = `${country.toLowerCase()}.png`;
            image.alt = `${country} Flag`;
        }

        // Add event listener
        select.addEventListener('change', updateFlag);

        // Set initial flag when page loads
        updateFlag();



// Get elements
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Validate password length
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

// Validate password match
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

// Add event listeners
passwordInput.addEventListener('input', function() {
    validatePasswordLength();
    validatePasswordMatch();
});

confirmPasswordInput.addEventListener('input', validatePasswordMatch);



// Get all toggle buttons
const toggleButtons = document.querySelectorAll('.toggle-btn');

// Add click event to each button
toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Find the content related to this button
        const section = this.parentElement;
        const content = section.querySelector('.content');
        const heading = section.querySelector('h3');
        
        // Toggle content visibility
        if (content.classList.contains('hidden')) {
            // Show content
            content.classList.remove('hidden');
            this.textContent = 'Hide';
        } else {
            // Hide content
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

// Font family change
fontFamily.addEventListener('change', function() {
    editableText.style.fontFamily = this.value;
});

// Font size change
fontSize.addEventListener('change', function() {
    editableText.style.fontSize = this.value;
});

// Bold button
boldBtn.addEventListener('click', function() {
    document.execCommand('bold', false, null);
    this.classList.toggle('active');
});

// Italic button
italicBtn.addEventListener('click', function() {
    document.execCommand('italic', false, null);
    this.classList.toggle('active');
});

// Underline button
underlineBtn.addEventListener('click', function() {
    document.execCommand('underline', false, null);
    this.classList.toggle('active');
});

// Update button states when text selection changes
editableText.addEventListener('input', function() {
    updateButtonStates();
});

editableText.addEventListener('click', function() {
    updateButtonStates();
});

function updateButtonStates() {
    // Check current formatting and update button states
    boldBtn.classList.toggle('active', document.queryCommandState('bold'));
    italicBtn.classList.toggle('active', document.queryCommandState('italic'));
    underlineBtn.classList.toggle('active', document.queryCommandState('underline'));
}