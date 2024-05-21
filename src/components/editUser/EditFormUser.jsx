import { useEffect, useState } from "react";
import { Input } from "../Input";
import { useUserUpdate } from "../../shared/hooks";
import {
  emailValidationMessage,
  validateEmptyMessage,
  validateEmail,
  validateEmpty
} from "../../shared/validators";
import './editFormUser.css'

export const EditFormUser = () => {
  const { userDetails, saveUserDetails, isFetching } = useUserUpdate();
  const [userId, setUserId] = useState([]); // Estado para almacenar el ID del usuario

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.id) {
      setUserId(user.id); // Almacena el ID del usuario en el estado
    }
  }, []);

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
        isValid = validateEmpty(value);
        break;
      case "apellido":
        isValid = validateEmpty(value);
        break;
      case "email":
        isValid = validateEmail(value);
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
    const userData = {
      id: userId, // Agrega el ID del usuario a los datos a enviar
      nombre: formState.nombre.value,
      apellido: formState.apellido.value,
      email: formState.email.value,
    };
    saveUserDetails(userData);
  };

  const isSubmitButtonDisabled =
    isFetching ||
    !formState.nombre.isValid ||
    !formState.apellido.isValid ||
    !formState.email.isValid;

  return (
    <div className="edit-form-container">
      <h2>Edit User</h2>
      <form onSubmit={handleSaveUser}>
        <Input
          field="nombre"
          label="Nombre"
          value={formState.nombre.value}
          onChangeHandler={handleInputValueChange}
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.nombre.showError}
          validationMessage={validateEmptyMessage}
        />
        <Input
          field="apellido"
          label="Apellido"
          value={formState.apellido.value}
          onChangeHandler={handleInputValueChange}
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.apellido.showError}
          validationMessage={validateEmptyMessage}
        />
        <Input
          field="email"
          label="Email"
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.email.showError}
          validationMessage={emailValidationMessage}
        />
        <button type="submit" disabled={isSubmitButtonDisabled}>
          Save
        </button>
      </form>
    </div>
  );
};
