import React from 'react';
import { motion } from 'framer-motion';
import { useSite } from '../context/SiteContext';
import { ChefHat, ShieldCheck, Star, MapPin, Phone, Instagram, Youtube, Send } from 'lucide-react';

const AboutSection = () => {
  const { isDarkMode } = useSite();
  return (
    <section className="relative py-24 md:py-32 px-6 flex flex-col items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 tracking-wider uppercase drop-shadow-[0_0_30px_rgba(249,115,22,0.4)]">
          Biz Haqimizda
        </h2>
        <motion.div 
          className={`p-8 md:p-12 max-w-5xl mx-auto rounded-[2rem] md:rounded-[3rem] backdrop-blur-xl border shadow-2xl ${isDarkMode ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-white/40 border-white/60 text-gray-700'}`}
        >
          <p className="text-base md:text-lg lg:text-xl leading-[1.8] md:leading-[2.2] font-normal tracking-wide text-center text-opacity-90">
            Biz uchun restoran shunchaki ovqatlanish joyi emas, u — <strong className="text-orange-500 font-semibold">san'at va mehmondo'stlik</strong> maskani. Har bir taom eng yuqori sifatli mahsulotlardan, tabiat in'om etgan sof ne'matlardan tayyorlanadi. Bizning professional oshpazlar jamoamiz an'anaviy ta'm va zamonaviy xizmat ko'rsatishni mukammal darajada uyg'unlashtiradi. Sizning har bir tashrifingiz — biz uchun ulkan sharaf va unutilmas xotiraga aylanishi shart.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

const ShowcaseSection = () => {
  const { isDarkMode, foods } = useSite();
  // Duplicate foods array for infinite scroll
  const marqueeFoods = [...foods, ...foods, ...foods, ...foods];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.5)]">
          BIZDA BORLAR
        </h2>
      </motion.div>

      <div className="relative w-full flex overflow-hidden group">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 px-4 group-hover:[animation-play-state:paused] w-max"
        >
          {marqueeFoods.map((item, idx) => (
            <div 
              key={idx}
              className={`w-[260px] md:w-[320px] shrink-0 p-6 rounded-3xl backdrop-blur-md border transition-all duration-500 hover:scale-105 hover:-translate-y-4 shadow-xl ${isDarkMode ? 'bg-white/5 border-white/10 hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)]' : 'bg-white/50 border-white/80 hover:shadow-[0_20px_40px_rgba(249,115,22,0.2)]'}`}
            >
              <div className="relative w-full h-48 md:h-56 mb-6 rounded-full overflow-hidden border-4 border-orange-500/20 group-hover:border-orange-500/50 transition-colors shadow-inner flex items-center justify-center bg-black/5">
                <img src={item.image} alt={item.name} className={`w-full h-full object-cover ${item.name.toLowerCase().includes('somsa') ? 'scale-[1.35]' : 'scale-105'}`} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-center mb-2">{item.name}</h3>
              <p className="text-orange-500 font-bold text-center text-lg">{item.price}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TimelineSection = () => {
  const { isDarkMode } = useSite();
  const steps = [
    { num: "01", title: "Eng Sifatli Mahsulotlar", desc: "Har tong eng sara va toza mahsulotlar yetkazib kelinadi. Har bir masalliq alohida tekshiruvdan o'tadi.", icon: <ShieldCheck className="w-8 h-8 text-orange-500" /> },
    { num: "02", title: "Professional Oshpazlar", desc: "Ko'p yillik tajribaga ega ustalar taomlarni o'ziga xos mehr bilan tayyorlashadi.", icon: <ChefHat className="w-8 h-8 text-orange-500" /> },
    { num: "03", title: "Yuqori Darajadagi Xizmat", desc: "Har bir mijozga oliy darajada va tezkor xizmat ko'rsatiladi. Sizning qulayligingiz bizning bosh maqsadimiz.", icon: <Star className="w-8 h-8 text-orange-500" /> }
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-black mb-24 text-center tracking-tight drop-shadow-lg"
      >
        Bizning Ish <span className="text-orange-500 drop-shadow-[0_0_20px_rgba(249,115,22,0.5)]">Faoliyatimiz</span>
      </motion.h2>

      <div className="relative max-w-5xl w-full flex flex-col gap-16 md:gap-24">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-orange-500/50 to-transparent blur-[1px]" />

        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            className={`flex flex-col md:flex-row items-center justify-between w-full relative z-10 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} pl-12 md:pl-0`}
          >
            <div className={`w-full md:w-5/12 flex ${idx % 2 === 1 ? 'justify-start' : 'justify-end'} mb-8 md:mb-0`}>
              <div className={`p-8 rounded-3xl backdrop-blur-xl border transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.2)] ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white/60 border-white/80'}`}>
                <div className="flex items-center gap-4 mb-4">
                  {step.icon}
                  <h3 className="text-xl md:text-2xl font-bold">{step.title}</h3>
                </div>
                <p className={`font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{step.desc}</p>
              </div>
            </div>

            {/* Center Node */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.6)] flex items-center justify-center font-black text-xl md:text-2xl text-white border-4 border-[#111]">
              {step.num}
            </div>

            <div className="hidden md:block w-5/12" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const WhyUsSection = () => {
  const { isDarkMode } = useSite();
  return (
    <section className="relative py-32 px-6 flex flex-col items-center justify-center min-h-[60vh] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="max-w-4xl text-center relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-black mb-12 drop-shadow-xl">
          Nima Uchun <span className="text-orange-500 italic">Biz?</span>
        </h2>
        
        <div className={`relative p-10 md:p-14 lg:p-20 rounded-[3rem] backdrop-blur-2xl border ${isDarkMode ? 'bg-black/40 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]' : 'bg-white/40 border-white/60 shadow-[0_30px_60px_rgba(0,0,0,0.1)]'}`}>
          <div className="absolute -top-6 left-8 md:-top-10 md:left-10 text-6xl md:text-8xl text-orange-500/30 font-serif">"</div>
          <p className="text-base md:text-xl lg:text-2xl leading-[1.8] md:leading-[2.2] font-normal italic relative z-10 text-center px-4 md:px-8">
            Biz uchun taomning shunchaki chiroyli ko'rinishi yetarli emas. Eng muhimi — uning beqiyos ta'mi va mijozlarimizning samimiy tabassumi. Har bir mijoz biz uchun aziz mehmon, har bir qozon ovqat esa ustaning chinakam asari hisoblanadi. Biz sifat, halollik va ajoyib lazzat kafolatimiz.
          </p>
          <div className="absolute -bottom-16 right-8 md:-bottom-20 md:right-10 text-6xl md:text-8xl text-orange-500/30 font-serif rotate-180">"</div>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  const { isDarkMode } = useSite();
  
  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=41.311081,69.240562', '_blank');
  };

  return (
    <footer className={`relative mt-20 py-16 md:py-24 border-t px-6 overflow-hidden ${isDarkMode ? 'border-white/10 bg-[#0a0a0a]' : 'border-black/5 bg-[#e8e4d8]'}`}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-orange-500/20 blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto flex flex-col items-center relative z-10">
        
        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
          <a href="#" className="flex items-center gap-3 group text-lg md:text-xl font-bold uppercase tracking-widest transition-colors hover:text-orange-500">
            <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform text-pink-500" />
            <span className="relative">
              Instagram
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
            </span>
          </a>
          <a href="#" className="flex items-center gap-3 group text-lg md:text-xl font-bold uppercase tracking-widest transition-colors hover:text-orange-500">
            <Youtube className="w-6 h-6 group-hover:scale-110 transition-transform text-red-500" />
            <span className="relative">
              YouTube
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
            </span>
          </a>
          <a href="#" className="flex items-center gap-3 group text-lg md:text-xl font-bold uppercase tracking-widest transition-colors hover:text-orange-500">
            <Send className="w-6 h-6 group-hover:scale-110 transition-transform text-blue-500" />
            <span className="relative">
              Telegram
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
            </span>
          </a>
        </div>

        {/* Action Links */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center">
          <a href="tel:+998901234567" className={`flex flex-col items-center gap-4 p-8 rounded-3xl backdrop-blur-md transition-all hover:scale-105 ${isDarkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-white/40 hover:bg-white/60'}`}>
            <div className="p-4 rounded-full bg-orange-500/20 text-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
              <Phone className="w-8 h-8" />
            </div>
            <div className="text-center">
              <p className="text-xs tracking-widest uppercase mb-2 opacity-60">Qo'ng'iroq qilish</p>
              <h4 className="text-2xl font-black">+998 90 123 45 67</h4>
            </div>
          </a>

          <button onClick={handleMapClick} className={`flex flex-col items-center gap-4 p-8 rounded-3xl backdrop-blur-md transition-all hover:scale-105 ${isDarkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-white/40 hover:bg-white/60'}`}>
            <div className="p-4 rounded-full bg-orange-500/20 text-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
              <MapPin className="w-8 h-8" />
            </div>
            <div className="text-center">
              <p className="text-xs tracking-widest uppercase mb-2 opacity-60">Manzilimiz</p>
              <h4 className="text-2xl font-black">Bizning Joylashuvimiz</h4>
            </div>
          </button>
        </div>

        <div className="mt-24 text-center opacity-40 text-sm font-medium tracking-widest">
          &copy; {new Date().getFullYear()} ZAYTUN RESTAURANT. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export const LandingSections = () => {
  return (
    <>
      <AboutSection />
      <ShowcaseSection />
      <TimelineSection />
      <WhyUsSection />
      <Footer />
    </>
  );
};
