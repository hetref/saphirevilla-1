// Custom JavaScript for Sapphire Villas

// Document ready function
document.addEventListener("DOMContentLoaded", function (event) {
    // Remove loader and show content
    //document.getElementById("loader").remove();
    document.querySelector("header").classList.remove("pload");
    document.querySelector("main").classList.remove("pload");
    
    // Initialize Owl Carousel
    if (typeof $.fn.owlCarousel !== 'undefined') {
        $('.ami-3').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 3 }
            }
        });
        
        // Initialize testimonials carousel
        $('.testimonials-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                1000: { items: 3 }
            }
        });
    }
    
    // Initialize Fancybox for gallery
    if (typeof $.fancybox !== 'undefined') {
        $('[data-fancybox="gallery-0"]').fancybox({
            buttons: [
                "zoom",
                "share",
                "slideShow",
                "fullScreen",
                "download",
                "thumbs",
                "close"
            ],
            loop: true,
            protect: true,
            animationEffect: "fade",
            transitionEffect: "slide",
            thumbs: {
                autoStart: true,
                hideOnClose: true
            },
            fullScreen: {
                autoStart: false
            }
        });
    }
    
    // Initialize lazy loading for images
    $('img.img-lazy').each(function() {
        if($(this).attr('data-src') != '' && $(this).attr('data-src') != ' ' && $(this).attr('data-src') != null){
            var newsrc = $(this).attr('data-src');
            $(this).attr('src', newsrc);
        }
    });
});

// Form validation functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
}

function validateForm(formData) {
    const errors = {};
    
    if (!formData.name || formData.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email || !validateEmail(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.mobile || !validatePhone(formData.mobile)) {
        errors.mobile = 'Please enter a valid 10-digit phone number';
    }
    
    return errors;
}

function displayErrors(errors, formType = 'main') {
    // Clear previous errors
    $('.error-message').remove();
    
    // Display new errors
    Object.keys(errors).forEach(field => {
        const errorElement = $(`#${field}-error-contact${formType === 'popup' ? '_fixpup' : '_fix'}`);
        if (errorElement.length) {
            errorElement.html(`<div class="error-message text-danger mt-1">${errors[field]}</div>`);
        }
    });
}

function showLoadingState(formType = 'main') {
    const submitButton = formType === 'popup' ? 
        document.getElementById('contactUs_submit_wait_fixpup') :
        document.getElementById('contactUs_submit_wait_fix');
    
    if (submitButton) {
        submitButton.innerHTML = '<button class="btn btn-info micro-form-btn" disabled><i class="fas fa-spinner fa-spin"></i> Submitting...</button>';
    }
}

function resetForm(formType = 'main') {
    const form = formType === 'popup' ? 
        document.querySelector('#enqModal form') :
        document.querySelector('form');
    
    if (form) {
        form.reset();
    }
    
    // Clear errors
    $('.error-message').remove();
    
    // Reset submit button
    const submitButton = formType === 'popup' ? 
        document.getElementById('contactUs_submit_wait_fixpup') :
        document.getElementById('contactUs_submit_wait_fix');
    
    if (submitButton) {
        submitButton.innerHTML = '<button class="btn btn-info micro-form-btn effetMoveGradient submitBtn" type="submit" value="SUBMIT">Submit</button>';
    }
}

// Main form submission function
function contactUs_submit() {
    const formData = {
        name: document.getElementById('contactUs_username_fix').value.trim(),
        email: document.getElementById('contactUs_email_fix').value.trim(),
        mobile: document.getElementById('contactUs_number_fix').value.trim(),
        enquiry: document.getElementById('enquiredfor') ? document.getElementById('enquiredfor').value : 'General Enquiry'
    };
    
    const errors = validateForm(formData);
    
    if (Object.keys(errors).length > 0) {
        displayErrors(errors, 'main');
        return false;
    }
    
    // Show loading state
    showLoadingState('main');
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Track form submission
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                form_type: 'main_contact',
                property: 'Sapphire Villas'
            });
        }
        
        // Show success message
        const submitButton = document.getElementById('contactUs_submit_wait_fix');
        if (submitButton) {
            submitButton.innerHTML = '<button class="btn btn-success micro-form-btn" disabled><i class="fas fa-check"></i> Submitted Successfully!</button>';
        }
        
        // Reset form after 3 seconds
        setTimeout(() => {
            resetForm('main');
            $('#enqModal').modal('hide');
        }, 3000);
        
    }, 2000);
    
    return false;
}

