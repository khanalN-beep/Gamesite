import { createContext, useState } from "react";

export const FormContext = createContext(null);

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    channel: "",
  });

  const updateFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
