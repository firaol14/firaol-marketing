import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        <div className="text-xl font-display font-bold tracking-tight text-white">
          Firaol Marketing
        </div>
        
        <div className="flex items-center gap-8 text-sm text-brand-grey font-medium">
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Terms</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Privacy</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
        </div>

        <div className="text-sm text-brand-grey">
          © {new Date().getFullYear()} Firaol Marketing.
        </div>
      </div>
    </footer>
  );
};