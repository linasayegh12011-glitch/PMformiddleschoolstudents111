// Mobile nav toggle and smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  var nav = document.getElementById('mainNav');
  var toggle = document.getElementById('navToggle');
  toggle.addEventListener('click', function(){
    nav.classList.toggle('open');
  });

  // Close nav when link clicked (mobile)
  var links = nav.querySelectorAll('a');
  links.forEach(function(a){
    a.addEventListener('click', function(){
      nav.classList.remove('open');
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        nav.classList.remove('open'); // close mobile menu on click
      }
    });
  });

  // Back-to-top button
  var backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', function(){
    if(window.scrollY > 300){
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  if(backToTop){
    backToTop.addEventListener('click', function(){
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  }
});
