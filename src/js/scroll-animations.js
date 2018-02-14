/*window.addEventListener('scroll', function (){
  var windowHeight = window.innerHeight;
  var homeIsoPos = document.getElementsByClassName('home-iso-logo')[0].getBoundingClientRect().top;
  var homeIso = document.querySelector('.home-iso-logo');

  var homeDesignPos = document.getElementsByClassName('home-design-img-container')[0].getBoundingClientRect().top;
  var homeDesign = document.querySelector('.home-design-img-container');
  if (homeIsoPos < windowHeight) {
    homeIso.classList.add('pulse');
  } else {
    homeIso.classList.remove('pulse');
  }

  if (homeDesignPos < windowHeight) {
    homeDesign.classList.add('fadeInDown');
  } else {
    homeDesign.classList.remove('fadeInDown');
  } 
});*/

/*var elemsScroll = [
  {
    containerScroll: '.home-container',
    element: '.home-iso-logo',
    animation: 'pulse'
  }
];*/
/*
function scrollEventElem (elemsScroll) {
  console.log("lowow");
  var containerHeigh = window.innerHeight;
  var positionElem = document.querySelector(elemsScroll.element).getBoundingClientRect().top;
  var elem = document.querySelector(elemsScroll.element);

  if (positionElem < containerHeigh) {
    elem.classList.add(elemsScroll.animation);
  } else {
    elem.classList.remove(elemsScroll.animation);
  }
}*/

switch (window.location.pathname) {
  case '/index.html':
  case '/':
  case 'project-dimsa/index.html':
    /*var elemsScroll = {
        containerScroll: '.home-container',
        element: '.home-iso-logo',
        animation: 'pulse'
      };
 
    window.addEventListener('scroll', function(){
      var containerHeigh = window.innerHeight;
      var positionElem = document.querySelector(elemsScroll.element).getBoundingClientRect().top;
      var elem = document.querySelector(elemsScroll.element);

      if (positionElem < containerHeigh) {
        elem.classList.add(elemsScroll.animation);
      } else {
        elem.classList.remove(elemsScroll.animation);
      }
    });*/
    var elemsScroll = {
        containerScroll: '.home-container',
        elLogo: '.home-iso-logo',
        elDesign: '.home-design-img-container',
        animationLogo: 'pulse',
        animationDesign: 'fadeInDown'
      };
 
    window.addEventListener('scroll', function(){
      var containerHeigh = window.innerHeight;
      var positionLogo = document.querySelector(elemsScroll.elLogo).getBoundingClientRect().top;
      var positionDesign = document.querySelector(elemsScroll.elDesign).getBoundingClientRect().top;
      var elementLogo = document.querySelector(elemsScroll.elLogo);
      var elementDesign = document.querySelector(elemsScroll.elDesign);

      if (positionLogo < containerHeigh) {
        elementLogo.classList.add(elemsScroll.animationLogo);
      } else {
        elementLogo.classList.remove(elemsScroll.animationLogo);
      }

      if (positionDesign < containerHeigh) {
        elementDesign.classList.add(elemsScroll.animationDesign);
      } else {
        elementDesign.classList.remove(elemsScroll.animationDesign);
      }
    });
    break;

  case '/project-dimsa/nosotros.html':
  case '/nosotros.html':
    var scrollAbout = {
        containerScroll: '.home-container',
        elMaterials: '.about-commitment-background',
        elCommitment: '.about-materials-background',
        animationAbout: 'fadeInDown'
      };
 
    window.addEventListener('scroll', function(){
      var containerHeigh = window.innerHeight;
      var positionMaterials = document.querySelector(scrollAbout.elMaterials).getBoundingClientRect().top;
      var positionCommitment = document.querySelector(scrollAbout.elCommitment).getBoundingClientRect().top;
      var elementMaterials = document.querySelector(scrollAbout.elMaterials);
      var elementCommitment = document.querySelector(scrollAbout.elCommitment);

      if (positionMaterials < containerHeigh) {
        elementMaterials.classList.add(scrollAbout.animationAbout);
      } else {
        elementMaterials.classList.remove(scrollAbout.animationAbout);
      }

      if (positionCommitment < containerHeigh) {
        elementCommitment.classList.add(scrollAbout.animationAbout);
      } else {
        elementCommitment.classList.remove(scrollAbout.animationAbout);
      }
    });
    break;

  default:
    //No funciona
    break;
}

/*for (var i = 0; i < elemsScroll.length; i++) {
  var container = document.querySelectorAll(elemsScroll[i].containerScroll);
  if (container.length) {
    container[0].addEventListener('scroll', scrollEventElem(elemsScroll[i]));
  }
}*/