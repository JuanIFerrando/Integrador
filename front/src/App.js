import Cards from "./components/Cards/Cards.jsx";
import style from "./components/Nav/Nav.module.css";
import Nav from "./components/Nav/Nav.jsx";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from "./Views/About/About.jsx";
import Detail from "./Views/Detail/Detail.jsx";
import Form from "./Views/Form/Form.jsx";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Favorites from "./Views/Favorites/Favorites.jsx";
import { connect, useDispatch } from "react-redux";
import { addChar } from "./redux/actions.js";

function App({chars}) {

   // ! HOOKS
   const [characters, setCharacters] = useState([]);
   const location = useLocation(); // const { pathname } = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   
   // ! CREDENCIALES FALSAS
   const EMAIL = 'terito@gmail.com';
   const PASSWORD = 'mipass123';
   

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else {
         alert("Credenciales Incorrectas");
      }
   }

   // useEffect(() => {
   //    !access && navigate('/');
   // }, [access]);
   


   // ! EVENT HANDLERS
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
          if (data.name && !characters.find((char) => char.id === data.id)) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('¡No hay personajes con este ID!');
          }
        });
   }

   /* const onSearch = (id) => {
      const URL_BASE = "https://be-a-rym.up.railway.app/api";
      const KEY = "";

      fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
        .then(response=>response.json())
        .then(data=>{
           if(data.name && !characters.find((char) => char.id === data.id)) {
              setCharacters((oldChars) => [...oldChars, data]);
              // setCharacters([...characters, data]);
           } else {
              alert('¡No hay personajes con este ID!');
           }
        });
   }; */

   
   // ! AGREGA CARTA RANDOM
   function randomHandler() {
      let haveIt = [];
      // Generar numero random
      let random = (Math.random() * 826).toFixed();
      
      random = Number(random);
      if (!haveIt.includes(random)) {
         haveIt.push(random);
         fetch(`https://rickandmortyapi.com/api/character/${random}`)
         .then(response=>response.json())
         .then(data=>{
            if(data.name && !characters.find((char) => char.id === data.id)) {
               dispatch(addChar(data))
               // setCharacters([...characters, data]);
            } else {
               alert('¡No hay personajes con este ID!');
            }
         });
      } else {
         console.log("ya agregaste todos los personajes");
         return false;
      }
   }
   
   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id));
      // Usamos filter por que no modifica el array original
   };

   // ! RENDER
   return (
      <div className='App'>
           {location.pathname !== '/' && <Nav onSearch={onSearch} random={randomHandler}/>}
         <Routes>
           <Route 
             path="/home" 
             element={<Cards characters={chars} onClose={onClose} />} 
           />

           <Route 
             path="/about" 
             element={<About />}
           />

           <Route 
             path="/detail/:id" 
             element={<Detail />}
           />

           <Route 
             path="/" 
             element={<Form login={login} />}
           />

           <Route 
             path="/favorites" 
             element={<Favorites />}
           />

           {/* <Route 
             path="*" 
             element={<ErrorPage />}
           />  */}
         </Routes>
      </div>
   ); 
}
const mapStateToProps = (state) => {
   return {
      chars: state.allCharacters
   }
}

export default connect(mapStateToProps, null)(App);

