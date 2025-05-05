import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pattern-bg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-neutral-dark/80 pointer-events-none"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <img 
          src="https://i.imgur.com/FkDPxdx.jpg" 
          alt="AI Technology Background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <div className="inline-block px-3 py-1 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-sm text-primary mb-6">
              Инновационные AI решения для вашего бизнеса
            </div>
            <h1 className="mb-4">
              <span className="block">Создаем умных</span>
              <span className="gradient-text">AI ассистентов</span>
              <span className="block">и Telegram ботов</span>
            </h1>
            <p className="text-xl text-neutral-light/80 mb-8 max-w-lg">
              Автоматизируйте бизнес-процессы, улучшайте обслуживание клиентов и снижайте расходы с помощью современных AI технологий и Retrieval-Augmented Generation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Начать проект
                <FiArrowRight className="ml-2" />
              </motion.a>
              <motion.a
                href="#features"
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Узнать больше
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full bg-gradient-radial from-primary/30 to-transparent blur-xl"></div>
            
            <div className="glass rounded-2xl p-4 relative z-10 shadow-xl">
              <div className="rounded-xl overflow-hidden">
                <motion.img 
                  className="w-full h-auto" 
                  src="https://images.unsplash.com/photo-1649005699461-0d81d1c481e3"
                  alt="AI Assistant and Telegram Bot"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1 }}
                />
              </div>
              
              {/* Floating stats card */}
              <motion.div 
                className="glass absolute -bottom-10 -right-10 p-4 rounded-xl shadow-lg max-w-[200px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h4 className="font-bold text-lg">AI + RAG</h4>
                <p className="text-sm text-neutral-light/70">Извлечение информации из ваших данных с помощью современных нейросетей</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="h-14 w-8 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;