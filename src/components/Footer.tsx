import { Home } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-200 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 via-purple-600 to-amber-500 flex items-center justify-center text-white">
                <Home className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">Aura<span className="text-blue-600 font-medium tracking-normal text-base">Estates</span></span>
            </a>
            <p className="text-sm text-slate-500 mb-6 max-w-sm leading-relaxed">
              Discover unparalleled luxury living. We provide exclusive access to the world's most prestigious properties.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#properties" className="hover:text-blue-600 transition-colors">Properties</a></li>
              <li><a href="#about" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Buy Property</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Sell Property</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Rentals</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Property Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-4">Subscribe for the latest premium updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-50 border border-slate-200 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500 text-sm placeholder:text-slate-400"
              />
              <button className="bg-slate-900 text-white px-4 py-2 rounded-r-lg font-bold text-sm hover:bg-slate-800 transition-colors border border-slate-900">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <p>&copy; {new Date().getFullYear()} Aura Estates. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