// Popup form submission function
function submit_pop_chk() {
    const formData = {
        name: document.getElementById('contactUs_username_fixpup').value.trim(),
        email: document.getElementById('contactUs_email_fixpup').value.trim(),
        mobile: document.getElementById('contactUs_number_fixpup').value.trim(),
        enquiry: document.getElementById('enquiredfor') ? document.getElementById('enquiredfor').value : 'Popup Enquiry'
    };
    
    const errors = validateForm(formData);
    
    if (Object.keys(errors).length > 0) {
        displayErrors(errors, 'popup');
        return false;
    }
    
    // Show loading state
    showLoadingState('popup');
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Track form submission
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                form_type: 'popup_contact',
                property: 'Sapphire Villas'
            });
        }
        
        // Show success message
        const submitButton = document.getElementById('contactUs_submit_wait_fixpup');
        if (submitButton) {
            submitButton.innerHTML = '<button class="btn btn-success micro-form-btn" disabled><i class="fas fa-check"></i> Submitted Successfully!</button>';
        }
        
        // Reset form after 3 seconds
        setTimeout(() => {
            resetForm('popup');
            $('#enqModal').modal('hide');
        }, 3000);
        
    }, 2000);
    
    return false;
}

// Modal popup functions
function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

// Improved popup management
function clearPopupSession() {
    sessionStorage.removeItem("PopupShown");
    sessionStorage.removeItem("PopupShown1");
}

function showPopup(title, buttonText, enquiryType) {
    if ($('#enqModal').css('display') == 'none') {
        $("#enqModal .modal-head").removeClass("d-none");
        $("#enqModal .modal-call-btn").addClass("d-none");
        $("#enqModal .modal-title").text(title);
        $("#enqModal .micro-form-btn").text(buttonText);
        $("#enqModal #enquiredfor").val(enquiryType);
        $('#enqModal').modal('show');
    }
}

// Exit intent popup
addEvent(document, 'mouseout', function(evt) {
    let windowHeight = window.innerHeight;
    if (evt.toElement == null && evt.relatedTarget == null && (evt.y < 0 || evt.y > windowHeight)) {
        if(sessionStorage["PopupShown"] != 'yes'){ 
            sessionStorage["PopupShown"] = 'yes';
            showPopup("Virtual Site Visit", "Submit", "Virtual Tour Exit intent popup");
        }
    }
});

// Clear session storage on page load
clearPopupSession();

// Show popup every 5 minutes (less aggressive)
setInterval(function() {
    if($('#enqModal').css('display') == 'none'){ 
        showPopup("Virtual Site Visit", "Submit", "Virtual Tour recurring popup");
    }
}, 60000); 

// Scroll-based popup (less aggressive)
$(window).scroll(function (e) {
    var available = $(document).height();
    var half_screen = available * 0.7; // Changed from 0.5 to 0.7
    var height = $(window).scrollTop();
    
    if( height > half_screen ){
        if(sessionStorage["PopupShown1"] != 'yes1'){
            sessionStorage["PopupShown1"] = 'yes1';
            sessionStorage["PopupShown"] = 'yes';
            showPopup("Virtual Site Visit", "Start Tour", "Virtual Tour scroll popup");
        }
    }
});

// Read more/less functions
function readmorefn() {
    document.getElementById("more").style.display = "none";
    document.getElementById("less").style.display = "block";
    document.getElementById("morebtn").style.display = "none";
    document.getElementById("lessbtn").style.display = "block";
}

function readlessfn() {
    document.getElementById("more").style.display = "block";
    document.getElementById("less").style.display = "none";
    document.getElementById("morebtn").style.display = "block";
    document.getElementById("lessbtn").style.display = "none";
}
