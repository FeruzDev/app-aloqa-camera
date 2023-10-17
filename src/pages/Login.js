import React, {useEffect, useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";
import {useHistory} from "react-router-dom";
import {API_PATH} from "../components/const";

const Login = () => {
    const [userName, setUserName] = useState([])
    const [pass, setPass] = useState([])
    let history = useHistory()
    const loginFc = () => {

        let newData = new FormData()
        newData.append('username', userName)
        newData.append('password', pass)
        newData.append('scope', "snapshot:read camera:write camera:read admin:read admin:write")
        axios.post(API_PATH + "token/",  newData)
            .then(res =>{
                localStorage.setItem("token", res.data.access_token)
                history.push("/main/visitor-home")
            })
            .catch(err =>{
                toast.error("Ошибка")
            })
    }
    useEffect(()=>{

    }, [])
    return (
        <div className="main-login">
            <div className="login-top-title">
                <p>Добро пожаловать в</p>
                <h2></h2>
            </div>
            <div className="login-box">
                <div className="login-inputs">
                    <h3 >Авторизоваться</h3>
                    <div className="inputs-box">
                        <label  className="font-family-medium" htmlFor="mainLogin">Login</label>
                        <input type="text" id="mainLogin" onChange={(e) => setUserName(e.target.value)} placeholder="Ваш номер телефона или логин"/>
                        <p>Вы можете получить логин в отделе кадров
                            0/0</p>
                    </div>
                    <div className="inputs-box">
                        <label  className="font-family-medium" htmlFor="mainPassword">Пароль </label>
                        <input type="text" id="mainPassword" onChange={(e) => setPass(e.target.value)} placeholder="Ваш пароль"/>
                    </div>
                    <button onClick={loginFc} className="login-btn">Вход</button>
                </div>
            </div>
        </div>
    );
};

export default Login;