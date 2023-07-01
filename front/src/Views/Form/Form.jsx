import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css";

export default function Form({login}) {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [erorrs, setErrors] = useState({
        email: "",
        password: "",
    });


    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

       /*  if (event.target.name === "email") {
            setUserData({...userData, email: event.target.value});
        } */

        setUserData({...userData, [property]: value}); // Cambio form...

        validation({...userData, [property]: value}, setErrors, erorrs); // Valida form...
    };

    const submitHandler = (event) => {
        event.preventDefault();
        login(userData);
    };

    return (
        <div className={style.container}>
          <form className={style.form} onSubmit={submitHandler}>
              <h1 className={style.formTitle}>Login</h1>
                <input 
                  className={erorrs.email ? style.error : style.success}
                  placeholder="Email"
                  type="email" 
                  name="email" 
                  value={userData.email} 
                  onChange={handleChange}
                />
                <span>{erorrs.email}</span>
                <input
                  className={erorrs.password ? style.error : style.success}
                  placeholder="Password"
                  type="password" 
                  name="password" 
                  value={userData.password}
                  onChange={handleChange}
                />
                <span>{erorrs.password}</span>

              <button className={style.submit} type="submit">Sign in</button>
            
          </form>
        </div>
    );
}