// script.js – romantic functionality
(function() {
  // ---- floating bg generator (hearts, stars, moon) ----
  const bg = document.getElementById('floatingBg');
  const symbols = ['fa-heart', 'fa-star', 'fa-moon', 'fa-heart', 'fa-star'];
  for (let i = 0; i < 25; i++) {
    const icon = document.createElement('i');
    const randSym = symbols[Math.floor(Math.random() * symbols.length)];
    icon.className = `fas ${randSym}`;
    const size = Math.random() * 2 + 1; // rem
    icon.style.fontSize = size + 'rem';
    icon.style.left = Math.random() * 100 + '%';
    icon.style.animationDuration = (Math.random() * 12 + 8) + 's';
    icon.style.animationDelay = (Math.random() * 10) + 's';
    icon.style.opacity = 0.25 + Math.random() * 0.3;
    bg.appendChild(icon);
  }

  // ---- page navigation ----
  const page1 = document.getElementById('page1');
  const page2 = document.getElementById('page2');
  const page3 = document.getElementById('page3');
  const next1 = document.getElementById('next1');
  const next2 = document.getElementById('next2');

  next1.addEventListener('click', () => {
    page1.classList.remove('active-page');
    page2.classList.add('active-page');
  });
  
  next2.addEventListener('click', () => {
    page2.classList.remove('active-page');
    page3.classList.add('active-page');
  });

  // ---- audio control (play/pause bg + voice message simulation) ----
  const audio = document.getElementById('bgAudio');
  const playBtn = document.getElementById('playPauseBtn');
  let isPlaying = false; // don't autoplay

  playBtn.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      playBtn.innerHTML = '<i class="fas fa-play"></i> Play';
    } else {
      audio.play().catch(e => console.log('autoplay blocked, user click needed'));
      playBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
    }
    isPlaying = !isPlaying;
  });

  // voice message button: simulates playing a voice message
  const voiceBtn = document.getElementById('voiceMsgBtn');
  voiceBtn.addEventListener('click', () => {
    // show popup message
    const msg = document.createElement('div');
    msg.style.position = 'fixed'; 
    msg.style.bottom = '20px'; 
    msg.style.left = '50%';
    msg.style.transform = 'translateX(-50%)'; 
    msg.style.backgroundColor = '#ffe4f0';
    msg.style.padding = '1rem 2rem'; 
    msg.style.borderRadius = '60px'; 
    msg.style.boxShadow = '0 10px 20px #eeaeca'; 
    msg.style.zIndex = '200';
    msg.style.fontSize = '1.2rem'; 
    msg.style.border = '3px solid #fbb0c0';
    msg.innerHTML = '<i class="fas fa-headphones"></i> Voice message: “You are my jannah, habibti 💕” <i class="fas fa-heart"></i>';
    document.body.appendChild(msg);
    setTimeout(() => { msg.remove(); }, 3500);
    
    // play sound effect
    const voiceAudio = new Audio('data:audio/wav;base64,UklGRlwAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YVoAAAB/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f38=');
    voiceAudio.volume = 0.6;
    voiceAudio.play().catch(()=>{});
  });

  // ---- SURPRISE HEART BUTTON: shows hidden message (toggle) ----
  const heartSurprise = document.getElementById('surpriseHeart');
  const popup = document.getElementById('popupSurprise');
  
  heartSurprise.addEventListener('click', () => {
    popup.classList.toggle('show-popup');
    // heart burst effect
    for (let i=0; i<4; i++) {
      const heartEm = document.createElement('span');
      heartEm.innerText = '❤️';
      heartEm.style.position = 'fixed';
      heartEm.style.left = Math.random()*80 + 10 + '%';
      heartEm.style.top = Math.random()*80 + 10 + '%';
      heartEm.style.fontSize = '2.5rem';
      heartEm.style.pointerEvents = 'none';
      heartEm.style.zIndex = '999';
      heartEm.style.animation = 'float 1.5s ease-out forwards';
      document.body.appendChild(heartEm);
      setTimeout(() => heartEm.remove(), 1400);
    }
  });

  // reset play button when audio ends
  audio.addEventListener('ended', () => {
    isPlaying = false;
    playBtn.innerHTML = '<i class="fas fa-play"></i> Play';
  });

  // click on gallery images
  document.querySelectorAll('.gallery-item').forEach(img => {
    img.addEventListener('click', () => {
      alert('❤️ My favourite picture of you! ❤️');
    });
  });
})();