import { useState, useEffect } from 'react';

// Default coordinates for Masjid An-Nur, Pucang Gading, Demak, Jawa Tengah
const DEFAULT_LATITUDE = -7.0381368;
const DEFAULT_LONGITUDE = 110.496247;

// Prayer times hook using Aladhan API with geolocation
export const usePrayerTimes = () => {
    const [prayerTimes, setPrayerTimes] = useState(null);
    const [nextPrayer, setNextPrayer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState({
        latitude: DEFAULT_LATITUDE,
        longitude: DEFAULT_LONGITUDE
    });
    const [usingUserLocation, setUsingUserLocation] = useState(false);

    useEffect(() => {
        // Try to get user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                    setUsingUserLocation(true);
                },
                (error) => {
                    console.log('Geolocation error, using default location:', error);
                    // Already initialized with default location
                    setUsingUserLocation(false);
                }
            );
        }
    }, []);

    const calculateNextPrayer = (timings) => {
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();

        const prayers = [
            { name: 'Subuh', time: timings.Fajr },
            { name: 'Dzuhur', time: timings.Dhuhr },
            { name: 'Ashar', time: timings.Asr },
            { name: 'Maghrib', time: timings.Maghrib },
            { name: 'Isya', time: timings.Isha },
        ];

        for (const prayer of prayers) {
            const [hours, minutes] = prayer.time.split(':').map(Number);
            const prayerTime = hours * 60 + minutes;

            if (prayerTime > currentTime) {
                const diff = prayerTime - currentTime;
                setNextPrayer({
                    name: prayer.name,
                    time: prayer.time,
                    minutesUntil: diff,
                });
                return;
            }
        }

        // If no prayer found today, next is Fajr tomorrow
        const [hours, minutes] = timings.Fajr.split(':').map(Number);
        const fajrTime = hours * 60 + minutes;
        const diff = (24 * 60 - currentTime) + fajrTime;

        setNextPrayer({
            name: 'Subuh',
            time: timings.Fajr,
            minutesUntil: diff,
        });
    };

    useEffect(() => {
        if (!location) return;

        const fetchPrayerTimes = async () => {
            try {
                const date = new Date();
                const timestamp = Math.floor(date.getTime() / 1000);

                const response = await fetch(
                    `https://api.aladhan.com/v1/timings/${ timestamp }?latitude=${ location.latitude }&longitude=${ location.longitude }&method=2`
                );

                const data = await response.json();

                if (data.code === 200) {
                    const timings = data.data.timings;
                    setPrayerTimes({
                        Fajr: timings.Fajr,
                        Dhuhr: timings.Dhuhr,
                        Asr: timings.Asr,
                        Maghrib: timings.Maghrib,
                        Isha: timings.Isha,
                    });

                    // Calculate next prayer
                    calculateNextPrayer(timings);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching prayer times:', error);
                setLoading(false);
            }
        };

        fetchPrayerTimes();
        // Refresh every minute
        const interval = setInterval(fetchPrayerTimes, 60000);

        return () => clearInterval(interval);
    }, [location]);

    return { prayerTimes, nextPrayer, loading, usingUserLocation };
};

// Scroll reveal hook
export const useScrollReveal = () => {
    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');

        const revealOnScroll = () => {
            reveals.forEach((element) => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Initial check

        return () => window.removeEventListener('scroll', revealOnScroll);
    }, []);
};

// Dark mode hook
export const useDarkMode = () => {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('theme');
        // Always default to light mode, ignore system preferences
        // Only use dark mode if user explicitly saved 'dark' preference
        if (saved === null) {
            // First visit - force light mode
            localStorage.setItem('theme', 'light');
            return false;
        }
        return saved === 'dark';
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return [isDark, setIsDark];
};
