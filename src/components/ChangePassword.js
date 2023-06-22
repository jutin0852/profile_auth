import Input from "../Input/input";
import { useValidateForm } from "../hooks/useValidateForm";
import inputCss from "../Input/inputCss.module.css";
import Button from "../button/button";
import buttonCss from "../button/buttonCss.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ChangePassword = ({ profiles }) => {
  const [signUpStatus, setSignUpStatus] = useState("");

  const { id } = useParams();
  const EditUser = profiles.find((profile) => profile.email === id);

  const user = {
    firstName: EditUser.firstName,
    lastName: EditUser.lastName,
    email: EditUser.email,
    passWord: EditUser.passWord,
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

  useEffect(() => {
    if (data) {
      const check = profiles.find((profile) => profile.email === data.email);
      const index = profiles.indexOf(check);

      if (JSON.stringify(data.passWord) === JSON.stringify(EditUser.passWord)) {
        setSignUpStatus("no changes have been made");
      } else {
        profiles[index].passWord = data.passWord;
        profiles[index].lastName = data.lastName;
        setSignUpStatus("profile updated");
      }
    }
  }, [data, profiles, EditUser]);

  return (
    <>
      <h2>Change password</h2>

      <form onSubmit={handleFormSubmit}>
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
          save
        </Button>
      </form>
      <p>{signUpStatus}</p>
      <p>
        <Link to={`/profile/${id}`}>back to profile</Link>
      </p>
    </>
  );
};

export default ChangePassword;
