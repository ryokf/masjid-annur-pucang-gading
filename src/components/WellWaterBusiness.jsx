const WellWaterBusiness = () => {
    return (
        <section id="usaha-air" className="py-24 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                {/* Well Water Business */}
                <div className="max-w-4xl mx-auto reveal">
                    <div className="bg-linear-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg border-2 border-blue-200 dark:border-blue-900">
                        <div className="text-center mb-6">
                            <div className="text-5xl mb-3">💧</div>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                Usaha Air Sumur Masjid An-Nur
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold">
                                Air Bersih Berkualitas untuk Masyarakat
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                                <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                                    <span>🚰</span> Informasi Usaha
                                </h4>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500">✓</span>
                                        <span>Air sumur dalam berkualitas tinggi</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500">✓</span>
                                        <span>Sudah melalui proses penyaringan</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500">✓</span>
                                        <span>Layanan pengiriman tersedia</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500">✓</span>
                                        <span>Harga terjangkau untuk masyarakat</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                                <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                                    <span>📋</span> Spesifikasi
                                </h4>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                    <li className="flex justify-between">
                                        <span className="font-semibold">Kedalaman Sumur:</span>
                                        <span>80 meter</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="font-semibold">Kapasitas:</span>
                                        <span>5000 L/hari</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="font-semibold">Kualitas Air:</span>
                                        <span>Jernih & Bersih</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="font-semibold">Status:</span>
                                        <span className="text-green-600 dark:text-green-400 font-semibold">Aktif</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-blue-100 dark:bg-gray-700 rounded-xl p-6 text-center">
                            <p className="text-gray-700 dark:text-gray-300 mb-3">
                                <span className="font-bold">Hasil usaha air sumur</span> digunakan untuk mendukung operasional masjid
                                dan kegiatan sosial kemasyarakatan
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-md"
                                >
                                    <span>📱</span> Hubungi via WhatsApp
                                </a>
                                <a
                                    href="tel:+6281234567890"
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-md"
                                >
                                    <span>📞</span> Telepon Langsung
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WellWaterBusiness;
