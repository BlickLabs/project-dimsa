function showMenu(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}function myFunction(){document.getElementById("myDropdown").classList.toggle("show")}function hamburgerDropDown(){document.getElementById("hambugerDropdown").classList.toggle("show")}var aboutUsCarousel=$(".about-us-carousel");aboutUsCarousel.owlCarousel({loop:!1,responsiveClass:!0,nav:!0,navText:['<img class="nav-arrows" src="img/icons/left-arrow.png" />','<img class="nav-arrows" src="img/icons/right-arrow.png" />'],dots:!0,autoWidth:!0,responsive:{0:{items:1}}}),aboutUsCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='about-controls'></div>")});var allProductsCarousel=$(".allproducts-carousel");allProductsCarousel.owlCarousel({loop:!1,margin:10,nav:!1,autoWidth:!0,items:4,dots:!0,center:!1}),function(){$.validator.setDefaults({invalidHandler:function(e,o){var t=$(this);t.find(".form-message").removeClass(t.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var o=$(e).serialize(),t=$(e).find("select, input, textarea, button").not("[disabled]"),n=$(e).find(".form-message"),a=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),s=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),r=function(e){var o=e?a:s;t.removeAttr("disabled"),n.removeClass(e?"error":"success"),n.addClass(e?"success":"error"),n.html(o)};t.attr("disabled","disabled"),n.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:o}).done(function(o){r(1===parseInt(o)),e.reset()}).fail(function(){r(!1)}).always(function(){t.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}(),$('form[name="contact-form"]').validate({name:"required",email:"required",phone:"required",messages:{name:"Por favor, introduce tu Nombre.",email:"Por favor, introduce un Correo Electrónico.",phone:"Por favor, introduce tu Teléfono."}});var coverCarousel=$(".cover-carousel"),productsCarousel=$(".products-carousel");coverCarousel.owlCarousel({loop:!1,responsiveClass:!0,nav:!0,navText:['<img class="nav-arrows" src="img/icons/left-arrow.png" />','<img class="nav-arrows" src="img/icons/right-arrow.png" />'],dots:!0,responsive:{0:{items:1,nav:!0},600:{items:1,nav:!0},1e3:{items:1,nav:!0,loop:!1}}}),coverCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='owl-controls'></div>")}),productsCarousel.owlCarousel({loop:!1,margin:10,nav:!0,autoWidth:!0,items:5,dots:!0,center:!1,navText:['<img class="nav-arrows" src="img/icons/left-arrow.png" />','<img class="nav-arrows" src="img/icons/right-arrow.png" />'],responsive:{1265:{loop:!1,margin:10,nav:!0,autoWidth:!1,items:4,dots:!0,center:!0}}}),productsCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='products-owl-controls'></div>")}),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");switch(hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()}),window.onclick=function(e){if(!e.target.matches(".dropbtn"))for(var o=document.getElementsByClassName("dropdown-content"),t=0;t<o.length;t++){var n=o[t];n.classList.contains("show")&&n.classList.remove("show")}},window.location.pathname){case"/index.html":case"/":case"project-dimsa/index.html":var elemsScroll={containerScroll:".home-container",elLogo:".home-iso-logo",elDesign:".home-design-img-container",animationLogo:"pulse",animationDesign:"fadeInDown"};window.addEventListener("scroll",function(){var e=window.innerHeight,o=document.querySelector(elemsScroll.elLogo).getBoundingClientRect().top,t=document.querySelector(elemsScroll.elDesign).getBoundingClientRect().top,n=document.querySelector(elemsScroll.elLogo),a=document.querySelector(elemsScroll.elDesign);o<e?n.classList.add(elemsScroll.animationLogo):n.classList.remove(elemsScroll.animationLogo),t<e?a.classList.add(elemsScroll.animationDesign):a.classList.remove(elemsScroll.animationDesign)});break;case"/project-dimsa/nosotros.html":case"/nosotros.html":var scrollAbout={containerScroll:".home-container",elMaterials:".about-commitment-background",elCommitment:".about-materials-background",animationAbout:"fadeInDown"};window.addEventListener("scroll",function(){var e=window.innerHeight,o=document.querySelector(scrollAbout.elMaterials).getBoundingClientRect().top,t=document.querySelector(scrollAbout.elCommitment).getBoundingClientRect().top,n=document.querySelector(scrollAbout.elMaterials),a=document.querySelector(scrollAbout.elCommitment);o<e?n.classList.add(scrollAbout.animationAbout):n.classList.remove(scrollAbout.animationAbout),t<e?a.classList.add(scrollAbout.animationAbout):a.classList.remove(scrollAbout.animationAbout)});break;case"/project-dimsa/contacto.html":case"/contacto.html":var scrollContact={containerScroll:".home-container",elContact:".contact-separator",animationContact:"fadeInDown"};window.addEventListener("scroll",function(){var e=window.innerHeight,o=document.querySelector(scrollContact.elContact).getBoundingClientRect().top,t=document.querySelector(scrollContact.elContact);o<e?t.classList.add(scrollContact.animationContact):t.classList.remove(scrollContact.animationContact)})}var servicesCarousel=$(".services-carousel");servicesCarousel.owlCarousel({loop:!1,margin:10,nav:!1,autoWidth:!0,items:4,dots:!0,center:!0}),$(document).ready(function(){$(".select-option").on("click",function(e){var o=$(this).data("section"),t=$("."+o);$(this).addClass("active"),$(".select-option").not(this).removeClass("active"),t.addClass("active"),$(".info-selected-option").not(t).removeClass("active")})});