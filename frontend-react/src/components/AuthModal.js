import { GoogleLogin } from '@react-oauth/google'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { SET_LOGIN, SET_USER } from '../redux/features/authSlice'
import { loginUser } from '../services/authService'
import { toast } from 'react-toastify'

const AuthModal = (props) => {
    const dispatch = useDispatch();

    const [isInLoginForm, setLoginForm] = useState(true)

    const [loginValue, setLoginValue] = useState({
        emailValue: "",
        passwordValue: ""
    });

    const handleChange = (e, inputType) => {
        if (inputType === "login") {
            setLoginValue({
                ...loginValue,
                [e.target.name]: e.target.value,
            })
        } else {

        }
    }

    const loginHandler = (e) => {
        e.preventDefault();

        loginUser(loginValue).then(
			function (response) {
				const userSource = response?.data?.user;

				dispatch(SET_LOGIN(true));
				dispatch(SET_USER(userSource));

				props.showOpen();
                toast.success("Login successfully")
			},
		);
    }

    return (
        <div onClick={(e) => props.showOpen(false)} className={`flex items-center transition-all duration-300 justify-center fixed left-0 top-0 w-screen h-screen  ${props.isOpen ? "z-50 lg:z-10 scale-100 bg-black/30 backdrop-blur-sm": "scale-0"}`}>
            <div className={`scale-0 ${props.isOpen ? "scale-100": ""} w-full lg:h-[530px] lg:w-[400px] h-full transition-all duration-300 bg-white relative p-5 lg:rounded-xl overflow-hidden`} onClick={(e) => {e.stopPropagation()}}>
                <div className="mb-5">
                    <svg className="ml-auto fill-gray-700" onClick={() => props.showOpen()}  xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                
                </div>
                <div className="border rounded-xl py-2 relative">
                    <div className={`absolute bg-blue-600 w-1/2 h-full top-0 border-xl transition-all duration-400 rounded-xl ${isInLoginForm ? "left-0 " : "left-1/2"}`}></div>
                    <button onClick={() => setLoginForm(true)} className={` relative cursor-pointer z-10 w-1/2 lg:w-auto px-16 font-medium transition-all duration-400 text-black ${isInLoginForm && "text-white"}`}>Login</button>
                    <button onClick={() => setLoginForm(false)} className={`relative cursor-pointer z-10 w-1/2 lg:w-auto px-16 font-medium transition-all duration-400 text-black ${!isInLoginForm && "text-white"}`}>Register</button>
                </div>
                <form className={`flex flex-col lg:gap-9 gap-10  mt-10 w-full p-5 absolute transition-all duration-300 ${isInLoginForm ? "-left-full" : "left-0"}`}>
                    <div className="relative">
                        <input className="bg-inherit outline-none border-b peer w-full" type="email" id="email" required></input>
                        <label className="absolute left-0 -top-0 peer-focus:text-gray-700 peer-valid:text-gray-700 text-gray-400 peer-focus:-top-6  transition-all duration-300 peer-valid:-top-6" htmlFor="email">Email</label>
                        <div className="absolute bg-blue-600 w-full h-[2px] peer-focus:scale-x-100  scale-x-0 transition-all duration-300"></div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="relative">
                            <input className="bg-inherit outline-none border-b w-full peer" type="text" id="firstname" required></input>
                            <label className="absolute left-0 -top-0 peer-focus:-top-6 peer-focus:text-gray-700 peer-valid:text-gray-700 text-gray-400 transition-all duration-300 peer-valid:-top-6" htmlFor="firstname">First name</label>
                            <div className="bg-blue-600 w-full h-[2px] peer-focus:scale-x-100  scale-x-0 transition-all duration-300"></div>
                        </div>
                        <div className="relative">
                            <input className="bg-inherit outline-none border-b w-full peer" type="text" id="lastname" required></input>
                            <label className="absolute left-0 -top-0 peer-focus:-top-6 peer-focus:text-gray-700 peer-valid:text-gray-700 text-gray-400 transition-all duration-300 peer-valid:-top-6" htmlFor="lastname">Last name</label>
                            <div className="bg-blue-600 w-full h-[2px] peer-focus:scale-x-100  scale-x-0 transition-all duration-300"></div>
                        </div>
                    </div>
                    <div className="relative">
                        <input className="bg-inherit outline-none border-b w-full peer" type="password" id="regPassword" autoComplete='on' required></input>
                        <label className="absolute left-0 -top-0 peer-focus:-top-6 peer-focus:text-gray-700 peer-valid:text-gray-700 text-gray-400 transition-all duration-300 peer-valid:-top-6" htmlFor="regPassword">Password</label>
                        <div className="bg-blue-600 w-full h-[2px] peer-focus:scale-x-100  scale-x-0 transition-all duration-300"></div>
                    </div>
                    <div className="relative">
                        <input className="bg-inherit outline-none border-b w-full peer" type="password" id="regPasswordConfirm" autoComplete='on' required></input>
                        <label className="absolute left-0 -top-0 peer-focus:-top-6 peer-focus:text-gray-700 peer-valid:text-gray-700 text-gray-400 transition-all duration-300 peer-valid:-top-6" htmlFor="regPasswordConfirm">Password confirm</label>
                        <div className="bg-blue-600 w-full h-[2px] peer-focus:scale-x-100  scale-x-0 transition-all duration-300"></div>
                    </div>
                    <div className="flex items-center">
                            <input
                                id="accept"
                                aria-describedby="accept"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                required=""
                            />
                            <div className="ml-1 text-sm">
                                <label htmlFor="accept" className="text-gray-500">
                                    I have read and accept the user agreement.
                                </label>
                            </div>
                        </div>
                    <div>
                        <input type="submit" value="Sign up" className="rounded-3xl w-full bg-blue-600 py-2 text-white font-bold hover:bg-blue-700 text-center cursor-pointer"></input>
                    </div>
                </form>
                <form onSubmit={(e) => loginHandler(e)} className={`flex flex-col space-y-4 md:space-y-6 mt-10 transition-all relative duration-300 ${isInLoginForm ? "left-0" : "left-full ml-10"}`}>
                    <div className="flex space-between justify-center gap-5">
                        <div className="rounded-full bg-orange-700 flex items-center justify-center p-3 mt-5 fill-white">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                        </div>
                        
                        <div className="rounded-full bg-blue-700 flex items-center justify-center p-3 mt-5 fill-white">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                        </div>
                        <div className="rounded-full bg-blue-400 flex items-center justify-center p-3 mt-5 fill-white">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                        </div>
                    </div>

                    <div className="flex flex-col gap-10 pt-12">

                    
                        <div className="relative">
                            <input name="email" onChange={(e) => handleChange(e, "login")} value={loginValue["email"]}  className="bg-inherit outline-none border-b peer w-full" type="text" id="username" required></input>
                            <label className="absolute left-0 -top-0 peer-focus:text-gray-700 peer-valid:text-gray-700 text-gray-400 peer-focus:-top-6  transition-all duration-300 peer-valid:-top-6" htmlFor="username">Username</label>
                            <div className="absolute bg-blue-600 w-full h-[2px] peer-focus:scale-x-100  scale-x-0 transition-all duration-300"></div>
                        </div>
                        <div className="relative">
                            <input name="password" onChange={(e) => handleChange(e, "login")} value={loginValue["password"]} className="bg-inherit outline-none border-b w-full peer" type="password" id="password" autoComplete='on' required></input>
                            <label className="absolute left-0 -top-0 peer-focus:-top-6 peer-focus:text-gray-700 peer-valid:text-gray-700 text-gray-400 transition-all duration-300 peer-valid:-top-6" htmlFor="password">Password</label>
                            <div className="bg-blue-600 w-full h-[2px] peer-focus:scale-x-100  scale-x-0 transition-all duration-300"></div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember"
                                    aria-describedby="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                    required=""
                                />
                                <div className="ml-1 text-sm">
                                    <label htmlFor="remember" className="text-gray-500">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <Link
                                to="/auth/forgotPassword"
                                className="text-sm font-medium text-primary-600 hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <div>
                            <input type="submit" value="Sign in" className="w-full rounded-3xl bg-blue-600 py-2 text-white font-bold hover:bg-blue-700 text-center cursor-pointer"></input>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default AuthModal