// Simple form submission functions
function contactUs_submit() {
    try {
        
        
        // Get modal form data
        const nameField = document.getElementById('contactUs_username_fix');
        const emailField = document.getElementById('contactUs_email_fix');
        const mobileField = document.getElementById('contactUs_number_fix');
        
        // Check if elements exist
        if (!nameField || !emailField || !mobileField) {
            console.error('Modal form fields not found!');
            return false;
        }
        
        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const mobile = mobileField.value.trim();
        
        // Basic validation
        if (!name || !email || !mobile) {
            alert('Please fill all required fields');
            return false;
        }
        
        // Store in variables and log
        const modalFormData = {
            name: name,
            email: email,
            mobile: mobile
        };
        
        console.log('Modal Form Data:', modalFormData);
        alert('Form submitted successfully! Check console for details.');
        
        // Close modal after submission
        $('#enqModal').modal('hide');
        
        return true;
    } catch (error) {
        console.error('Error in modal form submission:', error);
        return false;
    }
}

function submit_pop_chk() {
    try {

        // Get sidebar form data
        const nameField = document.getElementById('contactUs_username_fixpup');
        const emailField = document.getElementById('contactUs_email_fixpup');
        const mobileField = document.getElementById('contactUs_number_fixpup');
        
        // Check if elements exist
        if (!nameField || !emailField || !mobileField) {
            console.error('Sidebar form fields not found!');
            return false;
        }
        
        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const mobile = mobileField.value.trim();
        
        // Basic validation
        if (!name || !email || !mobile) {
            alert('Please fill all required fields');
            return false;
        }
        
        // Store in variables and log
        const sidebarFormData = {
            name: name,
            email: email,
            mobile: mobile
        };
        
        console.log('Sidebar Form Data:', sidebarFormData);
        alert('Form submitted successfully! Check console for details.');
        
        // Clear form after submission
        nameField.value = '';
        emailField.value = '';
        mobileField.value = '';
        
        return true;
    } catch (error) {
        console.error('Error in sidebar form submission:', error);
        return false;
    }
}

// Basic utility functions
function readmorefn() {
    const moreContent = document.getElementById('more');
    const lessContent = document.getElementById('less');
    if (moreContent && lessContent) {
        moreContent.style.display = 'none';
        lessContent.style.display = 'block';
    }
}

function readlessfn() {
    const moreContent = document.getElementById('more');
    const lessContent = document.getElementById('less');
    if (moreContent && lessContent) {
        moreContent.style.display = 'block';
        lessContent.style.display = 'none';
    }
}

// Basic DOM ready functionality
document.addEventListener('DOMContentLoaded', function() {

    
    
    // Check if form elements exist
    const modalForm = document.getElementById('contactUs_username_fix');
    const sidebarForm = document.getElementById('contactUs_username_fixpup');
    
    
    // Remove preloader classes
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    if (header) header.classList.remove('pload');
    if (main) main.classList.remove('pload');
    
    // Initialize image lazy loading
    const lazyImages = document.querySelectorAll('.img-lazy');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('img-lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
    
   
});
