import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-primary opacity-90 pointer-events-none"></div>
      <div className="absolute inset-0 pattern-bg opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
                Готовы внедрить AI в ваш бизнес?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Запишитесь на бесплатную консультацию, и мы расскажем, как наши решения могут помочь вашей компании автоматизировать процессы и улучшить взаимодействие с клиентами.
              </p>
              
              {/* Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="shrink-0 bg-white/20 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-white/90">Бесплатная консультация и анализ ваших потребностей</p>
                </div>
                <div className="flex items-start">
                  <div className="shrink-0 bg-white/20 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-white/90">Демонстрация работы системы на примере вашего бизнеса</p>
                </div>
                <div className="flex items-start">
                  <div className="shrink-0 bg-white/20 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-white/90">Индивидуальный план внедрения и расчет ROI</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-neutral-dark text-2xl font-bold mb-6">Связаться с нами</h3>
                
                <form>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-1">
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-neutral-light/50 border border-neutral-dark/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-dark mb-1">
                        Компания
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 bg-neutral-light/50 border border-neutral-dark/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="ООО Компания"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-neutral-light/50 border border-neutral-dark/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="example@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark mb-1">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 bg-neutral-light/50 border border-neutral-dark/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-1">
                        Сообщение
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        className="w-full px-4 py-3 bg-neutral-light/50 border border-neutral-dark/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Расскажите кратко о вашем проекте..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="mt-6 w-full btn btn-primary"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Отправить запрос
                  </motion.button>
                  
                  <p className="text-neutral-dark/60 text-xs mt-4 text-center">
                    Отправляя форму, вы соглашаетесь с нашей политикой конфиденциальности
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;