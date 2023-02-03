import { motion } from "framer-motion";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useContactFormContext } from "../../contexts/useContactForm";

type StepThreeForm = {
  email: string;
};

export function StepThree() {
  const [isAdvanceButtonInView, setIsAdvanceButtonInView] = useState(false);
  const { handleSubmit, register, setValue } = useForm<StepThreeForm>();
  const { setForm, formState, setFormStep } = useContactFormContext(
    (state) => state
  );

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (validateEmail(value)) {
      setValue("email", value);
      setIsAdvanceButtonInView(true);
    } else {
      setIsAdvanceButtonInView(false);
    }
  }

  function onSubmit(form: StepThreeForm) {
    const { email } = form;
    setForm({ ...formState, email });
    setFormStep(3);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="z-20"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="mb-6 text-2xl font-thin leading-8 text-slate-100">
          <span className="text-4xl font-bold">
            Me parece uma ótima ideia, {formState.name}!
          </span>
          <br />
          Agora, para finalizarmos, me passe seu e-mail e assim que possível
          entrarei em contato!
        </h3>
        <label className="sr-only">Qual seu nome?</label>
        <motion.input
          type="email"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          {...register("email")}
          placeholder="marcello@lopes.com.br"
          onChange={(e) => handleChange(e)}
          className="w-full rounded-t-lg border-b bg-slate-900/80 py-8 px-4 text-xl font-thin text-slate-50 placeholder-white/50  focus:outline-none "
        />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-8 flex w-full items-center justify-center gap-2"
        >
          <button
            className="opacity-70 transition-all hover:opacity-100"
            type="button"
            onClick={() => setFormStep(0)}
          >
            <BsFillArrowLeftCircleFill size={36} />
          </button>
          {isAdvanceButtonInView && (
            <>
              <button className="opacity-70 transition-all hover:opacity-100">
                <BsFillArrowRightCircleFill size={36} />
              </button>
            </>
          )}
        </motion.div>
      </form>
    </motion.div>
  );
}
