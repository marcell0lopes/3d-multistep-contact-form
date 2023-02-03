import { create } from "zustand";
import type { Form } from "../@types";

type ContactFormContext = {
  formState: Form;
  formStep: number;
  setFormStep: (step: number) => void;

  setForm: (form: Form) => void;
};

export const useContactFormContext = create<ContactFormContext>((set) => ({
  formState: {} as Form,
  formStep: 0,
  setFormStep: (step) => set(() => ({ formStep: step })),
  setForm: (form) => set({ formState: form }),
}));
