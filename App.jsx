import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, Phone, Play, ShoppingBag } from "lucide-react";

const gallery = [
  "https://placehold.co/1000x650/111/FFF?text=Signature+Facial",
  "https://placehold.co/1000x650/111/FFF?text=Deep+Tissue+Massage",
  "https://placehold.co/1000x650/111/FFF?text=Ayurvedic+Oils",
  "https://placehold.co/1000x650/111/FFF?text=Relaxation+Lounge",
  "https://placehold.co/1000x650/111/FFF?text=Herbal+Steam",
  "https://placehold.co/1000x650/111/FFF?text=Couples+Retreat"
];


const paymentLinks = {
  // Optional: set these as environment variables in Vercel Project → Settings → Environment Variables
  stripe: import.meta.env.VITE_STRIPE_PAYMENT_LINK || "", // e.g., https://buy.stripe.com/your_link
  paypal: import.meta.env.VITE_PAYPAL_LINK || "",         // e.g., https://paypal.me/yourname/120
};

const product = {
  title: "Quantum Card Version 10.0 — Black",
  price: 120,
  img: "/img/quantum-card-main.png",
  bullets: [
    "Advanced Technology: PVC, resin, and Terahertz chip construction.",
    "Negative Ion Load: ~20,000cc as provided by manufacturer.",
    "Easy to Use: carry in pocket or place under pillow.",
    "Versatile: marketed for comfort, focus, post‑exercise recovery and hydrated skin."
  ],
  disclaimer:
    "Description provided by seller/manufacturer and not a medical claim. Not intended to diagnose, treat, cure, or prevent any disease.",
};

