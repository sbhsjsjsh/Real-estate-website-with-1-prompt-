import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent text-slate-800 relative xl:px-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-2 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Let's Discuss Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Property Needs</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-12 max-w-md">
              Whether you are looking to buy, sell, or invest, our luxury real estate experts are ready to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm border border-slate-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-0.5">Call Us</p>
                  <p className="text-lg font-bold text-slate-800">+1 (800) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shadow-sm border border-slate-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-0.5">Email Us</p>
                  <p className="text-lg font-bold text-slate-800">contact@auraestates.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shadow-sm border border-slate-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-0.5">Our Office</p>
                  <p className="text-lg font-bold text-slate-800">123 Luxury Ave, Beverly Hills, CA</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-lg">
              <h3 className="text-xl font-bold mb-8 text-slate-900 flex items-center gap-2">
                Enquire Privately
                <span className="text-[10px] font-medium text-slate-400 tracking-normal">(Response &lt; 2hrs)</span>
              </h3>
              
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                    placeholder="Full Name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <select
                      id="requirement"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 transition-all text-slate-900"
                    >
                      <option>Requirement</option>
                      <option>Buy a property</option>
                      <option>Sell a property</option>
                      <option>Rent a property</option>
                      <option>General inquiry</option>
                    </select>
                  </div>
                </div>
                <div>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                    placeholder="Tell us about your preferences..."
                  />
                </div>
                
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white font-bold py-3.5 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg mt-2 text-sm"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
