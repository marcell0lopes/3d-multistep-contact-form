export type Form = {
  name: string;
  email: string;
  message: string;
  formStep: number;
};

export type Actions = {
  handleStep: (form: Form) => void;
};
