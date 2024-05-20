import { useState } from "react";

import { useRegisterH } from "../../shared/hooks";

export const RegisterHotel = () => {

    const { registerHotel, isLoading } = useRegisterH();

  const [registerH, setRegisterH] = useState({
    nombreHotel: { value: "", isValid: false, showError: false },
    direccion: { value: "", isValid: false, showError: false },
    categoria: { value: "", isValid: false, showError: false },
    rangoPrecios: { value: "", isValid: false, showError: false },
    comodidades: { value: "", isValid: false, showError: false },
    fotosHotel: { value: "", isValid: false, showError: false },
    usoHotelPorEvento: { value: "", isValid: false, showError: false },
    nombre: { value: "", isValid: false, showError: false },
    descripcion: { value: "", isValid: false, showError: false },
    precio: { value: "", isValid: false, showError: false },
  });

  const handleInputValueChange = (value, field) => {
    setRegisterH((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    // Aquí puedes agregar la validación según tus necesidades
    setRegisterH((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(registerH).forEach((key) => {
      if (key === "fotosHotel") {
        Array.from(registerH[key].value).forEach((file) => {
          formData.append(key, file);
        });
      } else {
        formData.append(key, registerH[key].value);
      }
    });

    await registerHotel(
      registerH.nombreHotel.value,
      registerH.direccion.value,
      registerH.categoria.value,
      registerH.rangoPrecios.value,
      registerH.comodidades.value,
      registerH.fotosHotel.value,
      registerH.usoHotelPorEvento.value,
      registerH.nombre.value,
      registerH.descripcion.value,
      registerH.precio.value
    );
  };
  
  return (
    <div className="form-container">
      <h1>Registra tu Hotel</h1>
      <form className="registerH-form-Container">
        <div className="form-group">
          <label className="form-label" htmlFor="nombreHotel">
            Nombre del hotel:
          </label>
          <input
            className="form-input"
            type="text"
            id="nombreHotel"
            name="nombreHotel"
            value={registerH.nombreHotel.value}
            onChange={(e) =>
              handleInputValueChange(e.target.value, "nombreHotel")
            }
            onBlur={(e) =>
              handleInputValidationOnBlur(e.target.value, "nombreHotel")
            }
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="direccion">
            Dirección:
          </label>
          <input
            className="form-input"
            type="text"
            id="direccion"
            name="direccion"
            value={registerH.direccion.value}
            onChange={(e) =>
              handleInputValueChange(e.target.value, "direccion")
            }
            onBlur={(e) =>
              handleInputValidationOnBlur(e.target.value, "direccion")
            }
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="categoria">
            Categoría:
          </label>
          <input
            className="form-input"
            type="text"
            id="categoria"
            name="categoria"
            value={registerH.categoria.value}
            onChange={(e) =>
              handleInputValueChange(e.target.value, "categoria")
            }
            onBlur={(e) =>
              handleInputValidationOnBlur(e.target.value, "categoria")
            }
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="rangoPrecios">
            Rango de precios:
          </label>
          <input
            className="form-input"
            type="text"
            id="rangoPrecios"
            name="rangoPrecios"
            value={registerH.rangoPrecios.value}
            onChange={(e) =>
              handleInputValueChange(e.target.value, "rangoPrecios")
            }
            onBlur={(e) =>
              handleInputValidationOnBlur(e.target.value, "rangoPrecios")
            }
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="comodidades">
            Comodidades:
          </label>
          <input
            className="form-input"
            type="text"
            id="comodidades"
            name="comodidades"
            value={registerH.comodidades.value}
            onChange={(e) =>
              handleInputValueChange(e.target.value, "comodidades")
            }
            onBlur={(e) =>
              handleInputValidationOnBlur(e.target.value, "comodidades")
            }
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="fotosHotel">
            Fotos del hotel:
          </label>
          <input
            className="form-input"
            type="file"
            id="fotosHotel"
            multiple
            onChange={(e) =>
              handleInputValueChange(e.target.files, "fotosHotel")
            }
            onBlur={(e) =>
              handleInputValidationOnBlur(e.target.files, "fotosHotel")
            }
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="usoHotelPorEvento">
            Uso del hotel por evento:
          </label>
          <input
            className="form-input"
            type="text"
            id="usoHotelPorEvento"
            name="usoHotelPorEvento"
            value={registerH.usoHotelPorEvento.value}
            onChange={(e) =>
              handleInputValueChange(e.target.value, "usoHotelPorEvento")
            }
            onBlur={(e) =>
              handleInputValidationOnBlur(e.target.value, "usoHotelPorEvento")
            }
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="nombre">
            Nombre (responsable):
          </label>
          <input
            className="form-input"
            type="text"
            id="nombre"
            name="nombre"
            value={registerH.nombre.value}
            onChange={(e) => handleInputValueChange(e.target.value, "nombre")}
            onBlur={(e) =>
              handleInputValidationOnBlur(e.target.value, "nombre")
            }
          />
        </div>
        <div className="form-group" style={{ gridColumn: "span 2" }}>
          <label className="form-label" htmlFor="descripcion">
            Descripción:
          </label>
          <textarea
            className="form-input"
            id="descripcion"
            name="descripcion"
            value={registerH.descripcion.value}
            onChange={(e) =>
              handleInputValueChange(e.target.value, "descripcion")
            }
            onBlur={(e) =>
              handleInputValidationOnBlur(e.target.value, "descripcion")
            }
          ></textarea>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="precio">
            Precio:
          </label>
          <input
            className="form-input"
            type="text"
            id="precio"
            name="precio"
            value={registerH.precio.value}
            onChange={(e) => handleInputValueChange(e.target.value, "precio")}
            onBlur={(e) =>
              handleInputValidationOnBlur(e.target.value, "precio")
            }
          />
        </div>
        <button type="submit" disabled={isLoading} onClick={handleSubmit}>Registrar Hotel</button>
      </form>
    </div>
  );
};
