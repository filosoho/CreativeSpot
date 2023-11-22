$(document).ready(function() {

	/*--- Sticky Navigation ---*/
	$('.js--section-about').waypoint(function(direction) {
		if(direction=="down") {
			$('nav').addClass('sticky');
		}
		else {
			$('nav').removeClass('sticky');
		}		
	})

	/* --- Play Animations when scrolled in to a section---*/
	$('.js--wp-1').waypoint(function(direction) {
			$('.js--service-card').addClass('animate__animated animate__zoomIn');
	}, {
		offset:'50%'
	});

	$('.js--wp-2').waypoint(function(direction) {
			$('.js--package-box-enterprise').addClass('animate__animated animate__pulse');
	});

	$('.js--section-about').waypoint(function(direction) {
			$('.js--about').addClass('animate__animated animate__fadeIn');
	}, {
		offset:'55%'
	});


	// Add the animate__animated class to all images.
	$('.js--define img, .js--define-right img').addClass('animate__animated');

	// Function to check if an element is in the viewport
	function isElementInViewport(el) {
	    var rect = el[0].getBoundingClientRect();
	    return (
	        rect.top >= 0 &&
	        rect.left >= 0 &&
	        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	    );
	}

	// Function to handle animations
	function handleAnimations() {
	    $('.js--define img').each(function () {
	        if (isElementInViewport($(this)) && !$(this).hasClass('animate__bounceInLeft')) {
	            $(this).addClass('animate__bounceInLeft');
	        }
	    });

	    $('.js--define-right img').each(function () {
	        if (isElementInViewport($(this)) && !$(this).hasClass('animate__bounceInRight')) {
	            $(this).addClass('animate__bounceInRight');
	        }
	    });
	}

	// Attach the scroll event listener
	$(window).on('scroll', function () {
	    handleAnimations();
	});

	// Trigger animations when the page loads
	$(document).ready(function () {
	    handleAnimations();
	});

	// Adjust the offset for the animations
	$('.js--section-define').waypoint(function(direction) {
	    handleAnimations();
	}, {
	    offset: '60%' // Adjust the offset value as needed
	});


	/*--- Scroll to Contacts ---*/
	$('.js--scroll-to-contact').click(function() {
		$('html, body').animate({scrollTop:$('.js--section-form').offset().top}, 1000);
	})

	/*--- Smooth Scrolling for Navigation (from https://css-tricks.com/snippets/jquery/smooth-scrolling/)  ---*/
	$('a[href*="#"]')
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });
});

// JavaScript to handle showing and hiding the card
document.querySelectorAll('.service-read-more ').forEach(function(button, index) {
    button.addEventListener('click', function() {
        // Find the closest card-container element to the clicked button
        var cardContainers = document.querySelectorAll('.card-container');
        
        // Hide all card-containers
        cardContainers.forEach(function(cardContainer) {
            cardContainer.style.display = 'none';
        });
        
        // Display the specific card-container associated with the clicked button
        var cardContainer = cardContainers[index];
        if (cardContainer) {
            cardContainer.style.display = 'flex';
        }
    });
});

document.querySelectorAll('.close-button').forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        // Find the closest card-container element to the clicked button
        var cardContainer = closeButton.closest('.card-container');

        // Hide the card-container
        if (cardContainer) {
            cardContainer.style.display = 'none';
        }
    });
});