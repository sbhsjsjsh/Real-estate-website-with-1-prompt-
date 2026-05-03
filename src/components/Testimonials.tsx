import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah & James Miller',
    role: 'Homeowners',
    content: "The level of service and discretion provided was exceptional. They understood exactly what we were looking for and found our dream home before it even hit the public market.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=70'
  },
  {
    name: 'Robert Chen',
    role: 'Property Investor',
    content: "Their market knowledge is unrivaled. They guided my investment decisions with data and instinct, resulting in a highly profitable portfolio expansion. True professionals.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=70'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/3"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-2 block">
              Client Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Hear from our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Clients</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our success is measured by the satisfaction and trust of the clients we serve. Here's what they have to say about working with us.
            </p>
            <div className="flex gap-4">
               <button className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                  &lt;
               </button>
               <button className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                  &gt;
               </button>
            </div>
          </motion.div>

          <div className="md:w-2/3 flex gap-6 pb-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="min-w-[320px] md:min-w-[400px] snap-center bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 relative text-white"
              >
                <div className="absolute top-8 right-8 text-white/5">
                   <Quote className="w-12 h-12" fill="currentColor" />
                </div>
                <p className="text-sm italic opacity-80 leading-relaxed mb-8 relative z-10 w-11/12">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/20"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <h4 className="font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-[10px] uppercase font-semibold text-amber-500 tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
