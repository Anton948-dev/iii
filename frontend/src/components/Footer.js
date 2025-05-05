import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark relative">
      {/* Pattern background */}
      <div className="absolute inset-0 pattern-bg opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <a href="#" className="text-2xl font-display font-bold flex items-center">
                <span className="gradient-text">AI</span>
                <span className="text-white">Assistant</span>
              </a>
            </div>
            <p className="text-neutral-light/70 mb-6">
              Разработка умных AI ассистентов, Telegram ботов с технологией RAG и решений для автоматизации бизнес-процессов.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-light/60 hover:text-primary transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-neutral-light/60 hover:text-primary transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-neutral-light/60 hover:text-primary transition-colors">
                <FiGithub size={20} />
              </a>
              <a href="#" className="text-neutral-light/60 hover:text-primary transition-colors">
                <FiInstagram size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-light/70 hover:text-primary transition-colors">
                  AI ассистенты
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-light/70 hover:text-primary transition-colors">
                  Telegram боты
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-light/70 hover:text-primary transition-colors">
                  RAG-технология
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-light/70 hover:text-primary transition-colors">
                  Автоматизация процессов
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-light/70 hover:text-primary transition-colors">
                  Разработка кастомных решений
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6">Компания</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-light/70 hover:text-primary transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-light/70 hover:text-primary transition-colors">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-light/70 hover:text-primary transition-colors">
                  Кейсы
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-light/70 hover:text-primary transition-colors">
                  Карьера
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-light/70 hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex">
                <FiMail className="text-primary mt-1 mr-3" />
                <a href="mailto:info@aiassistant.ru" className="text-neutral-light/70 hover:text-primary transition-colors">
                  info@aiassistant.ru
                </a>
              </li>
              <li className="flex">
                <FiPhone className="text-primary mt-1 mr-3" />
                <a href="tel:+7800123456" className="text-neutral-light/70 hover:text-primary transition-colors">
                  +7 (800) 123-45-67
                </a>
              </li>
              <li className="flex">
                <FiMapPin className="text-primary mt-1 mr-3" />
                <span className="text-neutral-light/70">
                  Москва, ул. Технологическая, 42
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          className="pt-8 border-t border-neutral-light/10 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-neutral-light/50 text-sm mb-4 md:mb-0">
            © 2023 AIAssistant. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-light/50 text-sm hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-neutral-light/50 text-sm hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;