const Profile = () => {
    const facilities = [
        { icon: '❄️', name: 'Ruang Utama Ber-AC', description: 'Kapasitas 500 jamaah' },
        { icon: '🚗', name: 'Area Parkir Luas', description: 'Mobil & motor' },
        { icon: '🎓', name: 'TPA & TPQ', description: 'Pendidikan Al-Qur\'an' },
        { icon: '♿', name: 'Akses Disabilitas', description: 'Ramp & toilet khusus' },
        { icon: '🚰', name: 'Tempat Wudhu', description: 'Bersih & nyaman' },
        { icon: '🔊', name: 'Sound System', description: 'Audio berkualitas' },
    ];

    const galleryImages = [
        'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800',
        'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800',
        'https://images.unsplash.com/photo-1590076215667-875d4e0c5c0e?q=80&w=800',
        'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=800',
        'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800',
        'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=800',
    ];

    return (
        <section id="profil" className="py-24 bg-[#FAF9F6] dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12 reveal">
                    <h2 className="mb-4 text-4xl md:text-5xl font-bold">
                        <span className="bg-linear-to-r from-[#4A6741] to-[#D4AF37] bg-clip-text text-transparent">
                            Profil Masjid
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Mengenal lebih dekat Masjid An-Nur Pucang Gading
                    </p>
                </div>

                {/* History & Description */}
                <div className="max-w-4xl mx-auto mb-16 reveal">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                                    🕌 Sejarah Singkat
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    Masjid An-Nur Pucang Gading didirikan pada tahun 1995 oleh para tokoh masyarakat setempat
                                    dengan tujuan menjadi pusat ibadah dan pembinaan umat Islam di wilayah Pucang Gading, Mranggen, Demak.
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Berawal dari musholla sederhana, kini telah berkembang menjadi masjid yang megah dengan
                                    berbagai fasilitas lengkap untuk mendukung aktivitas ibadah dan dakwah.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                                    🎯 Visi & Misi
                                </h3>
                                <div className="space-y-3">
                                    <div>
                                        <h4 className="font-semibold text-[#4A6741] dark:text-[#9FBF95] mb-1">Visi</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Menjadi masjid yang makmur, ramai, dan menjadi pusat pembinaan umat yang berakhlakul karimah
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#4A6741] dark:text-[#9FBF95] mb-1">Misi</h4>
                                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
                                            <li>Menyelenggarakan ibadah dengan khusyuk</li>
                                            <li>Membina generasi Qur'ani</li>
                                            <li>Mempererat ukhuwah islamiyah</li>
                                            <li>Memberdayakan ekonomi umat</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Facilities */}
                <div className="mb-16 reveal">
                    <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        ✨ Fasilitas Masjid
                    </h3>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {facilities.map((facility) => (
                            <div
                                key={facility.name}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center"
                            >
                                <div className="text-5xl mb-3">{facility.icon}</div>
                                <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">
                                    {facility.name}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {facility.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gallery */}
                <div className="reveal">
                    <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        📸 Galeri Foto
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((image, index) => (
                            <div
                                key={image}
                                className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
                            >
                                <img
                                    src={image}
                                    alt={`Masjid An-Nur ${ index + 1 }`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white text-sm font-semibold">Masjid An-Nur</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
