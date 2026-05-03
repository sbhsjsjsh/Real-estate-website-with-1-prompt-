import { motion } from 'motion/react';
import { Search, MapPin, DollarSign, Home as HomeIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full w-fit mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
              Premium Real Estate Agency
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-slate-900 mb-6">
            Find Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Dream Home
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
            Discover a curated collection of premium properties across the most exclusive neighborhoods.
          </p>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-2xl p-4 md:p-4 shadow-xl border border-slate-100"
          >
            <div className="flex flex-wrap md:flex-nowrap gap-4">
              <div className="flex-1 flex items-center bg-transparent rounded-2xl px-4 py-2 border border-slate-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
                <MapPin className="w-5 h-5 text-slate-400 mr-3" />
                <div className="flex-1">
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-0.5">Location</label>
                  <input type="text" placeholder="City or Zip" className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400" />
                </div>
              </div>
              <div className="flex-1 flex items-center bg-transparent rounded-2xl px-4 py-2 border border-slate-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
                <HomeIcon className="w-5 h-5 text-slate-400 mr-3" />
                <div className="flex-1">
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-0.5">Property Type</label>
                  <select className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none cursor-pointer appearance-none">
                    <option>All Types</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                  </select>
                </div>
              </div>
              <div className="flex-1 flex items-center bg-transparent rounded-2xl px-4 py-2 border border-slate-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
                 <DollarSign className="w-5 h-5 text-slate-400 mr-3" />
                <div className="flex-1">
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-0.5">Max Price</label>
                   <select className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none cursor-pointer appearance-none">
                    <option>Any Price</option>
                    <option>$500k</option>
                    <option>$1M</option>
                    <option>$5M</option>
                  </select>
                </div>
              </div>
              <button className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl px-8 flex flex-col md:flex-row items-center justify-center gap-2 transition-all duration-300 py-4 md:py-0 shadow-md shadow-blue-200">
                <Search className="w-5 h-5" />
                <span className="font-semibold md:hidden">Search</span>
              </button>
            </div>
            <div className="flex items-center gap-4 mt-6 pl-2">
               <span className="text-sm font-medium text-slate-600">Quick Links:</span>
               <button className="text-xs font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-xl hover:bg-blue-100 transition-colors">Buy</button>
               <button className="text-xs font-semibold text-slate-400 px-4 py-2 hover:bg-slate-50 rounded-xl transition-colors">Rent</button>
               <button className="text-xs font-semibold text-slate-400 px-4 py-2 hover:bg-slate-50 rounded-xl transition-colors">Sell</button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Images */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3, duration: 0.8 }}
           className="relative hidden lg:block h-[700px] w-full"
        >
          {/* Main Image */}
          <div className="absolute top-10 right-0 w-[80%] h-[80%] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Luxury modern home" 
              className="w-full h-full object-cover"
              fetchPriority="high"
              decoding="sync"
            />
            <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay" />
          </div>
          
          {/* Accent Image Front */}
          <motion.div 
            initial={{ opacity: 0, y: 50, x: -50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-10 left-0 w-[55%] h-[45%] rounded-2xl overflow-hidden shadow-2xl flex"
          >
            <img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Modern interior" 
              className="w-full h-full object-cover border-4 border-white rounded-2xl"
              fetchPriority="high"
              decoding="sync"
            />
            {/* Stats floating card */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm shadow-sm px-4 py-3 rounded-2xl flex items-center gap-4">
               <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Starting at</p>
                  <p className="text-lg font-bold text-blue-600">$2.4M</p>
               </div>
               <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                 <MapPin className="w-5 h-5" />
               </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
