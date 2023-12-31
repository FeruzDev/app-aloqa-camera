import React, {useEffect, useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";
import {useHistory} from "react-router-dom";
import {API_PATH} from "../components/const";

const Login = () => {
    const [userName, setUserName] = useState("")
    const [pass, setPass] = useState("")
    let history = useHistory()
    const loginFc = () => {
        let newData = new FormData()
        newData.append('username', userName)
        newData.append('password', pass)
        newData.append('scope', "snapshot:read camera:write camera:read admin:read admin:write line_crossing_analytics:write module:read module:write fleet:read fleet:write config:read config:write line_crossing_analytics:read line_crossing_analytics:write analitiks:read")
        axios.post(API_PATH + "token", newData)
            .then(res => {
                localStorage.setItem("token", res.data?.access_token)
                localStorage.setItem("first_name", res.data?.user_info?.first_name)
                localStorage.setItem("last_name", res.data?.user_info?.last_name)
                localStorage.setItem("username", res.data?.user_info?.username)
                localStorage.setItem("phone_user", res.data?.user_info?.phone)
                localStorage.setItem("image", res.data?.user_info?.image)

                if (res.data?.user_info?.companies?.length > 0){
                    localStorage.setItem("for_com", res.data?.user_info?.companies[0]?.id)
                    axios.get(API_PATH + "company/" + res.data?.user_info?.companies[0]?.id, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
                        .then(res2 => {
                            // console.log(localStorage.getItem("token"))
                            localStorage.setItem("name", res2?.data?.name)
                            localStorage.setItem("description", res2?.data?.description)
                            localStorage.setItem("phone", res2?.data?.phone)
                            localStorage.setItem("email", res2?.data?.email)
                            localStorage.setItem("id", res2?.data?.id)
                            localStorage.setItem("owner_id", res2?.data?.owner_id)
                            setTimeout(() =>{
                                history.push("/main/visitor-home")
                            }, 100)
                        })
                }
                else if (res.data?.user_info?.companies?.length <= 0) {
                    localStorage.setItem("for_com", res.data?.user_info?.company)
                    axios.get(API_PATH + "company/" + res.data?.user_info?.company, {headers: {"Authorization": "Bearer " + res.data?.access_token}})
                        .then(res2 => {
                            localStorage.setItem("name", res2?.data?.name)
                            localStorage.setItem("description", res2?.data?.description)
                            localStorage.setItem("phone", res2?.data?.phone)
                            localStorage.setItem("email", res2?.data?.email)
                            localStorage.setItem("id", res2?.data?.id)
                            localStorage.setItem("owner_id", res2?.data?.owner_id)
                            setTimeout(() =>{
                                history.push("/main/visitor-home")
                            }, 1000)
                        })
                }
                // axios.get(API_PATH + "user/company/1/user/" + res?.data?.user_id   , {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
                //     .then(res =>{
                //         console.log(res)
                //     })





            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }


    return (
        <div className="main-login">
            <div className="login-top-title">
                <p>Добро пожаловать в</p>
                <h2></h2>
            </div>
            <div className="login-box">
                <div className="login-inputs">
                    <h3>Авторизоваться</h3>
                    <div className="inputs-box">
                        <label className="font-family-medium" htmlFor="mainLogin">Login</label>
                        <input type="text" value={userName} id="mainLogin" onChange={(e) => setUserName(e.target.value)}
                               placeholder="Ваш номер телефона или логин"/>
                        <p>Вы можете получить логин в отделе кадров
                            0/0</p>
                    </div>
                    <div className="inputs-box">
                        <label className="font-family-medium" htmlFor="mainPassword">Пароль </label>
                        <input type="password" value={pass} id="mainPassword" onChange={(e) => setPass(e.target.value)}
                               placeholder="Ваш пароль"/>
                    </div>
                    <button onClick={loginFc} className="login-btn">Вход</button>
                </div>
            </div>
        </div>
    );
};

export default Login;