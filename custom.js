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

// Modal popup functions
function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

// Exit intent popup
addEvent(document, 'mouseout', function(evt) {
    let windowHeight = window.innerHeight;
    if (evt.toElement == null && evt.relatedTarget == null && (evt.y < 0 || evt.y > windowHeight)) {
        if(sessionStorage["PopupShown"] != 'yes' && $('#enqModal').css('display') == 'none'){ 
            sessionStorage["PopupShown"] = 'yes';
            $("#enqModal .modal-head").removeClass("d-none");
            $("#enqModal .modal-call-btn").addClass("d-none");
            $("#enqModal .modal-title").text("Virtual Site Visit");
            $("#enqModal .micro-form-btn").text("Submit");
            $("#enqModal #enquiredfor").val("Virtual Tour Exit intent popup");
            $('#enqModal').modal('show');
        }
    }
});

// Clear session storage
sessionStorage.clear();

// Show popup every 1 minute repeatedly (60000 milliseconds)
setInterval(function() {
    if($('#enqModal').css('display') == 'none'){ 
        $("#enqModal .modal-head").removeClass("d-none");
        $("#enqModal .modal-call-btn").addClass("d-none");
        $("#enqModal .modal-title").text("Virtual Site Visit");
        $("#enqModal .micro-form-btn").text("Submit");
        $("#enqModal #enquiredfor").val("Virtual Tour recurring 1 minute popup");
        $('#enqModal').modal('show');
    }
}, 60000); // 60000 milliseconds = 1 minute

// Scroll-based popup
$(window).scroll(function (e) {
    var available = $(document).height();
    var half_screen = available * 0.5;
    var height = $(window).scrollTop();
    
    if( height > half_screen ){
        if(sessionStorage["PopupShown1"] != 'yes1' && $('#enqModal').css('display') == 'none'){
            sessionStorage["PopupShown1"] = 'yes1';
            sessionStorage["PopupShown"] = 'yes';
            $("#enqModal .modal-head").removeClass("d-none");
            $("#enqModal .modal-call-btn").addClass("d-none");
            $("#enqModal .modal-title").text("Virtual Site Visit");
            $("#enqModal .micro-form-btn").text("Start Tour");
            $("#enqModal #enquiredfor").val("Virtual Tour Exit intent popup on scroll");
            $('#enqModal').modal('show');
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
