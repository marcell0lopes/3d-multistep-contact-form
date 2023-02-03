import type { ChangeEvent } from "react";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useContactFormContext } from "../../contexts/useContactForm";

type StepOneForm = {
  name: string;
};

export function StepOne() {
  const [isAdvanceButtonInView, setIsAdvanceButtonInView] = useState(false);
  const { handleSubmit, register, setValue } = useForm<StepOneForm>();

  const { formState, setForm, setFormStep } = useContactFormContext(
    (state) => state
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value.length > 2) {
      setValue("name", value);
      setIsAdvanceButtonInView(true);
    } else {
      setIsAdvanceButtonInView(false);
    }
  }

  function onSubmit(form: StepOneForm) {
    const { name } = form;

    setForm({ ...formState, name });
    setFormStep(1);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="z-20"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="mb-6 text-2xl font-bold text-slate-100 ">
          Entre em contato
        </h1>
        <label className="sr-only">Qual seu nome?</label>

        <input
          {...register("name")}
          type="text"
          placeholder="Qual seu nome?"
          onChange={(e) => handleChange(e)}
          className="w-full rounded-t-lg border-b bg-slate-900/80 py-8 px-4 text-4xl font-thin text-slate-50 placeholder-white/50  focus:outline-none "
        />

        {isAdvanceButtonInView && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex w-full items-center justify-center"
          >
            <button type="submit">
              <BsFillArrowRightCircleFill size={36} />
            </button>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}
