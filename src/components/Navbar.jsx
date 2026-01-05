import { useState } from 'react';
import { useDarkMode } from '../hooks';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDark, setIsDark] = useDarkMode();

    const menuItems = [
        { label: 'Beranda', href: '#hero' },
        { label: 'Profil', href: '#profil' },
        { label: 'Jadwal', href: '#jadwal' },
        { label: 'Donasi', href: '#donasi' },
        { label: 'Kontak', href: '#kontak' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-gray-900/70 backdrop-blur-lg border-b border-white/20 dark:border-white/10 no-print">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo & Name */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#4A6741] to-[#2C4A2F] flex items-center justify-center shadow-md">
                            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L3 9v12h6v-6h6v6h6V9l-9-7zm0 2.5L18 9v10h-2v-6H8v6H6V9l6-4.5z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Masjid An-Nur
                            </h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Pucang Gading</p>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-900 dark:text-white hover:text-[#4A6741] dark:hover:text-[#9FBF95] transition-colors font-medium"
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {isDark ? (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </button>

                        <a href="#donasi" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-[#2C4A2F] bg-linear-to-r from-[#D4AF37] to-[#B8941F] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                            💰 Infaq/Sedekah
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 animate-fade-in">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-3 text-gray-900 dark:text-white hover:text-[#4A6741] dark:hover:text-[#9FBF95] transition-colors font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="flex items-center gap-3 mt-4">
                            <button
                                onClick={() => setIsDark(!isDark)}
                                className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-lg font-semibold bg-transparent border-2 border-[#4A6741] text-[#4A6741] dark:border-[#9FBF95] dark:text-[#9FBF95] hover:bg-[#4A6741] hover:text-white dark:hover:bg-[#9FBF95] dark:hover:text-gray-900 transition-all"
                            >
                                {isDark ? '☀️ Mode Terang' : '🌙 Mode Gelap'}
                            </button>
                            <a
                                href="#donasi"
                                className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-lg font-semibold text-[#2C4A2F] bg-linear-to-r from-[#D4AF37] to-[#B8941F] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                            >
                                💰 Donasi
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
