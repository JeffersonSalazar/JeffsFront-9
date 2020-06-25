// Activacion del Modo Nocturno
let mod_nigth = document.querySelector('#mod-night');

mod_nigth.addEventListener('click', function() {
  document.body.classList.toggle('mod-night');
  this.classList.toggle('active-mod');

  // Gaurdar configuracion en local storage
  if (document.body.classList.contains('mod-night') ) {
    localStorage.setItem('save-night','true');
  } else {
    localStorage.setItem('save-night','false');
  }
});

// Guardar configuracion del modo nocturno en local storage
if (localStorage.getItem('save-night') === "true") {
  document.body.classList.add('mod-night');
  mod_nigth.classList.add('active-mod');
} else {
  document.body.classList.remove('mod-night');
  mod_nigth.classList.remove('active-mod');
}


// Codigo para abrir y cerrar el menu y cambiar el icono a X
$("#content-icon").on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('transform-x');
  $("#menu-nav").toggleClass("nav-show");
});


// Codigo scroll pagination
$('a.pagination-nav[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});


// Codigo para hacer aparecer los textos del header
$(document).ready( function() {
  $('.content-text h2').hide().show(1000);
});
  

// Codigo para alarma de los botones
let click_btn = document.querySelector('.btn');

click_btn.addEventListener('click', function(e) {
  e.preventDefault();
  alert ('Estamos trabajando en los botones');
})

  
// Codigo para hacer aparecer el boton go-top
var scrollDistance = 0;

$(document).on('scroll',function() {
  scrollDistance = $(this).scrollTop();

  if (scrollDistance < 100) {
    $('#top-up').removeClass('btn-show');
  } else {
    $('#top-up').addClass('btn-show');
  }
});


// Codigo para ir arriba go-top
$('.btn-top').on('click',function() {
  $('html, body').animate({
    scrollTop: 0,
  }, 1000);
  return false;
});