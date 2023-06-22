import Input from "../Input/input";
import { useValidateForm } from "../hooks/useValidateForm";
import inputCss from "../Input/inputCss.module.css";
import Button from "../button/button";
import buttonCss from "../button/buttonCss.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditProfile = ({ profiles }) => {
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

      if (JSON.stringify(data) === JSON.stringify(EditUser)) {
        setSignUpStatus("no changes have been made");
      } else {
        profiles[index].firstName = data.firstName;
        profiles[index].lastName = data.lastName;
        setSignUpStatus("profile updated");
      }
    }
  }, [data, profiles, EditUser]);

  return (
    <>
      <h2>Edit Profile</h2>

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
          value={EditUser.email}
          onChange={handleInputChange}
          variant={inputCss.defaultInput}
          error={error.email && inputCss.error}
          someText={error.email && error.email}
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

export default EditProfile;
