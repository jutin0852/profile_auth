import Input from "./input";
import inputCss from "./inputCss.module.css";
import { useValidateForm } from "../hooks/useValidateForm";

export default function MyInputs() {
  const user = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    message: "",
    passWord: "",
  };

  const {
    error,
    validateOnSubmit,
    handleInputChange,
    formData,
    done,
    data,
    handleblur,
  } = useValidateForm(user);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    validateOnSubmit();
  };

  return (
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
        label="Phone number"
        type="text"
        name="phoneNum"
        value={formData.phoneNum}
        onChange={handleInputChange}
        variant={inputCss.defaultInput}
        error={error.phoneNum && inputCss.error}
        someText={error.phoneNum && error.phoneNum}
        onBlur={handleblur}
      />

      <Input
        label="Message"
        type="text"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        variant={inputCss.defaultInput}
        someText="some interesting text"
        placeholder="send a message"
        row="4"
        multiline
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

      <button>Submit</button>
      {done && <p>Hi {data.firstName}, your details have been Submitted</p>}
    </form>
  );
}
