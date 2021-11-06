
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../login/Titulo.jsx"
import Label from "../login/Label.jsx";
import Input from "../login/Form.jsx";
import Dashboard from '../../pages/DashboardAdmin';
import '../styles/login.css';


const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [hasError, setHasError] = useState(false);

  function handleChange(name, value) {
    if (name === "usuario") {
      setUser(value);
      setHasError(false);
    } else {
      if (value.length < 6) {
        setPasswordError(true);
        setHasError(false);
      } else {
        setPasswordError(false);
        setPassword(value);
        setHasError(false);
      }
    }
  }

  function ifMatch(param) {
    if (param.user.length > 0 && param.password.length > 0) {
      if (param.user === "admin" && param.password === "123456") {
        const { user, password } = param;
        let ac = { user, password };
        let account = JSON.stringify(ac);
        localStorage.setItem("account", account);
        setIsLogin(true);
      } else {
        setIsLogin(false);
        setHasError(true);
      }
    } else {
      setIsLogin(false);
      setHasError(true);
    }
  }

  function handleSubmit() {
    let account = { user, password };
    if (account) {
      ifMatch(account);
      console.log("account:", account);
    }
  }

  return (
    <div className="container">
         {isLogin ? (
        <Dashboard />
      ) : (
        <div
          className="containerP"
          style={{
            marginTop: "72px",
            paddingBottom: "42px",
            paddingTop: "42px",
          }}
        >
          
          <div className="contact-login">
            <Title text="Iniciar sesión" />
            {hasError && (
              <label className="label-alert">
               Error: Verifica tu usuario o Contraseña 
              </label>
            )}
            <Label text="Usuario" />
            <Input
              attribute={{
                id: "usuario",
                name: "usuario",
                type: "text",
              }}
              handleChange={handleChange}
            />
            <br/>
            <Label text="Contraseña" />
            <Input
              attribute={{
                id: "contraseña",
                name: "contraseña",
                type: "password",
              }}
              handleChange={handleChange}
              param={passwordError}
            />
            {passwordError && (
              <label className="label-error">
                La constraseña debe contener mas de 6 digitos
              </label>
            )}
            <div className=" container layout_padding">
              <button className="btn btn-dark" onClick={handleSubmit}  style={{marginRight: "10px"}}>
              Ingresar
              </button>
              <Link
              
              to="Registro"
              style={{marginLeft: "10px"}}
            >
              <button className="btn btn-dark">
             
              Registro </button>
              </Link>
             
            </div>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default Login;
