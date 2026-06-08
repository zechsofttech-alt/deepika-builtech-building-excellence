import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICES = [
  'PEB Building Structure',
  'Civil & Steel Construction',
  'Cold Storage Construction',
  'Mezzanine Floor',
  'Warehouse Construction',
  'EOT Cranes',
  'Other',
];

interface ContactFormProps {
  compact?: boolean;
  initialService?: string;
  initialMessage?: string;
}

const ContactForm = ({ compact = false, initialService = '', initialMessage = '' }: ContactFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: Record<string, string>) => {
    const e: Record<string, string> = {};
    if (!data.name || !data.name.trim()) e.name = 'Name is required';
    if (!data.phone || !data.phone.trim()) e.phone = 'Phone is required';
    if (data.phone && !/^[6-9]\d{9}$/.test(data.phone.replace(/\D/g, '')))
      e.phone = 'Enter a valid 10-digit Indian mobile number';
    if (!data.service) e.service = 'Please select a service';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    const fd = new FormData(formRef.current);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const errs = validate(data);
    
    if (Object.keys(errs).length) { 
      setErrors(errs); 
      return; 
    }
    
    setErrors({});
    setStatus('sending');
    try {
      await emailjs.sendForm(
        'service_dbtech',    // Replace with your EmailJS service ID
        'template_quote_req', // Replace with your EmailJS template ID
        formRef.current,
        'user_public_key'     // Replace with your EmailJS public key
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') return (
    <div role="alert" style={{
      background:'#EAF3DE', border:'1px solid #3B6D11',
      borderRadius:'16px', padding:'20px 24px', textAlign:'center'
    }}>
      <h3 style={{color:'#27500A', marginBottom:'8px', fontWeight:'bold', fontSize:'18px'}}>
        ✓ Quote request received!
      </h3>
      <p style={{color:'#3B6D11', margin:0, fontSize:'14px', lineHeight:'1.6'}}>
        Our team will call you within 2 hours.
        For urgent queries, WhatsApp us on{' '}
        <a href="https://wa.me/919600067611"
           style={{color:'#25d366', fontWeight:600}}>
          +91 96000 67611
        </a>
      </p>
    </div>
  );

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
      <div className="space-y-1">
        <label htmlFor="cf-name" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Full Name *</label>
        <input 
          id="cf-name" 
          name="name" 
          type="text"
          placeholder="Your full name"
          aria-describedby={errors.name ? 'name-err' : undefined} 
          className="w-full bg-surface-subtle border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans focus-visible:outline focus-visible:outline-2"
        />
        {errors.name && <span id="name-err" role="alert" className="text-xs text-red-600 font-medium block mt-1">{errors.name}</span>}
      </div>

      <div className="space-y-1">
        <label htmlFor="cf-phone" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Phone Number *</label>
        <input 
          id="cf-phone" 
          name="phone" 
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          aria-describedby={errors.phone ? 'phone-err' : undefined} 
          className="w-full bg-surface-subtle border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans focus-visible:outline focus-visible:outline-2"
        />
        {errors.phone && <span id="phone-err" role="alert" className="text-xs text-red-600 font-medium block mt-1">{errors.phone}</span>}
      </div>

      {!compact && (
        <div className="space-y-1">
          <label htmlFor="cf-email" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Email Address</label>
          <input 
            id="cf-email" 
            name="email" 
            type="email"
            placeholder="your@email.com" 
            className="w-full bg-surface-subtle border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans focus-visible:outline focus-visible:outline-2"
          />
        </div>
      )}

      <div className="space-y-1">
        <label htmlFor="cf-service" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Service Interested In *</label>
        <select 
          id="cf-service" 
          name="service"
          defaultValue={initialService}
          aria-describedby={errors.service ? 'service-err' : undefined}
          className="w-full bg-surface-subtle border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans focus-visible:outline focus-visible:outline-2"
        >
          <option value="">Select a service...</option>
          {SERVICES.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.service && <span id="service-err" role="alert" className="text-xs text-red-600 font-medium block mt-1">{errors.service}</span>}
      </div>

      {!compact && (
        <>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="cf-location" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Project Location / City</label>
              <input 
                id="cf-location" 
                name="location" 
                type="text"
                placeholder="e.g. Sriperumbudur, Chennai" 
                className="w-full bg-surface-subtle border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans focus-visible:outline focus-visible:outline-2"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="cf-size" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Approximate Project Size</label>
              <input 
                id="cf-size" 
                name="size" 
                type="text"
                placeholder="e.g. 5000 sq.ft or 1 acre" 
                className="w-full bg-surface-subtle border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans focus-visible:outline focus-visible:outline-2"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label htmlFor="cf-message" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Message</label>
            <textarea 
              id="cf-message" 
              name="message" 
              rows={4}
              defaultValue={initialMessage}
              placeholder="Tell us about your project..." 
              className="w-full bg-surface-subtle border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans resize-none focus-visible:outline focus-visible:outline-2"
            />
          </div>
        </>
      )}

      <button 
        type="submit" 
        disabled={status === 'sending'}
        className="w-full bg-carbon hover:bg-carbon-mid text-white font-black py-5 rounded-xl flex items-center justify-center gap-3 transition-all duration-500 shadow-xl uppercase tracking-widest text-sm focus-visible:outline focus-visible:outline-2 disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : 'Request Free Quote →'}
      </button>

      <p style={{fontSize:'12px', color:'#64748b', marginTop:'12px'}}>
        Or WhatsApp us directly:{' '}
        <a href="https://wa.me/919600067611?text=Hi%2C%20I%20need%20a%20quote"
           target="_blank" rel="noopener noreferrer"
           style={{color:'#25d366', fontWeight:600}}>
          💬 +91 96000 67611
        </a>
      </p>

      {status === 'error' && (
        <p role="alert" style={{color:'#A32D2D', fontSize:'14px', marginTop:'8px', fontWeight:'semibold'}}>
          Something went wrong. Please call us on{' '}
          <a href="tel:+919600067611" className="underline font-bold">+91 96000 67611</a>
        </p>
      )}
    </form>
  );
};

export default ContactForm;
