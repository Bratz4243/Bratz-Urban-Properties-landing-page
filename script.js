// script.js
// Small UI interactions: year in footer and simple counter animation + fake form submission

document.getElementById('year').textContent = new Date().getFullYear();

// Counter animation for hero stats
const counters = document.querySelectorAll('.num');
counters.forEach(el => {
  const target = +el.getAttribute('data-target');
  let count = 0;
  const step = Math.max(1, Math.round(target / 40));
  const interval = setInterval(() => {
    count += step;
    if (count >= target) { 
      el.textContent = target + (target >= 50 ? '+' : ''); 
      clearInterval(interval); 
    }
    else el.textContent = count;
  }, 25);
});

// Mock form submission — replace with your own endpoint
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Sending...';
  setTimeout(()=>{
    btn.textContent = 'Sent!';
    btn.disabled = false;
    form.reset();
    alert('Thanks! Your request has been sent. We will reach out soon.');
  }, 900);
});
