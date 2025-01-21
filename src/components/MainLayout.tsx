import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Navbar from "./Navbar";
import SectionTwo from "./SectionTwo";
import Contact from "./Contact";
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function MainLayout() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      {/* Fixed Navbar */}
      <div className="sticky top-0 z-50 px-4 py-2 bg-transparent backdrop-blur-sm">
        <Navbar />
      </div>

      {/* Main Content */}
      <motion.main
        className="flex flex-col space-y-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <motion.section
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <Header />
        </motion.section>

        {/* Services Section */}
        <motion.section
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <Main />
        </motion.section>

        {/* About Section */}
        <motion.section
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <SectionTwo />
        </motion.section>
        {/* Contact Section */}
        <motion.section
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <Contact />
        </motion.section>
        {/* Footer */}
        <motion.footer
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <Footer />
        </motion.footer>
      </motion.main>
    </div>
  );
}
