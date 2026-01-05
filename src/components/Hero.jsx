import { usePrayerTimes } from '../hooks';

const getPrayerName = (name) => {
    const names = {
        'Fajr': 'Subuh',
        'Dhuhr': 'Dzuhur',
        'Asr': 'Ashar',
        'Maghrib': 'Maghrib',
        'Isha': 'Isya'
    };
    return names[name] || name;
};

const Hero = () => {
    const { prayerTimes, nextPrayer, loading, usingUserLocation } = usePrayerTimes();

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: 'linear-gradient(rgba(44, 74, 47, 0.7), rgba(74, 103, 65, 0.8)), url(https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=2071)'
                }}
            />

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center text-white pt-20">
                <div className="max-w-4xl mx-auto">
                    {/* Arabic Calligraphy */}
                    <div className="mb-4 sm:mb-6 animate-fade-in">
                        <p className="text-xl sm:text-2xl md:text-3xl mb-2">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
                    </div>

                    {/* Main Headline */}
                    <h1 className="mb-4 sm:mb-6 animate-fade-in-up text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ animationDelay: '0.2s' }}>
                        Pusat Ibadah dan Ukhuwah Umat
                    </h1>

                    {/* Sub-headline with Quranic Verse */}
                    <div className="mb-6 sm:mb-8 animate-fade-in-up px-2" style={{ animationDelay: '0.4s' }}>
                        <p className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-[#F4E4B0]">
                            "إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ"
                        </p>
                        <p className="text-sm sm:text-base md:text-lg opacity-90">
                            "Sesungguhnya yang memakmurkan masjid Allah hanyalah orang yang beriman kepada Allah"
                        </p>
                        <p className="text-xs sm:text-sm opacity-75 mt-2">(QS. At-Taubah: 18)</p>
                    </div>

                    {/* Prayer Times Widget */}
                    <div className="bg-white/10 dark:bg-gray-900/70 backdrop-blur-lg border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        {loading ? (
                            <div className="flex items-center justify-center py-8">
                                <div className="animate-pulse text-base sm:text-lg">Memuat jadwal sholat...</div>
                            </div>
                        ) : (
                            <>
                                {/* Next Prayer Countdown */}
                                {nextPrayer && (
                                    <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-white/20">
                                        <p className="text-xs sm:text-sm uppercase tracking-wider mb-2 opacity-75">Waktu Sholat Selanjutnya</p>
                                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                                            <div>
                                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F4E4B0]">
                                                    {nextPrayer.name}
                                                </h3>
                                                <p className="text-lg sm:text-xl mt-1">{nextPrayer.time} WIB</p>
                                            </div>
                                            <div className="text-center sm:text-left">
                                                <p className="text-xs sm:text-sm opacity-75">Menuju waktu sholat:</p>
                                                <p className="text-xl sm:text-2xl font-bold text-[#F4E4B0]">
                                                    {Math.floor(nextPrayer.minutesUntil / 60)}j {nextPrayer.minutesUntil % 60}m
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* All Prayer Times - Responsive Grid */}
                                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
                                    {prayerTimes && Object.entries(prayerTimes).map(([name, time]) => (
                                        <div key={name} className="text-center">
                                            <p className="text-xs sm:text-sm opacity-75 mb-1">
                                                {getPrayerName(name)}
                                            </p>
                                            <p className="text-base sm:text-lg md:text-xl font-semibold">{time}</p>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-xs opacity-60 mt-3 sm:mt-4 px-2">
                                    📍 {usingUserLocation ? 'Lokasi Anda' : 'Pucang Gading, Demak'} | WIB
                                </p>
                            </>
                        )}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 px-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                        <a
                            href="#jadwal"
                            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg font-semibold text-[#2C4A2F] bg-linear-to-r from-[#D4AF37] to-[#B8941F] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                        >
                            📅 Lihat Jadwal Lengkap
                        </a>
                        <a
                            href="#donasi"
                            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2C4A2F] transition-all"
                        >
                            💝 Salurkan Infaq
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;

