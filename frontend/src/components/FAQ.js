import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    question: 'Что такое RAG-технология в AI?',
    answer: 'RAG (Retrieval-Augmented Generation) - это технология, которая позволяет AI-моделям обращаться к внешней базе знаний для генерации ответов. В отличие от обычных AI-моделей, RAG может работать с вашими собственными данными, документами и информацией, делая ответы более точными и релевантными для вашего бизнеса.'
  },
  {
    question: 'Сколько времени занимает разработка и внедрение AI ассистента?',
    answer: 'Сроки разработки зависят от сложности проекта и требуемого функционала. Обычно базовое решение можно запустить в течение 3-4 недель. Более комплексные системы с интеграцией в существующую инфраструктуру могут занять 2-3 месяца. На первой консультации мы сможем дать более точную оценку для вашего конкретного случая.'
  },
  {
    question: 'Как происходит обучение AI на наших данных?',
    answer: 'Процесс включает несколько этапов: подготовка и структурирование ваших данных, их индексация, настройка модели и тестирование. Мы обеспечиваем полную конфиденциальность данных и соблюдаем все требования по защите информации. Ваши данные не используются для обучения других моделей или систем.'
  },
  {
    question: 'Нужно ли нам иметь техническую команду для поддержки AI решения?',
    answer: 'Нет, наши решения не требуют наличия собственной технической команды. Мы предоставляем полный цикл поддержки, включая мониторинг работы системы, обновления и техническое обслуживание. Для использования системы вашими сотрудниками мы проводим обучение и предоставляем подробную документацию.'
  },
  {
    question: 'Как измерить эффективность внедрения AI ассистента?',
    answer: 'Мы помогаем настроить ключевые метрики эффективности (KPI) в зависимости от ваших бизнес-целей. Это может быть время обработки запросов, уровень удовлетворенности клиентов, снижение операционных расходов, количество автоматически решенных вопросов и т.д. Наши решения включают аналитическую панель для мониторинга этих показателей в реальном времени.'
  },
  {
    question: 'Можете ли вы интегрировать AI решение с нашими существующими системами?',
    answer: 'Да, мы специализируемся на интеграции наших AI решений с различными корпоративными системами, включая CRM, ERP, базы данных, мессенджеры и корпоративные порталы. Мы поддерживаем интеграцию через API, веб-хуки и другие методы, обеспечивая бесшовное взаимодействие с вашей существующей инфраструктурой.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark via-neutral-medium/5 to-neutral-dark pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Часто задаваемые <span className="gradient-text">вопросы</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-light/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ответы на популярные вопросы о наших AI решениях
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className={`w-full text-left glass p-6 rounded-xl flex justify-between items-center transition-all ${
                  activeIndex === index ? 'shadow-lg' : ''
                }`}
              >
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <div className={`transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <FiChevronDown className={`text-xl ${activeIndex === index ? 'text-primary' : 'text-neutral-light/70'}`} />
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-4 text-neutral-light/70">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        {/* Additional questions CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-neutral-light/80 mb-4">
            Не нашли ответ на свой вопрос?
          </p>
          <a href="#contact" className="btn btn-outline">
            Задать вопрос
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;