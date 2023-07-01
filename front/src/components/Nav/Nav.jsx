import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav({onSearch, random}) {
    return (
        <div className={style.nav}>
          <div className={style.containerLinks}>
          <Link className={style.linkContainer} to="/home">
            <label className={style.linkText}>
              Home    
            </label>
          </Link>

          <Link className={style.linkContainer} to="/about">
            <label className={style.linkText}>
              About  
            </label>
          </Link>  

          <Link className={style.linkContainer} to="/favorites">
            <label className={style.linkText}>
              Favorites  
            </label>
          </Link>  
          </div>

            <SearchBar onSearch={onSearch} />
            <button className={style.addButton} onClick={random}>
                Add Random
            </button>
        </div>
    );
};
