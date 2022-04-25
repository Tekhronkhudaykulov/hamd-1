import React, { useEffect, useState } from "react";
import "../../assets/scss/_auth.scss";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import ButtonLoadingComponent from "../../element/Button/ButtonLoadingComponent";
const token = window.localStorage.getItem("@token");

const Auth = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { token, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (token !== null) {
      navigate("/");
      window.location.reload();
    }
  }, [token]);

  const dispatch = useDispatch();
  return (
    <div className="register-container">
      <p className="hamd">HAMD</p>
      <p className="kirish">Kirish</p>
      <div className="input-register">
        <input
          type="text"
          placeholder="Loginni kiring"
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Parolni kiriting"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={() => dispatch(authLogin({ login, password }))}>
          {loading ? <ButtonLoadingComponent /> : "Войти"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
