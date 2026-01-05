const Agenda = () => {
    const khatibData = {
        name: 'Ustadz Ahmad Fauzi, Lc., M.A.',
        topic: 'Menjaga Lisan di Era Digital',
        date: 'Jumat, 27 Desember 2024',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300',
    };

    const kajianList = [
        {
            title: 'Kajian Tafsir Al-Qur\'an',
            ustadz: 'Ustadz Muhammad Ridwan, S.Ag.',
            schedule: 'Senin, Ba\'da Maghrib',
            icon: '📖',
        },
        {
            title: 'Kajian Hadits',
            ustadz: 'Ustadz Abdullah Hakim, Lc.',
            schedule: 'Rabu, Ba\'da Isya',
            icon: '📚',
        },
        {
            title: 'Kajian Fiqih Kontemporer',
            ustadz: 'Ustadz Yusuf Rahman, M.A.',
            schedule: 'Kamis, Ba\'da Maghrib',
            icon: '⚖️',
        },
        {
            title: 'Tahsin & Tahfidz',
            ustadz: 'Ustadzah Fatimah Zahra, S.Pd.I.',
            schedule: 'Sabtu, 16:00 - 17:30 WIB',
            icon: '🕌',
        },
    ];

    return (
        <section id="jadwal" className="py-24 bg-[#FAF9F6] dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12 reveal">
                    <h2 className="mb-4 text-4xl md:text-5xl font-bold">
                        <span className="bg-linear-to-r from-[#4A6741] to-[#D4AF37] bg-clip-text text-transparent">
                            Agenda & Kegiatan
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Ikuti berbagai kegiatan dan kajian rutin untuk meningkatkan kualitas ibadah dan ilmu agama
                    </p>
                </div>

                {/* Khatib Jumat Highlight */}
                <div className="mb-12 reveal">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all max-w-4xl mx-auto">
                        <div className="bg-linear-to-r from-[#4A6741] to-[#2C4A2F] text-white p-4 -m-8 mb-6 rounded-t-2xl">
                            <h3 className="text-2xl font-bold flex items-center gap-2">
                                🎙️ Khatib Jumat Minggu Ini
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 items-center">
                            <div className="flex justify-center">
                                <img
                                    src={khatibData.image}
                                    alt={khatibData.name}
                                    className="w-40 h-40 rounded-full object-cover border-4 border-[#D4AF37]"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <h4 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                                    {khatibData.name}
                                </h4>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <span className="text-[#D4AF37] font-semibold">Tema:</span>
                                        <span className="text-gray-600 dark:text-gray-400">{khatibData.topic}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[#D4AF37] font-semibold">📅</span>
                                        <span className="text-gray-600 dark:text-gray-400">{khatibData.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[#D4AF37] font-semibold">🕐</span>
                                        <span className="text-gray-600 dark:text-gray-400">Ba'da Dzuhur</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kajian Rutin */}
                <div className="reveal">
                    <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        📚 Kajian Rutin
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {kajianList.map((kajian, index) => (
                            <div
                                key={kajian.title}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-center border-2 border-transparent hover:border-[#4A6741]"
                                style={{ animationDelay: `${ index * 0.1 }s` }}
                            >
                                <div className="text-5xl mb-4">{kajian.icon}</div>
                                <h4 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                                    {kajian.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                    {kajian.ustadz}
                                </p>
                                <div className="inline-block bg-[#C8D5B9] text-[#2C4A2F] px-4 py-2 rounded-full text-sm font-semibold">
                                    {kajian.schedule}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Running Text Announcement */}
                <div className="mt-12 reveal">
                    <div className="bg-linear-to-r from-[#F4E4B0] to-[#D4AF37] rounded-lg p-4 overflow-hidden">
                        <div className="flex items-center gap-4">
                            <span className="text-2xl">📢</span>
                            <div className="flex-1 overflow-hidden">
                                <div className="animate-marquee whitespace-nowrap">
                                    <span className="text-[#2C4A2F] font-semibold">
                                        Pengumuman: Pendaftaran Qurban 1446 H telah dibuka • Info lebih lanjut hubungi pengurus masjid •
                                        Kajian Ramadhan akan segera dimulai • Daftarkan diri Anda sekarang
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agenda;
