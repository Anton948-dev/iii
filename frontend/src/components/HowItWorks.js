import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiCode, FiSettings, FiCheckCircle } from 'react-icons/fi';

const steps = [
  {
    icon: <FiFileText className="text-4xl text-secondary mb-4" />,
    title: 'Анализ потребностей',
    description: 'Мы изучаем ваши бизнес-процессы и определяем, где AI может принести максимальную пользу.'
  },
  {
    icon: <FiCode className="text-4xl text-secondary mb-4" />,
    title: 'Разработка решения',
    description: 'Создаем кастомизированных AI ассистентов или ботов с учетом специфики вашего бизнеса.'
  },
  {
    icon: <FiSettings className="text-4xl text-secondary mb-4" />,
    title: 'Внедрение и обучение',
    description: 'Интегрируем решение в вашу инфраструктуру и обучаем команду эффективно с ним работать.'
  },
  {
    icon: <FiCheckCircle className="text-4xl text-secondary mb-4" />,
    title: 'Поддержка и развитие',
    description: 'Обеспечиваем постоянное совершенствование системы на основе новых данных и отзывов.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section relative overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark via-neutral-medium/5 to-neutral-dark pointer-events-none"></div>
      <div className="absolute inset-0 pattern-bg opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Как <span className="gradient-text">это работает</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-light/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Процесс создания и внедрения AI решений для вашего бизнеса
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="card text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Step number badge */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              
              {/* Step content */}
              <div className="flex flex-col items-center p-6">
                {step.icon}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-neutral-light/70">{step.description}</p>
              </div>
              
              {/* Connector line (for all except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-24 rounded-3xl overflow-hidden relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-primary opacity-90 mix-blend-multiply"></div>
          <div className="relative z-10 p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Реализуйте потенциал AI в вашем бизнесе уже сегодня</h3>
                <p className="text-white/80 text-lg mb-8">
                  Наши AI ассистенты и Telegram боты с технологией RAG обеспечивают персонализированное взаимодействие с клиентами и эффективную автоматизацию внутренних процессов.
                </p>
                <motion.a 
                  href="#contact" 
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Запросить демонстрацию
                </motion.a>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573164574230-db1d5e960238" 
                  alt="AI Assistants in Action" 
                  className="rounded-xl shadow-lg"
                />
                {/* Floating stats cards */}
                <motion.div 
                  className="absolute -top-6 -right-6 bg-white text-neutral-dark p-4 rounded-xl shadow-lg max-w-[180px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h4 className="font-bold text-primary">+45%</h4>
                  <p className="text-sm">Рост удовлетворенности клиентов</p>
                </motion.div>
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-white text-neutral-dark p-4 rounded-xl shadow-lg max-w-[180px]"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h4 className="font-bold text-secondary">-35%</h4>
                  <p className="text-sm">Снижение операционных расходов</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;