"use client";

import { motion } from "framer-motion";

const ContactFooter = () => {
  return (
    <footer className="bg-[#1f2d1f] text-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Top content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Want to Hire me?
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-8">
            Feel Free to Contact me
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-lime-200 text-black font-semibold px-6 py-3 text-lg"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/30" />

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-base"
        >
          <span>
            Created By{" "}
            <strong className="font-semibold">
              Muhammad Derry Oktaviandi
            </strong>
          </span>

          <div className="flex gap-6">
            {["Linkedin", "Instagram", "Youtube"].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ y: -2 }}
                className="hover:underline"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default ContactFooter;
