import { motion } from 'motion/react';
import { Home, Key, PieChart } from 'lucide-react';

const services = [
  {
    icon: <Home className="w-8 h-8" />,
    title: 'Buying a Home',
    description: 'We help you find and negotiate the perfect premium property that matches your lifestyle and investment goals.',
  },
  {
    icon: <Key className="w-8 h-8" />,
    title: 'Selling Properties',
    description: 'Our tailored marketing strategies ensure your property reaches the right audience and sells at the best value.',
  },
  {
    icon: <PieChart className="w-8 h-8" />,
    title: 'Property Investment',
    description: 'Expert advice on curating a profitable real estate portfolio in high-growth luxury markets.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Comprehensive Real Estate Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 leading-relaxed"
          >
            From seamless acquisitions to strategic sales, we provide end-to-end services tailored for the luxury market.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center text-xs font-bold text-amber-500 hover:text-amber-400 transition-colors uppercase tracking-wider">
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
