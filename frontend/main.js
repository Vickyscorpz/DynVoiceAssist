// ── Scroll-triggered animations ──
function initAnimations() {
  const els = document.querySelectorAll('.ani');
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('show'), (e.target.dataset.delay || 0) * 1);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

// ── Active nav link ──
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
}

// ── Nav scroll shadow ──
function initNavScroll() {
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = scrollY > 10 ? '0 2px 24px rgba(58,91,217,.10)' : 'none';
  });
}

// ── Voice Recognition ──
function initVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.warn('Voice recognition not supported. Use Chrome or Edge.');
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-IN';       // Indian English (change to 'ta-IN' for Tamil)
  recognition.continuous = false;
  recognition.interimResults = true;

  const orb = document.querySelector('.orb');          // your mic button
  const input = document.querySelector('.chat-input'); // your text input field
  let isListening = false;

  // Toggle listening on orb click
  orb?.addEventListener('click', () => {
    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  });

  recognition.onstart = () => {
    isListening = true;
    orb?.classList.add('listening');   // add pulse animation
    console.log('🎙️ Listening...');
  };

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map(r => r[0].transcript)
      .join('');

    // Show live text in your input box as user speaks
    if (input) input.value = transcript;

    // When final result is ready, handle it
    if (event.results[0].isFinal) {
      handleUserMessage(transcript);
    }
  };

  recognition.onerror = (event) => {
    console.error('Voice error:', event.error);
    if (event.error === 'not-allowed') {
      alert('Microphone access denied. Please allow mic permissions.');
    }
    orb?.classList.remove('listening');
    isListening = false;
  };

  recognition.onend = () => {
    isListening = false;
    orb?.classList.remove('listening');
  };
}

// ── Handle user message (voice or typed) ──
function handleUserMessage(text) {
  if (!text.trim()) return;
  console.log('User said:', text);

  // 👇 Put your chat/AI logic here
  // e.g. appendMessage(text), sendToAPI(text), etc.
}

// ── Init everything ──
document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  setActiveNav();
  initNavScroll();
  initVoiceRecognition();  // ← added
});