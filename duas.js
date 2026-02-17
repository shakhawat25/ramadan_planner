// 30 short duas (safe + common). You can swap texts anytime.
export const DUAS_30 = Array.from({ length: 30 }).map((_, i) => ({
    day: i + 1,
    title: [
        "Mercy", "Relief", "Steadfastness", "Protection", "Guidance", "Forgiveness", "Gentleness", "Worldly Good", "Inner Light", "Gratitude",
        "Patience", "Knowledge", "Ease", "Healing", "Good Character", "Blessings", "Provision", "Strength", "Sincerity", "Peace",
        "Family", "Success", "Barakah", "Safety", "Taqwa", "Good End", "Acceptance", "Laylatul Qadr", "Ummah", "Jannah"
    ][i],
    ar: [
        "رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ",
        "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
        "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا",
        "اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي",
        "اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي",
        "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا",
        "اللَّهُمَّ إِنِّي أَسْأَلُكَ الرِّفْقَ فِي الأَمْرِ كُلِّهِ",
        "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً",
        "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا",
    ][i] || "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ",
    tr: [
        "Rabbi-ghfir warham wa anta khayrur-raahimeen",
        "Ya Hayyu Ya Qayyum, bi-rahmatika astagheeth",
        "Rabbana afrigh 'alayna sabran wa thabbit aqdamana",
        "Allahumma ihfazni min bayni yadayya wa min khalfi",
        "Allahumma ihdini wa saddidni",
        "Rabbana-ghfir lana dhunubana wa israfana fi amrina",
        "Allahumma inni as’aluka ar-rifqa fil-amri kullihi",
        "Rabbana atina fid-dunya hasanah",
        "Allahummaj'al fi qalbi nuran",
    ][i] || "Allahumma inni as'aluka khayra hadhal-yawm",
    en: [
        "My Lord, forgive and have mercy, for You are the best of those who show mercy.",
        "O Living, O Sustainer, in Your mercy I seek relief.",
        "Our Lord, pour upon us patience and plant firmly our feet.",
        "O Allah, protect me from my front and from my back.",
        "O Allah, guide me and keep me firm.",
        "Our Lord, forgive our sins and our excesses.",
        "O Allah, grant gentleness in all matters.",
        "Our Lord, give us good in this world.",
        "O Allah, place light in my heart.",
    ][i] || "O Allah, grant me goodness in this day.",
}));
