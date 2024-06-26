import logo from "../assets/img/fav.png";
import "../pages/auth/authPage.css";
import { useState } from "react";
import {
  emailValidationMessage,
  passwordValidationMessage,
  validateEmail,
  validatePassword,
} from "../shared/validators";
import { Input } from "./Input";
import { useLogin } from "../shared/hooks/useLogin";

export const Login = ({ switchAuthHandler }) => {
    const {login, isLoading} = useLogin();
  
    const [formState, setFormState] = useState({
      email: {
        value: "",
        isValid: false,
        showError: false,
      },
      password: {
        value: "",
        isValid: false,
        showError: false,
      },
    });
  
    const handleInputValueChange = (value, field) => {
      setFormState((prevState) => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          value,
        },
      }));
    };
  
    const handleInputValidationOnBlur = (value, field) => {
      let isValid = false;
      switch (field) {
        case "email":
          isValid = validateEmail(value);
          break;
        case "password":
          isValid = validatePassword(value);
          break;
        default:
          break;
      }
      setFormState((prevState) =>({
          ...prevState,
          [field]:{
              ...prevState[field],
              isValid,
              showError: !isValid
          }
      }))
    };
  
    const handleLogin = (event) => {
      event.preventDefault()
  
      login(formState.email.value, formState.password.value)
    }
  
    const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.email.isValid
  return (
    <div className="body">
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1>Welcome</h1>
      <form>
        <Input className="button"
          field="email"
          label="Email"
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.email.showError}
          validationMessage={emailValidationMessage}
        />
        <Input className="button"
          field="password"
          label="Password"
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          type="password"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.password.showError}
          validationMessage={passwordValidationMessage}
        />
        <button onClick={handleLogin} disabled={isSubmitButtonDisabled}>
          Log in
        </button>
      </form>
      <div className="link">
        <br></br>
        <span className="registro" onClick={switchAuthHandler}>
          Puedes registrarte aqui
        </span>
      </div>
    </div>
    </div>
  );
};