const validation = (userData, setErrors, errors) => {
    
    if(!userData.email) {
        setErrors({...errors, email: "Email vacio"});
    } else {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
            setErrors({...errors, email: ""});
        } else {
            setErrors({...errors, email: "Email invalido"});
        }
    }
    
    if (userData.username && userData.username.length > 35) {
        setErrors({ ...errors, email: "El email no puede tener más de 35 caracteres" });
    } else {
        setErrors({ ...errors, email: "" });
    }
    
    if (!userData.password) {
        setErrors({ ...errors, password: "Contraseña vacía" });
    } else {
        if (!/\d/.test(userData.password)) {
            setErrors({ ...errors, password: "La contraseña debe contener al menos un número" });
        } else {
            if (userData.password.length < 6 || userData.password.length > 10) {
                setErrors({ ...errors, password: "La contraseña debe tener una longitud entre 6 y 10 caracteres" });
            } else {
                setErrors({ ...errors, password: "" });
            }
        }  
    }  


    /*   if(!userData.email) {
          setErrors({...errors, email: "Email vacio"});
      } else {
          if (userData.username.length > 35) {
              setErrors({ ...errors, email: "El email no puede tener más de 35 caracteres" });
          } else {
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
                  setErrors({...errors, email: "Email invalido"});
              } else {
                  setErrors({...errors, email: ""});
              }
          }
      }
  
      if (userData.password.length < 6 || userData.password.length > 10) {
          setErrors({ ...errors, password: "La contraseña debe tener una longitud entre 6 y 10 caracteres" });
      } else {
          if (!/\d/.test(userData.password)) {
              setErrors({ ...errors, password: "La contraseña debe contener al menos un número" });
          } else {
              setErrors({ ...errors, password: "" });
          }
      }
   */
};

export default validation;