export default function App(){
  const [form, setForm] = useState({ name:"", email:"", phone:"", notes:"" });
  const mailto = `mailto:bookyourspaday@gmail.com?subject=Booking%20Request&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nNotes: ${form.notes}`
  )}`;
  const orderMail = `mailto:bookyourspaday@gmail.com?subject=Order%20Quantum%20Card%20($${product.price})&body=${encodeURIComponent(
    `I'd like to order the Quantum Card (Black) for $${product.price}.\n\nName:\nEmail:\nPhone:\nShipping Address:\nNotes:`
  )}`;

  return (
    <div className="min-h-screen bg-base text-white">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/20 border-b border-white/10">
        <div className="container flex items-center justify-between py-3">
          <div className="font-semibold tracking-tight">BookYourSpaDay</div>
          <nav className="hidden md:flex gap-6 text-sm opacity-90">
            <a href="#booking">Booking</a>
            <a href="#gallery">Gallery</a>
            <a href="#ayurveda">Ayurveda</a>
            <a href="#store">Store</a>
            <a href="#payment">Payment</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#booking" className="btn btn-primary text-sm">Book</a>
        </div>
      </header>

      {/* HERO */}
      <section className="gradient-hero">
        <div className="container py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight">Reset. Restore. <span className="opacity-80">Glow.</span></h1>
            <p className="mt-5 text-white/80 text-lg">Modern spa rituals and Ayurveda‑inspired treatments tailored to your body and mind.</p>
            <div className="mt-8 flex gap-3">
              <a href="#booking" className="btn btn-primary flex items-center gap-2"><Calendar className="w-4 h-4"/> Book Now</a>
              <a href="#store" className="btn btn-ghost flex items-center gap-2"><ShoppingBag className="w-4 h-4"/> Store</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-sm">
              <span className="badge">Open daily by appointment</span>
              <span className="badge">Same‑day requests welcome</span>
              <span className="badge">Holistic + modern techniques</span>
            </div>
          </div>
          <motion.img initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} src={gallery[0]} alt="Hero" className="w-full object-cover shadow-glow" />
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="section">
        <div className="container grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h2 className="text-2xl font-semibold">Booking</h2>
            <p className="mt-2 text-white/80">Email your preferred date/time and treatments. We’ll confirm quickly.</p>
            <ul className="mt-4 text-sm text-white/80 space-y-2">
              <li>• Custom sessions from 60–120 minutes</li>
              <li>• Add‑ons: scalp therapy, hot stones, herbal steam</li>
            </ul>
          </div>
          <form onSubmit={(e)=>{e.preventDefault(); window.location.href=mailto;}} className="card p-6 grid gap-3">
            <input className="bg-transparent border border-white/15 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required/>
            <input className="bg-transparent border border-white/15 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required/>
            <input className="bg-transparent border border-white/15 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})}/>
            <textarea className="bg-transparent border border-white/15 rounded-2xl px-4 py-3 h-28 outline-none focus:ring-2 focus:ring-white/30" placeholder="Treatments / notes" value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})}/>
            <div className="flex gap-3">
              <button className="btn btn-primary w-full">Email booking</button>
              <a href="mailto:bookyourspaday@gmail.com" className="btn w-full">book@</a>
            </div>
            <div className="text-sm text-white/70">Or email us directly: <a className="underline" href="mailto:bookyourspaday@gmail.com">bookyourspaday@gmail.com</a></div>
          </form>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold">Gallery</h2>
          <p className="mt-2 text-white/80">Temporary images—swap with your photos anytime.</p>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, i)=>(
              <img key={i} src={src} alt={`Placeholder ${i+1}`} className="w-full aspect-[4/3] object-cover shadow-glow" />
            ))}
          </div>
        </div>
      </section>

      {/* AYURVEDA */}
      <section id="ayurveda" className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold">Ayurveda Rituals</h2>
          <p className="mt-2 text-white/80">Traditional practices reimagined for modern wellbeing—oil therapies, herbal blends, and mindful breathwork.</p>
          <div className="mt-6">
            <video src="/media/ayurveda.mp4" playsInline autoPlay muted loop controls className="w-full object-cover shadow-glow max-h-[520px]" />
            <div className="mt-2 text-xs text-white/60">If video doesn’t play, we’ll re‑encode it and replace.</div>
          </div>
        </div>
      </section>

      {/* STORE */}
      <section id="store" className="section">
        <div className="container grid md:grid-cols-2 gap-8 items-start">
          <div className="card p-5">
            <img src={product.img} alt={product.title} className="w-full object-cover shadow-glow" />
          </div>
          <div className="card p-6">
            <h2 className="text-2xl font-semibold">{product.title}</h2>
            <div className="mt-2 text-white/80">${product.price}.00</div>
            <ul className="mt-4 text-sm text-white/80 space-y-2">
              {product.bullets.map((b,i)=>(<li key={i}>• {b}</li>))}
            </ul>
            <div className="mt-5 grid sm:grid-cols-3 gap-3">{paymentLinks.stripe ? <a href={paymentLinks.stripe} target="_blank" rel="noreferrer" className="btn btn-primary">Pay with Stripe</a> : <a href={orderMail} className="btn btn-primary">Buy via Email</a>}{paymentLinks.paypal ? <a href={paymentLinks.paypal} target="_blank" rel="noreferrer" className="btn">Pay with PayPal</a> : <a href="#payment" className="btn">Pay with Zelle</a>}<a href="#payment" className="btn">Zelle Details</a></div>
<div className="mt-4 text-xs text-white/60">{product.disclaimer}</div>
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section id="payment" className="section">
        <div className="container grid md:grid-cols-3 gap-6">
          <div className="card p-5">
            <div className="text-lg font-medium">Zelle</div>
            <div className="mt-1 text-white/80">Send to: <strong>bookyourspaday@gmail.com</strong></div>
            <div className="mt-2 text-xs text-white/60">Include your full name & shipping address in the memo for product orders.</div>
          </div>
          <div className="card p-5">
            <div className="text-lg font-medium">Venmo</div>
            <div className="mt-1 text-white/80">@Maria-Cristina-5</div>
            <div className="mt-2 text-xs text-white/60">Use memo: “Quantum Card $120”.</div>
          </div>
          <div className="card p-5">
            <div className="text-lg font-medium">PayPal</div>
            <div className="mt-1 text-white/80">Request an invoice via email.</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <ul className="mt-3 text-sm text-white/80 space-y-1">
              <li><Mail className="inline w-4 h-4 mr-2" /> <a className="underline" href="mailto:bookyourspaday@gmail.com">bookyourspaday@gmail.com</a></li>
              <li><Phone className="inline w-4 h-4 mr-2" /> (305) 467‑7595</li>
            </ul>
          </div>
          <div className="card p-6 text-sm text-white/70">
            *Font: Site is set to use <strong>Alta</strong> once you paste your Adobe Fonts kit in <code>index.html</code>. Until then it falls back gracefully.
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="container py-8 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} BookYourSpaDay</div>
          <div className="flex gap-6">
            <a href="#booking">Booking</a>
            <a href="#store">Store</a>
            <a href="#payment">Payment</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
