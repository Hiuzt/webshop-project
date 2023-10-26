import React, { useEffect, useState } from "react";
import { getUsers } from "../../services/adminService";
import ProfilePicture from "../../files/profile-pic.jpg";
import UserAction from "./components/users/UserAction";
import useAdmin from "../../customHooks/useAdmin";
import AddModal from "./components/users/AddModal";

const Users = () => {
	const [usersTable, setUserTable] = useState([]);
	const { users } = useAdmin();
	const [isAddOpen, setAddOpen] = useState(false)

	return (
		<>
		<div className="relative w-full overflow-x-auto m-5">
			<div className="flex p-4 mb-4 mt-4 text-sm text-red-800 rounded-lg bg-red-100 border border-red-500 dark:bg-gray-800 dark:text-red-400">
				<svg
					className="flex-shrink-0 inline w-5 h-5 mr-3 mt-[0px]"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
				</svg>
				<span className="sr-only">Info</span>
				<div>
					<span className="text-md font-medium">
						After altering a user data, you will not be able to recover it!
					</span>
				</div>
			</div>

			<div className="flex items-center justify-between">
				<button onClick={(e) => setAddOpen(true)} className="bg-blue-600 text-sm text-white py-2 px-7 mb-4 rounded-xl font-medium">
					Add new user
				</button>
				<div className="relative">
					<input
						type="search"
						placeholder="Input a data..."
						className="mb-4 flex-shrink-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-64 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>

					<svg
						className="absolute right-2 top-3.5 h-4 w-4 text-g"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
				</div>
			</div>
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white rounded-lg">
				<thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400 border-b border-b-gray-200">
					<tr>
						<th scope="col" className="px-6 py-3">
							Name
						</th>
						<th scope="col" className="px-6 py-3 text-center">
							Username
						</th>
						<th scope="col" className="px-6 py-3 text-center">
							Activated
						</th>
						<th scope="col" className="px-6 py-3 text-center">
							Role
						</th>
						<th scope="col" className="px-6 py-3 text-right">
							Operation
						</th>
					</tr>
				</thead>
				<tbody className="rounded-b-lg">
					{users?.loadedContext && (
						<>

							{users?.usersTable?.map((userSource, userIndex) => (
								<tr
									key={userIndex}
									className="rounded-b-lg border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
								>
									<td className="px-6 py-4 flex items-center">
										<img
											className="w-11 h-11 rounded-full"
											src={userSource?.profilePicture}
											alt=""
										/>
										<div className="flex flex-col justify-between ml-2">
											<span className="font-bold">{`${userSource?.firstName} ${userSource?.lastName}`}</span>
											<span>{userSource?.email}</span>
										</div>
									</td>
									<td className="px-6 py-4 text-center">{userSource?.username}</td>
									<td className="px-6 py-4 text-center">
										<span
											className={`${!userSource?.verified
												? "bg-red-100 text-red-800 border border-red-200"
												: "bg-green-100 text-green-800 border border-green-300"
												} text-sm font-medium mr-2 px-2.5 py-0.5 rounded-lg`}
										>
											{`${userSource?.verified ? "Verified" : "Not verified"}`}
										</span>
									</td>
									<td className="px-6 py-4 capitalize text-center">
										<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
											{userSource?.role}
										</span>
									</td>
									<td className=" px-6 py-4 text-right relative">
										<UserAction userIndex={userIndex} />
									</td>
								</tr>
							))}
						</>
					)}
				</tbody>
			</table>
		</div>
		
		<AddModal isOpen={isAddOpen} setOpen = {setAddOpen} />
		</>
	);
};

export default Users;
