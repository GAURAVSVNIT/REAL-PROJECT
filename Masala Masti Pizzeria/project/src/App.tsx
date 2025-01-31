import { Menu, Sun, Moon } from 'lucide-react';
import Carousel from './components/Carousel';
import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Navigation Bar */}
      <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm text-gray-800 dark:text-white py-4 shadow-lg transition-colors duration-300">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-display font-bold text-orange-600 dark:text-orange-500">
              Masala Masti Pizzeria
            </h1>
            
            <div className="flex items-center gap-6">
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="text-orange-400" /> : <Moon className="text-gray-600" />}
              </button>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-gray-600 dark:text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu size={24} />
              </button>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6 font-medium">
                <a href="#home" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Home</a>
                <a href="#menu" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Menu</a>
                <a href="#specials" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Specials</a>
                <a href="#about" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">About</a>
                <a href="#contact" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Contact</a>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
            <div className="flex flex-col space-y-3 font-medium">
              <a href="#home" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Home</a>
              <a href="#menu" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Menu</a>
              <a href="#specials" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Specials</a>
              <a href="#about" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section with Carousel */}
        <section id="home" className="relative">
          <Carousel />
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-16 bg-white/50 dark:bg-gray-800/50 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white text-center mb-8">Our Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl transition-colors duration-300">
                <h3 className="text-xl font-display text-orange-600 dark:text-orange-500 font-semibold mb-2">Margherita</h3>
                <p className="text-gray-600 dark:text-gray-300">Fresh tomatoes, mozzarella, basil</p>
              </div>
            </div>
          </div>
        </section>

        {/* Specials Section */}
        <section id="specials" className="py-16 bg-orange-100/50 dark:bg-gray-900/50 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white text-center mb-8">Today's Specials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl transition-colors duration-300">
                <h3 className="text-xl font-display text-orange-600 dark:text-orange-500 font-semibold mb-2">Unlimited Pizza Deal</h3>
                <p className="text-gray-600 dark:text-gray-300">All you can eat pizza for ₹249 only!</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white/50 dark:bg-gray-800/50 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white text-center mb-8">About Us</h2>
            <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-center">
              <p className="mb-4 text-lg leading-relaxed">
                At Masala Masti Pizzeria, we blend traditional Italian recipes with Indian flavors
                to create unique and delicious pizzas that will tantalize your taste buds.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-orange-100/50 dark:bg-gray-900/50 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white text-center mb-8">Contact Us</h2>
            <div className="max-w-xl mx-auto">
              <div className="text-center text-gray-600 dark:text-gray-300">
                <p className="mb-2 text-lg">1st floor, Samarth Acquisti, City Light, Surat</p>
                <p className="mb-2 text-lg">Phone: +91 63577 75000</p>
                <p className="text-lg">Email: info@masalamastipizzeria.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-black text-gray-600 dark:text-gray-400 py-8 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Masala Masti Pizzeria. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;