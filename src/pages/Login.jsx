import React, { useState } from 'react';
import { emailvalidate, passwordvalidate } from '../components/validation.js';
import Emoji from '../assets/login.jpg'
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const baseurl="https://task4-authdb.onrender.com/auth";
const Login = () => {
    const [login, setLogin] = useState({ email: '', password: '' });
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        let newErrors = {};

        // Email
        if (!login.email) {
            newErrors.email = emailvalidate.required;
        } else if (!emailvalidate.pattern.value.test(login.email)) {
            newErrors.email = emailvalidate.pattern.message;
        }

        // Password
        if (!login.password) {
            newErrors.password = passwordvalidate.required;
        } else if (!passwordvalidate.pattern.value.test(login.password)) {
            newErrors.password = passwordvalidate.pattern.message;
        } else if (login.password.length < passwordvalidate.minLength.value) {
            newErrors.password = passwordvalidate.minLength.message;
        }

        setError(newErrors);
        return Object.keys(newErrors).length === 0; // ✅ true if no errors
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Login Data:", login);
            const response = await fetch(`${baseurl}/login`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(login),
            });

    const data = await response.json();
    console.log("Server response:",data);
      if (data.success) {
      Cookies.set("token", data.token,{
        expires:1/1440,
        secure:"true",
        sameSite:"strict",
      });
        navigate("/home");
    }
      
            setLogin({ email: '', password: '' });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[linear-gradient(to_bottom_right,#FFD2A8_0%,#B0D0E0_100%)] px-4 bg-center bg-cover" style={{ backgroundImage: `url(${Emoji})`,opacity:8 }}>
            <div className=" bg-pink-100 w-[80%] h-[75vh] flex flex-col gap-8 max-w-md rounded-3xl justify-center items-center " >
                <div className="text-center text-6xl md:text-[16vh] h-fit text-shadow-2xs leading-[1.8] font-extrabold text-red-600  text-shadow-lg text-shadow-pink-300  ">
                    Login
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-y-[2vh]">
                    {/* Email */}

                    <input
                        type="text"
                        name="email"
                        value={login.email}
                        placeholder="Enter email"
                        onChange={(e) => setLogin({ ...login, email: e.target.value })}
                        className="w-full px-4 py-3 text-center text-pink-600 text-shadow-pink-200 text-shadow-lg/30 border-2 bg-gray-200 rounded-md"
                    />
                    {error.email && <p className="text-red-600 text-sm">{error.email}</p>}

                    {/* Password */}

                    <input
                        type="password"
                        name="password"
                        value={login.password}
                        placeholder="Enter password"
                        onChange={(e) => setLogin({ ...login, password: e.target.value })}
                        className="w-full px-4 py-3 text-center text-pink-600 text-shadow-pink-200 text-shadow-lg/30 border-2 focus:border-pink-500 bg-gray-200 rounded-md"
                    />
                    {error.password && <p className="text-red-600 text-sm">{error.password}</p>}

                    <input
                        type="submit"
                        value="Submit"
                        className="cursor-pointer w-[60%] py-3 rounded-4xl bg-gradient-to-r from-green-600 via-green-400 to-green-400 text-white font-semibold text-lg shadow-md hover:from-green-600 hover:via-green-500 hover:to-green-400 transition transform duration-150 active:scale-95"
                    />
                </form>
            </div>
        </div>
    );
};

export default Login;
