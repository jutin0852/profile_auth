import Input from "../Input/input";
import { useValidateForm } from "../hooks/useValidateForm";
import inputCss from "../Input/inputCss.module.css";
import Button from "../button/button";
import buttonCss from "../button/buttonCss.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = ({ profiles }) => {
  const [signUpStatus, setSignUpStatus] = useState("");

  const user = {
    firstName: "",
    lastName: "",
    email: "",
    passWord: "",
  };

  const {
    error,
    validateOnSubmit,
    handleInputChange,
    formData,
    handleblur,
    data,
  } = useValidateForm(user);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    validateOnSubmit();
    console.log(profiles)
  };

  useEffect(() => {
    if (data) {
      const check = profiles.find((profile) => profile.email === data.email);
      if (check) {
        setSignUpStatus("Email already in use");
      } else {
        profiles.push(data);
        setSignUpStatus("Sign up successful");
      }
    }
  },[data,profiles]);

  return (
    <>
      <h2>Sign up</h2>

      <form onSubmit={handleFormSubmit}>
        <Input
          label="first name"
          type="text"
          value={formData.firstName}
          onChange={handleInputChange}
          name="firstName"
          variant={inputCss.defaultInput}
          error={error.firstName && inputCss.error}
          someText={error.firstName && error.firstName}
          onBlur={handleblur}
        />

        <Input
          label="last name"
          type="text"
          value={formData.lastName}
          onChange={handleInputChange}
          name="lastName"
          variant={inputCss.defaultInput}
          error={error.lastName && inputCss.error}
          someText={error.lastName && error.lastName}
          onBlur={handleblur}
        />

        <Input
          label="Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          variant={inputCss.defaultInput}
          error={error.email && inputCss.error}
          someText={error.email && error.email}
          onBlur={handleblur}
        />

        <Input
          label="Password"
          type="password"
          name="passWord"
          value={formData.passWord}
          onChange={handleInputChange}
          variant={inputCss.defaultInput}
          someText={error.passWord && error.passWord}
          error={error.passWord && inputCss.error}
          onBlur={handleblur}
        />
        <Button
          variant={buttonCss.default}
          color={buttonCss.primary}
          size={buttonCss.sm}
        >
          Sign up
        </Button>
      </form>
      <p>{signUpStatus}</p>
      <p>{signUpStatus === "Sign up successful" && <Link to='/signIn'>Sign in</Link>}</p>
    </>
  );
};

export default SignUpPage;
