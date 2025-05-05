import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Идеально для малого бизнеса и стартапов',
    monthlyPrice: '45,000 ₽',
    annualPrice: '486,000 ₽',
    features: [
      'Базовый AI ассистент',
      'Telegram бот с базовыми функциями',
      'Интеграция с 1 источником данных',
      'Базовая аналитика использования',
      'Email поддержка',
    ],
    notIncluded: [
      'Продвинутая RAG-технология',
      'Интеграция с CRM системами',
      'Персональный менеджер',
    ],
    featured: false,
    cta: 'Выбрать план'
  },
  {
    name: 'Business',
    description: 'Оптимальное решение для развивающегося бизнеса',
    monthlyPrice: '95,000 ₽',
    annualPrice: '1,026,000 ₽',
    features: [
      'Расширенный AI ассистент',
      'Telegram бот с RAG-технологией',
      'Интеграция с 3 источниками данных',
      'Расширенная аналитика использования',
      'Приоритетная поддержка',
      'Интеграция с CRM системами',
      'Ежемесячные обновления',
    ],
    notIncluded: [
      'Персональный менеджер',
    ],
    featured: true,
    cta: 'Популярный выбор'
  },
  {
    name: 'Enterprise',
    description: 'Комплексное решение для крупных компаний',
    monthlyPrice: 'По запросу',
    annualPrice: 'По запросу',
    features: [
      'Полностью кастомизированное решение',
      'Продвинутая RAG-технология',
      'Неограниченные источники данных',
      'Интеграция со всеми корпоративными системами',
      'Персональный менеджер проекта',
      'Обучение персонала',
      'SLA с гарантированным временем реакции',
      'Ежеквартальный аудит и оптимизация',
    ],
    notIncluded: [],
    featured: false,
    cta: 'Связаться с нами'
  },
];

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="section relative">
      {/* Background with pattern */}
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
            Прозрачное <span className="gradient-text">ценообразование</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-light/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Выберите план, который соответствует потребностям вашего бизнеса
          </motion.p>
          
          {/* Toggle switch */}
          <motion.div 
            className="mt-8 inline-flex items-center p-1 bg-neutral-medium/30 rounded-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              className={`py-2 px-4 rounded-full text-sm transition-all ${
                !annual ? 'bg-primary text-white font-medium' : 'text-neutral-light/70'
              }`}
              onClick={() => setAnnual(false)}
            >
              Ежемесячно
            </button>
            <button
              className={`py-2 px-4 rounded-full text-sm transition-all ${
                annual ? 'bg-primary text-white font-medium' : 'text-neutral-light/70'
              }`}
              onClick={() => setAnnual(true)}
            >
              Ежегодно <span className="text-xs ml-1 text-secondary">-10%</span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`card relative overflow-hidden ${
                plan.featured ? 'ring-2 ring-primary/50 shadow-xl' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                    Популярный
                  </div>
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-neutral-light/70 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <p className="text-sm text-neutral-light/50 uppercase">Стоимость</p>
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">{annual ? plan.annualPrice : plan.monthlyPrice}</span>
                    {plan.monthlyPrice !== 'По запросу' && (
                      <span className="text-neutral-light/70 ml-2 mb-1">
                        / {annual ? 'год' : 'месяц'}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="shrink-0 mt-1">
                        <FiCheck className="text-secondary text-lg" />
                      </div>
                      <p className="ml-3 text-sm">{feature}</p>
                    </div>
                  ))}
                  
                  {plan.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="shrink-0 mt-1">
                        <FiX className="text-neutral-light/40 text-lg" />
                      </div>
                      <p className="ml-3 text-sm text-neutral-light/40">{feature}</p>
                    </div>
                  ))}
                </div>
                
                <motion.a
                  href="#contact"
                  className={`btn w-full ${
                    plan.featured ? 'btn-primary' : 'btn-outline'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enterprise CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-neutral-light/80 mb-4">
            Нужно индивидуальное решение? Свяжитесь с нами для получения персонального предложения.
          </p>
          <a href="#contact" className="text-primary font-medium hover:underline">
            Запросить индивидуальное предложение
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;