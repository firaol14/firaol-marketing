import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Loader2, ExternalLink } from 'lucide-react';

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export const Booking: React.FC = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    // Load Tally script with error handling
    const loadTally = () => {
      try {
        if (window.Tally) {
          window.Tally.loadEmbeds();
        } else {
          const script = document.createElement('script');
          script.src = "https://tally.so/widgets/embed.js";
          script.async = true;
          script.onload = () => {
            if (window.Tally) {
              window.Tally.loadEmbeds();
            }
          };
          script.onerror = () => {
            console.error('Error loading Tally script');
            // Don't set error immediately on script error, wait for iframe timeout/error
          };
          document.body.appendChild(script);
        }
      } catch (e) {
        console.error("Tally load error:", e);
      }
    };

    loadTally();

    // Listen for form submission with validation
    const handleMessage = (e: MessageEvent) => {
      // Basic security check: ensure message is likely from Tally
      if (e.origin && !e.origin.includes('tally.so')) {
        return;
      }

      try {
        // Parse data safely as it can be string or object
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        
        // Check for submission event
        const isSubmission = 
          (typeof e.data === 'string' && e.data.includes('Tally.FormSubmitted')) ||
          (data?.event === 'Tally.FormSubmitted');

        if (isSubmission) {
          // Add a small delay for better UX before redirecting
          setTimeout(() => {
             navigate('/thank-you');
          }, 500);
        }
      } catch (err) {
        // Ignore parsing errors from unrelated messages
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Safety timeout: if form is still loading after 10 seconds, show error/fallback
    const timeoutId = setTimeout(() => {
      setFormState(current => current === 'loading' ? 'error' : current);
    }, 10000);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-4 md:px-6 max-w-4xl mx-auto w-full flex flex-col items-center">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12 max-w-2xl"
        >
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-6 text-white">
            Let's Scale Your Business
          </h1>
          <p className="text-brand-grey text-lg md:text-xl leading-relaxed">
            Complete the application below to see if we're the right partners to help you reach your revenue goals.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="w-full bg-brand-card border border-white/10 rounded-[32px] overflow-hidden shadow-2xl p-1 md:p-2 min-h-[600px] relative"
        >
            {/* Loading State */}
            {formState === 'loading' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-card z-10">
                <Loader2 className="w-10 h-10 text-brand-blue animate-spin mb-4" />
                <p className="text-brand-grey animate-pulse font-medium">Loading application form...</p>
              </div>
            )}

            {/* Error State Fallback */}
            {formState === 'error' && (
               <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-card z-10 text-center p-8">
                 <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                    <Loader2 className="w-8 h-8 text-red-500" />
                 </div>
                 <p className="text-white font-bold text-2xl mb-3">Unable to load the form</p>
                 <p className="text-brand-grey mb-8 max-w-md leading-relaxed">
                    We're having trouble connecting to the application form. This might be due to a network issue or privacy blocker.
                 </p>
                 <a 
                   href="https://tally.so/r/q4ZVe2" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 px-8 py-4 bg-brand-blue rounded-full text-white font-bold hover:bg-blue-600 transition-colors hover:shadow-lg hover:shadow-brand-blue/20"
                 >
                   Open Application in New Tab <ExternalLink size={18} />
                 </a>
               </div>
            )}

            {/* Tally Embed */}
            <iframe 
                data-tally-src="https://tally.so/embed/q4ZVe2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="800" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0} 
                title="Booking Form"
                className={`w-full bg-transparent transition-opacity duration-500 ${formState === 'ready' ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setFormState('ready')}
                onError={() => setFormState('error')}
            ></iframe>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};