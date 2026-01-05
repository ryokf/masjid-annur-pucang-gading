import { useState } from 'react';

const Donation = () => {
    const [copiedText, setCopiedText] = useState('');

    const bankAccounts = [
        { bank: 'Bank Mandiri', number: '1234567890', name: 'Masjid An-Nur Pucang Gading' },
        { bank: 'BCA', number: '0987654321', name: 'Masjid An-Nur Pucang Gading' },
        { bank: 'BNI Syariah', number: '5555666677', name: 'Masjid An-Nur Pucang Gading' },
    ];

    const copyToClipboard = (text, label) => {
        navigator.clipboard.writeText(text);
        setCopiedText(label);
        setTimeout(() => setCopiedText(''), 2000);
    };

    return (
        <section id="donasi" className="py-24 bg-linear-to-br from-[#C8D5B9] to-[#FAF9F6] dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12 reveal">
                    <h2 className="mb-4 text-4xl md:text-5xl font-bold">
                        <span className="bg-linear-to-r from-[#4A6741] to-[#D4AF37] bg-clip-text text-transparent">
                            Tabungan Akhirat
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
                        "Harta tidak akan berkurang karena sedekah. Salurkan infaq terbaik Anda untuk pembangunan dan operasional masjid."
                    </p>
                    <div className="inline-block bg-[#F4E4B0] px-6 py-3 rounded-full">
                        <p className="text-[#2C4A2F] font-semibold">
                            💝 Barangsiapa membangun masjid, Allah akan membangunkan untuknya rumah di surga
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* QRIS Section */}
                    <div className="reveal">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all h-full">
                            <div className="bg-linear-to-r from-[#4A6741] to-[#2C4A2F] text-white p-4 -m-8 mb-6 rounded-t-2xl">
                                <h3 className="text-2xl font-bold">📱 Scan QRIS</h3>
                                <p className="text-sm opacity-90 mt-1">Mudah, Cepat, dan Aman</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl inline-block mb-4">
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=00020101021226670016COM.NOBUBANK.WWW01189360050300000898740214545400009876560303UMI51440014ID.CO.QRIS.WWW0215ID10200000000150303UMI5204581253033605802ID5925Masjid An-Nur Pucang G6005DEMAK61055956762070703A0163044C7A"
                                    alt="QRIS Code"
                                    className="w-64 h-64"
                                />
                            </div>

                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                Scan dengan aplikasi mobile banking atau e-wallet Anda
                            </p>

                            <div className="flex flex-wrap gap-2 justify-center">
                                {['GoPay', 'OVO', 'Dana', 'ShopeePay', 'LinkAja'].map((app) => (
                                    <span
                                        key={app}
                                        className="bg-[#C8D5B9] text-[#2C4A2F] px-3 py-1 rounded-full text-xs font-semibold"
                                    >
                                        {app}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bank Transfer Section */}
                    <div className="reveal">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all h-full">
                            <div className="bg-linear-to-r from-[#D4AF37] to-[#B8941F] text-[#2C4A2F] p-4 -m-8 mb-6 rounded-t-2xl">
                                <h3 className="text-2xl font-bold">🏦 Transfer Bank</h3>
                                <p className="text-sm opacity-90 mt-1">Pilih rekening tujuan</p>
                            </div>

                            <div className="space-y-4">
                                {bankAccounts.map((account) => (
                                    <div
                                        key={account.bank}
                                        className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-[#4A6741] transition-colors"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-semibold text-gray-900 dark:text-white">{account.bank}</h4>
                                            <button
                                                onClick={() => copyToClipboard(account.number, account.bank)}
                                                className="inline-flex items-center justify-center px-4 py-2 text-sm rounded-lg font-semibold text-white bg-linear-to-r from-[#4A6741] to-[#2C4A2F] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                                            >
                                                {copiedText === account.bank ? '✓ Tersalin' : '📋 Salin'}
                                            </button>
                                        </div>
                                        <p className="text-2xl font-mono font-bold text-[#4A6741] dark:text-[#9FBF95] mb-1">
                                            {account.number}
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            a.n. {account.name}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 bg-[#F4E4B0] rounded-lg p-4">
                                <p className="text-sm text-[#2C4A2F]">
                                    <strong>💡 Tips:</strong> Konfirmasi donasi Anda via WhatsApp pengurus untuk mendapatkan laporan penggunaan dana
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transparency Section */}
                <div className="mt-12 reveal">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                                📊 Transparansi Keuangan
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Kami berkomitmen untuk transparansi pengelolaan dana masjid
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                            <div className="text-center p-4 bg-linear-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
                                <p className="text-sm text-green-700 dark:text-green-400 mb-1">Total Pemasukan (Desember)</p>
                                <p className="text-3xl font-bold text-green-800 dark:text-green-300">Rp 45,5 Jt</p>
                            </div>
                            <div className="text-center p-4 bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
                                <p className="text-sm text-blue-700 dark:text-blue-400 mb-1">Total Pengeluaran</p>
                                <p className="text-3xl font-bold text-blue-800 dark:text-blue-300">Rp 32,8 Jt</p>
                            </div>
                            <div className="text-center p-4 bg-linear-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-lg">
                                <p className="text-sm text-amber-700 dark:text-amber-400 mb-1">Saldo Kas</p>
                                <p className="text-3xl font-bold text-amber-800 dark:text-amber-300">Rp 12,7 Jt</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => alert('Laporan keuangan akan segera tersedia')}
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-transparent border-2 border-[#4A6741] text-[#4A6741] dark:border-[#9FBF95] dark:text-[#9FBF95] hover:bg-[#4A6741] hover:text-white dark:hover:bg-[#9FBF95] dark:hover:text-gray-900 transition-all cursor-pointer"
                            >
                                📄 Unduh Laporan Keuangan Lengkap
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donation;
