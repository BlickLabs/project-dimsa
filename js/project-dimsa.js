function showMenu(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}function myFunction(){document.getElementById("myDropdown").classList.toggle("show")}function hamburgerDropDown(){document.getElementById("hambugerDropdown").classList.toggle("show")}var aboutUsCarousel=$(".about-us-carousel");aboutUsCarousel.owlCarousel({loop:!1,responsiveClass:!0,nav:!0,navText:['<img class="nav-arrows" src="img/icons/left-arrow.png" />','<img class="nav-arrows" src="img/icons/right-arrow.png" />'],dots:!0,responsive:{0:{items:1,nav:!0},600:{items:1,nav:!0},1e3:{items:1,nav:!0,loop:!1}}}),aboutUsCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='about-controls'></div>")}),function(){$.validator.setDefaults({invalidHandler:function(e,s){var o=$(this);o.find(".form-message").removeClass(o.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var s=$(e).serialize(),o=$(e).find("select, input, textarea, button").not("[disabled]"),t=$(e).find(".form-message"),n=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),a=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),r=function(e){var s=e?n:a;o.removeAttr("disabled"),t.removeClass(e?"error":"success"),t.addClass(e?"success":"error"),t.html(s)};o.attr("disabled","disabled"),t.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:s}).done(function(s){r(1===parseInt(s)),e.reset()}).fail(function(){r(!1)}).always(function(){o.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}();var coverCarousel=$(".cover-carousel"),productsCarousel=$(".products-carousel");coverCarousel.owlCarousel({loop:!1,responsiveClass:!0,nav:!0,navText:['<img class="nav-arrows" src="img/icons/left-arrow.png" />','<img class="nav-arrows" src="img/icons/right-arrow.png" />'],dots:!0,responsive:{0:{items:1,nav:!0},600:{items:1,nav:!0},1e3:{items:1,nav:!0,loop:!1}}}),coverCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='owl-controls'></div>")}),productsCarousel.owlCarousel({loop:!1,margin:10,nav:!0,autoWidth:!0,items:4,dots:!0,center:!1,navText:['<img class="nav-arrows" src="img/icons/left-arrow.png" />','<img class="nav-arrows" src="img/icons/right-arrow.png" />'],responsive:{1265:{loop:!1,margin:10,nav:!0,autoWidth:!1,items:4,dots:!0,center:!0}}}),productsCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='products-owl-controls'></div>")}),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()}),window.onclick=function(e){if(!e.target.matches(".dropbtn"))for(var s=document.getElementsByClassName("dropdown-content"),o=0;o<s.length;o++){var t=s[o];t.classList.contains("show")&&t.classList.remove("show")}},$(document).ready(function(){$(".select-option").on("click",function(e){var s=$(this).data("section"),o=$("."+s);$(this).addClass("active"),$(".select-option").not(this).removeClass("active"),o.addClass("active"),$(".info-selected-option").not(o).removeClass("active")})}),window.addEventListener("scroll",function(){var e=window.innerHeight,s=document.getElementsByClassName("home-iso-logo")[0].getBoundingClientRect().top,o=document.querySelector(".home-iso-logo"),t=document.getElementsByClassName("home-design-img-container")[0].getBoundingClientRect().top,n=document.querySelector(".home-design-img-container");s<e?o.classList.add("pulse"):o.classList.remove("pulse"),t<e?n.classList.add("fadeInDown"):n.classList.remove("fadeInDown")});