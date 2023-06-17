import { useCallback, useState } from "react";
import { useEffect } from "react";

export const useValidateForm = (user) => {
  const [formData, setFormData] = useState(user);
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [done, setIsDone] = useState(false);
  const [data, setData] = useState("");

  const validate = useCallback(
    (x, errors) => {
      const emailRegex = /\S+@\S+\.\S+/;
      const passWordRegex = {
        containNum: /^(?=.*\d).+$/,
        containSpecialChar: /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/,
      };
      if (x === "userName") {
        if (!formData[x]) {
          errors.userName = "fill blank field";
        }
      }

      //validation for first name
      if (x === "firstName") {
        if (!formData[x]) {
          errors.firstName = "fill blank field";
        }
      }
      // //validation for last name

      if (x === "lastName") {
        if (!formData[x]) {
          errors.lastName = "fill blank field";
        }
      }
      // //validation for email

      if (x === "email") {
        if (!formData[x]) {
          errors.email = "fill blank field";
        } else if (!emailRegex.test(formData[x])) {
          errors.email = "Invalid Email";
        }
      }
      // //validation for phone number

      if (x === "phoneNum") {
        if (!formData[x]) {
          errors.phoneNum = "fill blank field";
        } else if (isNaN(formData[x])) {
          errors.phoneNum = "invalid Number";
        } else if (formData[x].length > 14) {
          errors.phoneNum = "Number greater than 11";
        }
      }
      if (x === "passWord") {
        if (!formData[x]) {
          errors.passWord = "fill blank field";
        } else if (formData[x].length < 8) {
          errors.passWord = "must be at least 8 characters";
        } else if (!passWordRegex.containNum.test(formData[x])) {
          errors.passWord = "must contain atleast one number";
        } else if (!passWordRegex.containSpecialChar.test(formData[x])) {
          errors.passWord = "must contain atleast one special character";
        }
      }
    },
    [formData]
  );

  const handleValidate = useCallback(
    (e, key) => {
      let errors = {};

      //validation for when the user leaves an input (onblur)

      for (let x in formData) {
        if (key) {
          if (x === key) {
            validate(x, errors);
          }
        }
        //validation for when the input changes or form is submitted
        else {
          validate(x, errors);
        }
      }
      return errors;
    },
    [formData, validate]
  );

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setIsDone(false);
  };

  const handleblur = (e) => {
    if (e.relatedTarget && e.relatedTarget.type === "submit") {
      return;
    } else {
      if (isSubmit === false) {
        const key = e.target.name;
        let validateError = handleValidate(e, key);
        setError(validateError);
      }
    }
  };

  const validateOnSubmit = (e) => {
    let validateError = handleValidate();
    setError(validateError);
    setIsSubmit(true);
    setIsDone(false);

    if (Object.keys(validateError).length === 0) {
      setData(formData);
      setIsDone(true);
      setIsSubmit(false);
    }
  };

  const clearForm = () => {
    setFormData(user);
  };

  useEffect(() => {
    if (isSubmit && Object.values(formData).some((value) => value.length > 0)) {
      let validateError = handleValidate();
      setError(validateError);
    }
  }, [isSubmit, formData, handleValidate]);

  return {
    error,
    validateOnSubmit,
    handleInputChange,
    formData,
    clearForm,
    done,
    data,
    handleblur,
  };
};
