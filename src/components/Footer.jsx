import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#111111] pt-32 pb-16">
      
      {/* CTA Section (Integrated cleanly instead of floating banner) */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-16 mb-24 border-b border-white/10 pb-24 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
        <h3 className="text-white font-heading text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
          Get in touch with us if you have a question or comment.
        </h3>
        <a href="/contact" className="px-10 py-4 bg-white text-[#111111] uppercase tracking-widest text-sm font-bold hover:bg-gold hover:text-white transition-colors shrink-0">
          Contact Us
        </a>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
        
        {/* About Column */}
        <div>
          <div className="font-heading text-3xl font-bold tracking-tight text-white mb-8">FOTIOS<span className="text-gold">.</span></div>
          <p className="text-white/50 text-sm leading-relaxed mb-8 pr-4">
            Fotios is a trusted house engaged in offering MEP and exhibition stands for practice interior, maintenance works on turnkey basis for clients.
          </p>
          <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-4">Work Days</h4>
          <ul className="text-white/50 text-sm space-y-3">
            <li className="flex justify-between border-b border-white/10 pb-2"><span>Mon - Fri</span> <span>9:00 AM to 6:00 PM</span></li>
            <li className="flex justify-between border-b border-white/10 pb-2"><span>Saturday</span> <span>9:00 AM to 2:00 PM</span></li>
            <li className="flex justify-between text-gold pb-2"><span>Sunday</span> <span>Holiday</span></li>
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="text-white font-heading text-2xl mb-8">Our Services</h4>
          <ul className="text-white/50 text-sm space-y-4">
            <li><a href="#" className="hover:text-gold transition-colors">Interior Work</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Air Conditioning Service</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Upkeep And Maintenance Works</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">HVAC Maintenance Works</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Plumbing Maintenance Works</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Civil Maintenance Works</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">CCTV Installation</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Custom Furniture Fabrication</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Exhibition Stands</a></li>
          </ul>
        </div>

        {/* Contact Details Column */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-heading text-2xl mb-8">Contact Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <strong className="text-white block mb-2 text-sm uppercase tracking-widest">UAE Office</strong>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Al Qusais Industrial Area 3<br/>
                Dubai, UAE<br/>
                P.O Box - 232047
              </p>
              
              <strong className="text-white block mb-2 text-sm uppercase tracking-widest">KSA Office</strong>
              <p className="text-white/50 text-sm leading-relaxed">
                Riyadh, Saudi Arabia
              </p>
            </div>
            
            <div>
              <strong className="text-white block mb-2 text-sm uppercase tracking-widest">Call Us</strong>
              <p className="text-white/50 text-sm mb-6">+971 4 239 1234</p>
              
              <strong className="text-white block mb-2 text-sm uppercase tracking-widest">Email</strong>
              <p className="text-white/50 text-sm">info@fotiosuae.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/30 text-xs gap-4">
        <p>Copyright © 2024 Fotios. All rights reserved.</p>
        <p>Best MEP design and interior design company in Dubai, UAE | KSA - Saudi Arabia</p>
      </div>
    </footer>
  );
}
