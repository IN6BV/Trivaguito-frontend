import logo from "../assets/img/fav.png";
import { useRegister } from "../shared/hooks";
import { Input } from "./Input";
import "../pages/auth/authPage.css";
import { useState } from "react";
import {
    emailValidationMessage,
    passwordValidationMessage,
    passwordConfirmationMessage,
    validateEmptyMessage,
    validatePassword,
    validatePasswordConfir,
    validateEmail,
    validateEmpty
} from "../shared/validators"

import './register.css'

export const Register = ({ switchAuthHandler }) => {
  const { register, isLoading } = useRegister();

  const [formState, setFormState] = useState({
    nombre: {
      value: "",
      isValid: false,
      showError: false,
    },
    apellido: {
      value: "",
      isValid: false,
      showError: false,
    },
    foto: {
      value: "",
      isValid: false,
      showError: false,
    },
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
    passwordConfir: {
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
      case "nombre":
        isValid = validateEmpty(value);
        break;
      case "apellido":
        isValid = validateEmpty(value);
        break;
      case "foto":
        isValid = validateEmpty(value);
        break;
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      case "passwordConfir":
        isValid = validatePasswordConfir(formState.password.value, value);
        break;                      
      default:
        break;
    }  

    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };
  
  const handleRegister = (event) => {
    event.preventDefault();
    console.log(formState)
    register(
      formState.nombre.value,
      formState.apellido.value,
      formState.foto.value,
      formState.email.value,
      formState.password.value
    );
  };
  
  const isSubmitButtonDisabled =
    isLoading ||
    !formState.nombre.isValid ||
    !formState.apellido.isValid ||
    !formState.foto.isValid ||
    !formState.email.isValid ||
    !formState.password.isValid ||
    !formState.passwordConfir.isValid;
    
    
  return (
    <div className="body">
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1>Registro</h1>
      <form>
        <Input
          className="button"
          field="nombre"
          label="Nombre"
          value={formState.nombre.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.nombre.showError}
          validationMessage={validateEmptyMessage}          
        />
        <Input
          className="button"
          field="apellido"
          label="Apellido"
          value={formState.apellido.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.apellido.showError}
          validationMessage={validateEmptyMessage}              
        />
        <Input
          className="button"
          field="foto"
          label="Foto"
          value={formState.foto.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.foto.showError}
          validationMessage={validateEmptyMessage}              
        />
        <Input
          className="button"
          field="email"
          label="Email"
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.email.showError}
          validationMessage={emailValidationMessage}          
        />        
        <Input
          field="password"
          label="Password"
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.password.showError}
          validationMessage={passwordValidationMessage}
        />
        <Input
          field="passwordConfir"
          label="Password Confirmation"
          value={formState.passwordConfir.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.passwordConfir.showError}
          validationMessage={passwordConfirmationMessage}
        />
        <button onClick={handleRegister} disabled={isSubmitButtonDisabled}>
          Register
        </button>
      </form>
      <br></br>
      <span className="registro" onClick={switchAuthHandler}>Ya tienes una cuenta? inicia sesion!</span>
    </div>
    </div>
  );
};
