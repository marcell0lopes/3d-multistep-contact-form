import { AnimatePresence } from "framer-motion";
import { useContactFormContext } from "../contexts/useContactForm";
import { StepOne } from "./formSteps/1-stepOne";
import { StepTwo } from "./formSteps/2-stepTwo";
import { StepThree } from "./formSteps/3-stepThree";
import { StepFour } from "./formSteps/4-stepFour";

export const ContactForm = () => {
  const { formStep } = useContactFormContext();
  const formSteps = [
    <StepOne key="stepOne" />,
    <StepTwo key="stepTwo" />,
    <StepThree key="stepThree" />,
    <StepFour key="stepFour" />,
  ];

  return <AnimatePresence>{formSteps[formStep]}</AnimatePresence>;
};
