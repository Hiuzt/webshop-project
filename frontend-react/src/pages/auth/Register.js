import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
	const [signupData, setSignupData] = useState({
		username: "",
		email: "",
		firstName: "",
		lastName: "",
		address: "",
		password: "",
		password_confirm: "",
	});

	const onChange = (e) => {
		const { name, value } = e.target;
		setSignupData({ ...signupData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// reg(signupData);
	};

	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<a
					href="/signup"
					className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
				>
					<img
						className="w-8 h-8 mr-2"
						src="https://cdn.icon-icons.com/icons2/2699/PNG/512/huawei_logo_icon_169026.png"
						alt="logo"
					/>
					HUAWEI
				</a>

				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Register an account
						</h1>

						<form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
							<div>
								<label
									for="username"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Username
								</label>
								<input
									type="text"
									name="username"
									id="username"
									value={signupData.username}
									onChange={onChange}
									placeholder="Your username"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required=""
								/>
							</div>

							<div>
								<label
									for="email"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									value={signupData.email}
									onChange={onChange}
									placeholder="john.doe@mail.com"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required=""
								/>
							</div>

							<div class="grid gap-6 mb-6 md:grid-cols-2">
								<div>
									<label
										forHtml="firstName"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										First name
									</label>
									<input
										type="text"
										name="firstName"
										id="firstName"
										value={signupData.firstName}
										onChange={onChange}
										placeholder="John"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required=""
									/>
								</div>

								<div>
									<label
										forHtml="lastName"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Last name
									</label>
									<input
										type="text"
										name="lastName"
										id="lastName"
										value={signupData.lastName}
										onChange={onChange}
										placeholder="Doe"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required=""
									/>
								</div>
							</div>

							<div class="grid gap-6 mb-6 md:grid-cols-2">
								<div>
									<label
										forHtml="password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										value={signupData.password}
										onChange={onChange}
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required=""
									/>
								</div>

								<div>
									<label
										forHtml="password_confirm"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Confirm password
									</label>
									<input
										type="password"
										name="password_confirm"
										id="password_confirm"
										value={signupData.password_confirm}
										onChange={onChange}
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required=""
									/>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input
											id="remember"
											aria-describedby="remember"
											type="checkbox"
											className="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-800 dark:ring-offset-gray-800"
											required=""
										/>
									</div>
									<div className="ml-3 text-sm">
										<label forHtml="remember" className="text-gray-500">
											I agree to the Terms of Use & Privacy Policy
										</label>
									</div>
								</div>
							</div>
							<button
								type="submit"
								className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Register
							</button>
						</form>

						<p className="text-sm font-light text-gray-500 dark:text-gray-400">
							Already registered?{" "}
							<Link
								to="/auth/login"
								className="font-medium text-primary-600 hover:underline dark:text-blue-500"
							>
								Sign in
							</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
