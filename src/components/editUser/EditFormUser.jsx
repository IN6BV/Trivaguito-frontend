import { useState } from "react";
import { Input } from "../Input";
import { useUserUpdate } from "../../shared/hooks";
import { Navbar } from "../navbar/Navbar";
import {
  emailValidationMessage,
  validateEmptyMessage,
  validateEmail,
  validateEmpty,
} from "../../shared/validators";
import "./editFormUser.css";

export const EditFormUser = () => {
  const { userDetails, saveUserDetails, isFetching } = useUserUpdate();

  const [formState, setFormState] = useState({
    nombre: {
      value: userDetails ? userDetails.nombre : "",
      isValid: true,
      showError: false,
    },
    apellido: {
      value: userDetails ? userDetails.apellido : "",
      isValid: true,
      showError: false,
    },
    foto: {
      value: userDetails ? userDetails.foto : "",
      isValid: true,
      showError: false,
    },
    email: {
      value: userDetails ? userDetails.email : "",
      isValid: true,
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
      case "apellido":
      case "foto":
        isValid = validateEmpty(value); // Validación de campo no vacío
        break;
      case "email":
        isValid = validateEmail(value); // Validación de formato de email
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

  const handleSaveUser = (event) => {
    event.preventDefault();
    const userId = userDetails.id; // Asegúrate de que el id esté disponible en userDetails
    saveUserDetails(userId, {
      nombre: formState.nombre.value,
      apellido: formState.apellido.value,
      foto: formState.foto.value,
      email: formState.email.value,
    });
  };

  const isSubmitButtonDisabled =
    isFetching ||
    !formState.nombre.isValid ||
    !formState.apellido.isValid ||
    !formState.foto.isValid ||
    !formState.email.isValid;

  return (
    <div className="edit-user-body">
      <Navbar />
      <div className="edit-user-container">
        <h2 className="edit-user-title">Edit User</h2>
        <form onSubmit={handleSaveUser}>
          <Input
            field="nombre"
            label="Nombre"
            value={formState.nombre.value}
            onChangeHandler={handleInputValueChange}
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.nombre.showError}
            validationMessage={validateEmptyMessage} 
            className="edit-user-input"
          />
          <Input
            field="apellido"
            label="Apellido"
            value={formState.apellido.value}
            onChangeHandler={handleInputValueChange}
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.apellido.showError}
            validationMessage={validateEmptyMessage} 
            className="edit-user-input"
          />
          <Input
            field="foto"
            label="Foto"
            value={formState.foto.value}
            onChangeHandler={handleInputValueChange}
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.foto.showError}
            validationMessage={validateEmptyMessage} 
            className="edit-user-input"
          />
          <Input
            field="email"
            label="Email"
            value={formState.email.value}
            onChangeHandler={handleInputValueChange}
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.email.showError}
            validationMessage={emailValidationMessage} 
            className="edit-user-input"
          />
          <button
            type="submit"
            disabled={isSubmitButtonDisabled}
            className="edit-user-button"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
