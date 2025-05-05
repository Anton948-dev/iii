import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Алексей Петров',
    position: 'CEO, TechInnovate',
    content: 'Разработанный командой Telegram бот с RAG-технологией полностью трансформировал наше взаимодействие с клиентами. Теперь мы обрабатываем в 3 раза больше запросов без увеличения штата поддержки.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5
  },
  {
    name: 'Елена Соколова',
    position: 'COO, LogisticsPro',
    content: 'AI-ассистент для автоматизации документооборота сэкономил нам более 30 часов работы еженедельно. Точность обработки данных выросла на 95%, а скорость выполнения задач увеличилась в несколько раз.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5
  },
  {
    name: 'Игорь Васильев',
    position: 'CTO, FinTech Solutions',
    content: 'Внедрение AI-решений для анализа финансовых данных позволило нам выявлять скрытые закономерности и принимать более взвешенные решения. ROI от внедрения превзошел наши ожидания уже в первые 3 месяца.',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section relative overflow-hidden">
      {/* Background with subtle pattern and gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="https://i.imgur.com/a4M0uKm.jpg" 
          alt="Abstract Background" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-neutral-dark/80 backdrop-blur-md pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Что говорят <span className="gradient-text">наши клиенты</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-light/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Истории успеха компаний, внедривших наши AI решения
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                {/* Avatar */}
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/30">
                    <img
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Testimonial content */}
                <div>
                  {/* Rating stars */}
                  <div className="flex mb-4 text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`${
                          i < testimonials[activeIndex].rating ? 'fill-current' : ''
                        } text-lg mr-1`}
                      />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl mb-6 italic text-neutral-light/90">
                    "{testimonials[activeIndex].content}"
                  </blockquote>
                  
                  {/* Author */}
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                    <p className="text-neutral-light/70">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </div>
              
              {/* Quote decoration */}
              <div className="absolute top-6 right-8 text-primary/10 text-7xl font-serif">
                "
              </div>
            </motion.div>
            
            {/* Navigation controls */}
            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-neutral-medium/50 hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiChevronLeft className="text-xl" />
              </motion.button>
              
              {/* Indicators */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'bg-primary w-6' : 'bg-neutral-light/30'
                    }`}
                  />
                ))}
              </div>
              
              <motion.button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-neutral-medium/50 hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiChevronRight className="text-xl" />
              </motion.button>
            </div>
          </div>
          
          {/* Logos section */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-neutral-light/50 uppercase tracking-wider text-sm mb-8">Нам доверяют</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {/* Replace with actual client logos */}
              <div className="flex justify-center">
                <div className="h-12 w-32 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-white/30">Logoipsum</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="h-12 w-32 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-white/30">TechCorp</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="h-12 w-32 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-white/30">Finova</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="h-12 w-32 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-white/30">MediaX</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;