function showMenu(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}!function(){$.validator.setDefaults({invalidHandler:function(e,t){var n=$(this);n.find(".form-message").removeClass(n.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var t=$(e).serialize(),n=$(e).find("select, input, textarea, button").not("[disabled]"),a=$(e).find(".form-message"),r=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),s=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),i=function(e){var t=e?r:s;n.removeAttr("disabled"),a.removeClass(e?"error":"success"),a.addClass(e?"success":"error"),a.html(t)};n.attr("disabled","disabled"),a.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:t}).done(function(t){i(1===parseInt(t)),e.reset()}).fail(function(){i(!1)}).always(function(){n.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}(),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()}),$(document).ready(function(){$(".select-option").on("click",function(e){var t=$(this).data("section"),n=$("."+t);$(this).addClass("active"),$(".select-option").not(this).removeClass("active"),n.addClass("active"),$(".info-selected-option").not(n).removeClass("active")})});