const Footer = () => {
    const contactInfo = {
        address: 'Jl. Pucang Anom Timur, Pucanggading, Batursari, Kec. Mranggen, Kabupaten Demak, Jawa Tengah 59567',
        phone: '+62 812-3456-7890',
        email: 'info@masjidannur-pucang.id',
        whatsapp: '6281234567890',
    };

    const socialMedia = [
        { name: 'Instagram', icon: '📷', url: 'https://instagram.com/masjidannur' },
        { name: 'YouTube', icon: '📺', url: 'https://youtube.com/@masjidannur' },
        { name: 'Facebook', icon: '👥', url: 'https://facebook.com/masjidannur' },
    ];

    const quickLinks = [
        { label: 'Beranda', href: '#hero' },
        { label: 'Profil', href: '#profil' },
        { label: 'Jadwal', href: '#jadwal' },
        { label: 'Donasi', href: '#donasi' },
    ];

    return (
        <footer id="kontak" className="bg-linear-to-br from-[#2C4A2F] to-[#4A6741] text-white no-print">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
                    {/* About */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center">
                                <svg className="w-7 h-7 text-[#2C4A2F]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L3 9v12h6v-6h6v6h6V9l-9-7zm0 2.5L18 9v10h-2v-6H8v6H6V9l6-4.5z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Masjid An-Nur</h3>
                                <p className="text-sm opacity-75">Pucang Gading</p>
                            </div>
                        </div>
                        <p className="text-sm opacity-90 leading-relaxed">
                            Pusat ibadah dan pembinaan umat Islam di wilayah Pucang Gading, Mranggen, Demak.
                            Mari bersama memakmurkan masjid.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Menu Cepat</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm opacity-90 hover:opacity-100 hover:text-[#D4AF37] transition-colors inline-block"
                                    >
                                        → {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Kontak</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="opacity-75">📍</span>
                                <span className="opacity-90">{contactInfo.address}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="opacity-75">📞</span>
                                <a href={`tel:${ contactInfo.phone }`} className="opacity-90 hover:text-[#D4AF37]">
                                    {contactInfo.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="opacity-75">✉️</span>
                                <a href={`mailto:${ contactInfo.email }`} className="opacity-90 hover:text-[#D4AF37]">
                                    {contactInfo.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`https://wa.me/${ contactInfo.whatsapp }`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors mt-2"
                                >
                                    <span>💬</span>
                                    <span className="font-semibold">Hubungi via WhatsApp</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media & Map */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
                        <div className="flex gap-3 mb-4">
                            {socialMedia.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-colors text-xl"
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        <a
                            href="https://maps.app.goo.gl/aHhaLxhs5VPcgv2b6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors text-sm"
                        >
                            <span>🗺️</span>
                            <span>Lihat di Google Maps</span>
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                        <p className="opacity-75">
                            © {new Date().getFullYear()} Masjid An-Nur Pucang Gading. All rights reserved.
                        </p>
                        <p className="opacity-75">
                            Dibuat dengan ❤️ untuk umat Islam
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
