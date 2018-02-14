switch (window.location.pathname) {
  case '/index.html':
  case '/':
  case 'project-dimsa/index.html':
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

    case '/project-dimsa/contacto.html':
  case '/contacto.html':
    var scrollContact = {
        containerScroll: '.home-container',
        elContact: '.contact-separator',
        animationContact: 'fadeInDown'
      };
 
    window.addEventListener('scroll', function(){
      var containerHeigh = window.innerHeight;
      var positionContact = document.querySelector(scrollContact.elContact).getBoundingClientRect().top;
      var elementContact = document.querySelector(scrollContact.elContact);

      if (positionContact < containerHeigh) {
        elementContact.classList.add(scrollContact.animationContact);
      } else {
        elementContact.classList.remove(scrollContact.animationContact);
      }
    });
    break;

  default:
    break;
}