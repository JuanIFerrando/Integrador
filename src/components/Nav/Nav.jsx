import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav({onSearch, random}) {
    return (
        <div className={style.nav}>
          <Link className={style.linkContainer} to="/home">
            <label className={style.linkText}>
              HOME    
            </label>
          </Link>

          <Link className={style.linkContainer} to="/about">
            <label className={style.linkText}>
              ABOUT  
            </label>
          </Link>  

          <Link className={style.linkContainer} to="/favorites">
            <label className={style.linkText}>
              FAVORITES  
            </label>
          </Link>  

            <SearchBar onSearch={onSearch} />
            <button className="random" onClick={random}>
                ADD RANDOM
            </button>
        </div>
    );
}; 

