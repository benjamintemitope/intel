$(document).ready(function(){
    $(".form-control").focus(function(){
        $(this).parent(".input-group").addClass("input-group-focus")
    });
    $(".form-control").blur(function(){
        $(this).parent(".input-group").removeClass("input-group-focus")
    });

    $('.input-group-append').click(function() {
        $(this).prev('input').toggleClass('password')
        
        //For Toggle Attribute
        if ($(this).prev("input").attr("type") === 'password') {
            $(this).prev('input').attr('type', 'text')
        }else {
            $(this).prev('input').attr('type', 'password')
        }

        $(this).find(".fa-eye").toggleClass('fa-eye-slash')
        //$(this).next('').prop('content', '\f070');
        //$(":password").attr("type", "text")
    });


    // Example starter JavaScript for disabling form submissions if there are invalid fields
	(function() {
	  'use strict';
	  window.addEventListener('load', function() {
	    // Fetch all the forms we want to apply custom Bootstrap validation styles to
	    var forms = document.getElementsByClassName('needs-validation');
	    // Loop over them and prevent submission
	    var validation = Array.prototype.filter.call(forms, function(form) {
	      form.addEventListener('submit', function(event) {
	        if (form.checkValidity() === false) {
	          event.preventDefault();
	          event.stopPropagation();
	        }
	        form.classList.add('was-validated');
	      }, false);
	    });
	  }, false);
	})();
});