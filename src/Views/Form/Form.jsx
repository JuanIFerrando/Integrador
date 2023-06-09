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
        <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="email">EMAIL:</label>
              <input 
                className={erorrs.email ? style.error : style.success}
                type="text" 
                name="email" 
                value={userData.email} 
                onChange={handleChange}
              />
              <span>{erorrs.email}</span>
            </div>

            <div>
              <label htmlFor="password">PASSWORD:</label>
              <input
                className={erorrs.password ? style.error : style.success}
                type="text" 
                name="password" 
                value={userData.password}
                onChange={handleChange}
              />
              <span>{erorrs.password}</span>
            </div>

            <button type="submit">Login</button>
          
        </form>
    );
}