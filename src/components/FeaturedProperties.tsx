import { motion } from 'motion/react';
import { BedDouble, Bath, Square, ArrowRight, MapPin } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Modern Glass Villa',
    location: 'Beverly Hills, CA',
    price: '$4,500,000',
    beds: 5,
    baths: 4,
    sqft: 4500,
    image: 'https://images.unsplash.com/photo-1613490908578-81cc3f7fe6b6?auto=format&fit=crop&w=500&q=70',
    featured: true,
  },
  {
    id: 2,
    title: 'Coastal Luxe Estate',
    location: 'Malibu, CA',
    price: '$8,200,000',
    beds: 6,
    baths: 7,
    sqft: 6200,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=70',
    featured: false,
  },
  {
    id: 3,
    title: 'Urban Penthouse',
    location: 'Manhattan, NY',
    price: '$3,150,000',
    beds: 3,
    baths: 3,
    sqft: 2800,
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=500&q=70',
    featured: false,
  },
];

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=" max-w-2xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              Featured Curations
            </h2>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100 p-3 pb-0">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />
                
                {property.featured && (
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md shadow-sm">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Featured</span>
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="mb-4">
                  <span className="text-blue-600 font-bold text-xl">{property.price}</span>
                  <h3 className="text-lg font-semibold text-slate-800 mt-1 line-clamp-1">{property.title}</h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    {property.location}
                  </p>
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-100 text-xs font-medium text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span>{property.beds} Beds</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <span>{property.baths} Baths</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <span>{property.sqft} SqFt</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
