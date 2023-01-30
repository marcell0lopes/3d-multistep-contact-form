import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const ContactForm = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: isFirstRender ? 1.7 : 0.5, delay: 0.5 }}
      className="z-20"
    >
      <h1 className="mb-6 text-2xl font-bold text-slate-100 ">
        Entre em contato
      </h1>
      <input
        type="text"
        placeholder="Qual o seu nome?"
        className="w-full rounded-t-lg border-b bg-black/25 py-8 px-4 text-4xl font-thin text-slate-50 placeholder-white/50  focus:outline-none "
      />
    </motion.div>
  );
};
