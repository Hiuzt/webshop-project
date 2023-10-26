import React, { useState } from "react";
import { Link, Navigate, useHistory, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { GoogleLogin } from "@react-oauth/google";
import AppleLogin from "react-apple-login";
import useAuth from "../../customHooks/useAuth";
import { useDispatch } from "react-redux";
import { SET_LOGIN, SET_USER } from "../../redux/features/authSlice";

const Login = () => {
	const [passwordValue, setPasswordValue] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const responseMessage = (response) => {
		console.log(response);
	};
	const errorMessage = (error) => {
		console.log(error);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		loginUser({ email: emailValue, password: passwordValue }).then(
			function (response) {
				console.log(response);
				const userSource = response?.data?.user;

				dispatch(SET_LOGIN(true));
				dispatch(SET_USER(userSource));

				navigate("/store");
			},
		);
	};

	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<Link
					to="/auth/login"
					className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
				>
					<img
						className="w-8 h-8 mr-2"
						src="https://cdn.icon-icons.com/icons2/2699/PNG/512/huawei_logo_icon_169026.png"
						alt="logo"
					/>
					HUAWEI
				</Link>
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Sign in to your account
						</h1>

						<form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
							<span>
								<label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
									Your email
								</label>
								<input type="email" name="email" id="email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
							</span>
							<div>
								<label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
									Password
								</label>
								<input type="password" name="password" id="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input
											id="remember"
											aria-describedby="remember"
											type="checkbox"
											className="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
											required=""
										/>
									</div>
									<div className="ml-3 text-sm">
										<label for="remember" className="text-gray-500">
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
							<button
								type="submit"
								className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Sign in
							</button>
						</form>

						<div class="relative my-4">
							<div class="absolute inset-0 flex items-center">
								<div class="w-full border-t border-gray-300"></div>
							</div>
							<div class="relative flex justify-center text-sm">
								<span class="px-2 bg-white text-neutral-600">
									{" "}
									Or continue with{" "}
								</span>
							</div>
						</div>
						<div>
							<GoogleLogin
								onSuccess={responseMessage}
								onError={errorMessage}
								useOneTap
								// theme="filled_blue"
								width="385px"
								type="standard"
								logo_alignment="center"
								hint="false"
								locale="english"
							/>
							<br></br>
							<AppleLogin
								render={(
									renderProps, //Custom Apple Sign in Button
								) => (
									<button
										type="button"
										className="w-full text-white bg-black border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center"
									>
										<svg
											className="mr-3 -ml-2"
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="24"
											height="24"
											viewBox="0 0 50 50"
										>
											<path
												fill="#ffffff"
												d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"
											></path>
										</svg>
										Sign in with Apple
									</button>
								)}
							/>
						</div>

						<p className="text-sm font-light text-gray-500 dark:text-gray-400">
							Don’t have an account yet?{" "}
							<Link
								to="/auth/register"
								className="font-medium text-primary-600 hover:underline dark:text-blue-500"
							>
								Sign up
							</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
