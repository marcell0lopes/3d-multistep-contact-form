import { motion } from "framer-motion";
import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

export const ContactForm = () => {
  const [isAdvanceButtonInView, setIsAdvanceButtonInView] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value.length > 2) {
      setIsAdvanceButtonInView(true);
    } else {
      setIsAdvanceButtonInView(false);
    }
  }

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: isFirstRender ? 1.7 : 0.5, delay: 0.5 }}
      className="z-20"
    >
      <h1 className="mb-6 text-2xl font-bold text-slate-100 ">
        Entre em contato
      </h1>
      <label className="sr-only">Qual o seu nome?</label>
      <input
        type="text"
        placeholder="Qual o seu nome?"
        onChange={(e) => handleChange(e)}
        className="w-full rounded-t-lg border-b bg-slate-900/80 py-8 px-4 text-4xl font-thin text-slate-50 placeholder-white/50  focus:outline-none "
      />

      {isAdvanceButtonInView && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex w-full items-center justify-center"
        >
          <BsFillArrowRightCircleFill size={36} />
        </motion.div>
      )}
    </motion.div>
  );
};
