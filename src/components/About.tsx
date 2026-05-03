import { motion } from 'motion/react';
import { ShieldCheck, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Properties Sold', value: '1,200+' },
    { label: 'Happy Clients', value: '4.9/5' },
    { label: 'Years Experience', value: '15+' },
  ];

  return (
    <section id="about" className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Images */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-4/5 rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=70" 
                alt="Agent meeting client" 
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-12 -right-4 lg:-right-12 w-3/5 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-20"
            >
               <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=70" 
                alt="Modern office" 
                className="w-full aspect-square object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
            
            {/* Decals */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-4 block">
              About Our Agency
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Redefining the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Luxury Real Estate</span> Experience.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With over a decade of excellence, Aura Estates provides unparalleled service in finding, negotiating, and acquiring the finest properties. We build relationships based on trust, expertise, and complete discretion.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-1">Trusted Advisors</h4>
                  <p className="text-xs text-slate-500">Guided by integrity and deep market knowledge.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-1">Maximized Value</h4>
                  <p className="text-xs text-slate-500">Expert negotiation for your premium investments.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-200">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <button className="mt-10 px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-sm font-medium transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Read Our Full Story
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
