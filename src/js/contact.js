$('form[name="contact-form"]').validate({
  name: 'required',
  email: 'required',
  phone: 'required',
  messages: {
   name: "Por favor, introduce tu Nombre.",
   email: "Por favor, introduce un Correo Electrónico.",
   phone: "Por favor, introduce tu Teléfono."
  }
});
