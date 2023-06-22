import Input from "../Input/input";
import { useValidateForm } from "../hooks/useValidateForm";
import inputCss from "../Input/inputCss.module.css";
import Button from "../button/button";
import buttonCss from "../button/buttonCss.module.css";
import { Navigate } from "react-router-dom";

const SignInPage = ({ profiles }) => {
  const user = {
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
  };

  let status = "";

  if (data) {
    const emailAuth = profiles.find((profile) => profile.email === data.email);
    const passWordAuth = profiles.find(
      (profile) => profile.passWord === data.passWord
    );

    if (emailAuth && passWordAuth) {
      return <Navigate to={`/profile/${emailAuth.email}`} replace={true} />;
    } else if (emailAuth && !passWordAuth) {
      status = "incorrect password";
    } else {
      console.log("Email not registered");

      status = "Email not registered";
    }
  }

  return (
    <>
      <h2>Sign in </h2>

      <form onSubmit={handleFormSubmit}>
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
          type="submit"
        >
          Sign in
        </Button>
      </form>
      <p>{status}</p>
    </>
  );
};

export default SignInPage;
