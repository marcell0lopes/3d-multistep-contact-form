import { motion } from "framer-motion";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useContactFormContext } from "../../contexts/useContactForm";

type StepTwoForm = {
  message: string;
};

export function StepTwo() {
  const [isAdvanceButtonInView, setIsAdvanceButtonInView] = useState(false);
  const { handleSubmit, register, setValue } = useForm<StepTwoForm>();
  const { setForm, formState, setFormStep } = useContactFormContext(
    (state) => state
  );

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;

    if (value.length > 10) {
      setValue("message", value);
      setIsAdvanceButtonInView(true);
    } else {
      setIsAdvanceButtonInView(false);
    }
  }

  function onSubmit(form: StepTwoForm) {
    const { message } = form;
    setForm({ ...formState, message });
    setFormStep(2);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="z-20"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="mb-6 text-2xl font-bold leading-8 text-slate-100">
          <span className="text-4xl">Olá, {formState.name}!</span> <br /> É um
          prazer conhecer você.
        </h3>
        <h4 className="mb-6 text-3xl font-thin leading-8 text-slate-100">
          Me conte um pouco sobre sua ideia?
        </h4>
        <label className="sr-only">Me conte um pouco sobre sua ideia?</label>
        <motion.textarea
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          {...register("message")}
          placeholder="ex: Olá, gostaria de criar um site para minha loja de roupas..."
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
