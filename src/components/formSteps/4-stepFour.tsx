import { motion } from "framer-motion";
import { useContactFormContext } from "../../contexts/useContactForm";

export function StepFour() {
  const { formState, setFormStep } = useContactFormContext((state) => state);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="z-20"
    >
      <motion.h2 className="mb-6 text-center text-4xl font-thin leading-relaxed text-slate-100">
        Muito obrigado, <span className="font-bold">{formState.name}!</span>
        <br /> Em breve entrarei em contato no email: {formState.email}
      </motion.h2>
      <div className="flex w-full items-center justify-center">
        <button
          onClick={() => setFormStep(0)}
          className="mt-4 text-center text-xl font-thin underline transition-all hover:text-white/70"
        >
          Voltar para o inicio
        </button>
      </div>
    </motion.div>
  );
}
