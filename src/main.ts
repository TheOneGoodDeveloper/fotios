import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <!-- Floating Glass Navigation -->
  <nav class="floating-nav">
    <div class="logo">FOTIOS<span>.</span></div>
    <ul class="nav-links">
      <li><a href="#">The Work</a></li>
      <li><a href="#">Expertise</a></li>
      <li><a href="#">Vision</a></li>
    </ul>
    <button class="btn-glass">Get a Quote</button>
  </nav>

  <!-- Portfolio Hero -->
  <section class="portfolio-hero">
    <div class="hero-content">
      <p>Elevating Spaces.</p>
      <h1>Our Masterpieces.</h1>
    </div>
    <div class="scroll-indicator">
      <span>Scroll to Explore</span>
      ↓
    </div>
  </section>

  <!-- Horizontal Scroll Section -->
  <section class="horizontal-scroll-wrapper">
    <div class="horizontal-scroll-container">
      <div class="horizontal-track">
        
        <!-- Project 1 -->
        <div class="project-slide">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" alt="Exhibition Stand">
          <div class="project-info">
            <span class="project-tag">Exhibitions & Events</span>
            <h2>ADIPEC Pavilion 2024</h2>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="project-slide">
          <img src="https://images.unsplash.com/photo-1600607688969-a5bfcd64bd0b?q=80&w=2070&auto=format&fit=crop" alt="Interior Design">
          <div class="project-info">
            <span class="project-tag">Premium Interior Works</span>
            <h2>Circle Mall Dubai</h2>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="project-slide">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop" alt="MEP Works">
          <div class="project-info">
            <span class="project-tag">MEP Engineering</span>
            <h2>Salam Leap Saudi Arabia</h2>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="post-scroll">
    <div>
      <p style="text-transform: uppercase; letter-spacing: 4px; margin-bottom: 1rem; color: var(--text-muted);">How we do it</p>
      <h2>Bento Box Services Here</h2>
      <p style="margin-top: 1rem; color: var(--text-muted);">(Scroll down further to see services)</p>
    </div>
  </section>
`;

// Horizontal Scroll Logic
const wrapper = document.querySelector('.horizontal-scroll-wrapper') as HTMLElement;
const track = document.querySelector('.horizontal-track') as HTMLElement;

window.addEventListener('scroll', () => {
  if (!wrapper || !track) return;
  
  // Calculate how far down the wrapper we have scrolled
  const rect = wrapper.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  
  // scrollProgress goes from 0 (top of wrapper hits top of viewport) 
  // to 1 (bottom of wrapper hits bottom of viewport)
  let scrollProgress = -rect.top / (rect.height - viewportHeight);
  
  // Clamp between 0 and 1
  scrollProgress = Math.max(0, Math.min(1, scrollProgress));
  
  // Calculate the maximum distance the track can slide left
  const maxTranslate = track.scrollWidth - window.innerWidth;
  
  // Apply translation based on scroll progress
  track.style.transform = `translateX(${-scrollProgress * maxTranslate}px)`;
});
