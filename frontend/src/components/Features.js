import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiBriefcase, FiCpu, FiZap, FiLock, FiBarChart2 } from 'react-icons/fi';

const featuresList = [
  {
    icon: <FiMessageSquare className="text-3xl text-secondary" />,
    title: 'AI ассистенты',
    description: 'Создаем умных ассистентов, которые отвечают на вопросы клиентов и сотрудников в режиме 24/7.'
  },
  {
    icon: <FiBriefcase className="text-3xl text-secondary" />,
    title: 'Telegram боты',
    description: 'Разрабатываем продвинутых Telegram ботов с поддержкой RAG для работы с вашей базой знаний.'
  },
  {
    icon: <FiCpu className="text-3xl text-secondary" />,
    title: 'RAG технология',
    description: 'Retrieval-Augmented Generation позволяет ИИ использовать ваши данные для точных и контекстных ответов.'
  },
  {
    icon: <FiZap className="text-3xl text-secondary" />,
    title: 'Автоматизация',
    description: 'Оптимизируем бизнес-процессы, сокращая время выполнения задач и минимизируя ошибки.'
  },
  {
    icon: <FiLock className="text-3xl text-secondary" />,
    title: 'Безопасность',
    description: 'Обеспечиваем высокий уровень защиты данных и соответствие нормативным требованиям.'
  },
  {
    icon: <FiBarChart2 className="text-3xl text-secondary" />,
    title: 'Аналитика',
    description: 'Получайте ценные инсайты из взаимодействий пользователей с вашими ИИ-системами.'
  }
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="features" className="section relative bg-neutral-dark">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark via-neutral-medium/10 to-neutral-dark pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Наши <span className="gradient-text">услуги</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-light/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Мы предлагаем полный спектр решений для внедрения искусственного интеллекта в ваш бизнес
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuresList.map((feature, index) => (
            <motion.div 
              key={index}
              className="card card-hover"
              variants={itemVariants}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-neutral-light/70 flex-grow">{feature.description}</p>
                <motion.a 
                  href="#contact" 
                  className="inline-flex items-center text-primary mt-4 font-medium"
                  whileHover={{ x: 5 }}
                >
                  Подробнее
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl -z-10"></div>
          <div className="glass p-8 md:p-12 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.h3 
                  className="mb-4 text-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Автоматизация бизнес-процессов с помощью <span className="gradient-text">AI</span>
                </motion.h3>
                <motion.p 
                  className="mb-6 text-neutral-light/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Мы помогаем компаниям внедрять интеллектуальные решения, которые значительно сокращают операционные расходы и повышают эффективность работы.
                </motion.p>
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p>Сокращение времени обработки запросов на 80%</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p>Круглосуточная поддержка клиентов без увеличения штата</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p>Уменьшение количества ошибок в документообороте</p>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643" 
                    alt="Business Process Automation" 
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;