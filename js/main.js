/* === RingCatch — Main JS === */

// Mobile menu
(function () {
  var btn = document.getElementById('hamburger');
  var drawer = document.getElementById('mobile-drawer');
  var backdrop = document.getElementById('drawer-backdrop');

  if (!btn || !drawer || !backdrop) return;

  function openMenu() {
    btn.classList.add('open');
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    btn.classList.remove('open');
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', function () {
    drawer.classList.contains('open') ? closeMenu() : openMenu();
  });

  backdrop.addEventListener('click', closeMenu);

  drawer.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
})();

// Nav scroll effect
(function () {
  var nav = document.querySelector('.site-nav');
  if (!nav) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
})();

// FAQ accordion
(function () {
  var items = document.querySelectorAll('.faq-item');

  items.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');

    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');

      // Close all others
      items.forEach(function (other) {
        other.classList.remove('open');
        other.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
})();

// GSAP Animations
(function () {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  var heroTimeline = gsap.timeline({ delay: 0.3 });

  heroTimeline
    .to('.eyebrow', {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out'
    })
    .to('.hero-headline', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4')
    .to('.hero-tagline', {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out'
    }, '-=0.4')
    .to('.hero-actions', {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out'
    }, '-=0.3')
    .to('.hero-bottom', {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.3');

  // Generic reveal animation for sections
  gsap.utils.toArray('.reveal').forEach(function (el) {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out'
    });
  });

  // Staggered card reveals
  document.querySelectorAll('.stagger-group').forEach(function (group) {
    var children = group.querySelectorAll('.stagger-item');
    gsap.from(children, {
      scrollTrigger: {
        trigger: group,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 36,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power2.out'
    });
  });

})();

// Pain section — auto-playing slideshow (standalone, no GSAP dependency)
(function () {
  var painSection = document.querySelector('.pain-section');
  if (!painSection) return;

  var slides = Array.from(painSection.querySelectorAll('.pain-slide'));
  var label = painSection.querySelector('.pain-label');
  var progressBar = painSection.querySelector('.pain-progress-bar');
  var progressFill = painSection.querySelector('.pain-progress-fill');
  var footer = painSection.querySelector('.pain-footer');
  var hasPlayed = false;
  var current = -1;
  var holdMs = 1600;

  function showSlide(index) {
    // Hide previous
    if (current >= 0 && current < slides.length) {
      slides[current].classList.remove('active');
      slides[current].classList.add('exiting');
      // Clean up exiting class after transition
      (function (prev) {
        setTimeout(function () { prev.classList.remove('exiting'); }, 500);
      })(slides[current]);
    }
    current = index;

    // Update progress bar
    progressFill.style.width = ((index + 1) / slides.length * 100) + '%';

    // Show current
    setTimeout(function () {
      slides[current].classList.add('active');
    }, 100);
  }

  function runSlideshow() {
    label.classList.add('active');
    progressBar.classList.add('active');

    var i = 0;
    showSlide(0);

    var interval = setInterval(function () {
      i++;
      if (i < slides.length) {
        showSlide(i);
      } else {
        clearInterval(interval);
        setTimeout(function () {
          footer.classList.add('active');
        }, 600);
      }
    }, holdMs);
  }

  // Scroll listener as fallback — checks every frame
  function checkInView() {
    if (hasPlayed) return;
    var rect = painSection.getBoundingClientRect();
    var threshold = window.innerHeight * 0.6;
    if (rect.top < threshold && rect.bottom > 0) {
      hasPlayed = true;
      setTimeout(runSlideshow, 300);
    }
  }

  window.addEventListener('scroll', checkInView, { passive: true });
  // Also check on load in case section is already visible
  checkInView();
})();
