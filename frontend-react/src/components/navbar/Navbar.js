import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOGIN, SET_USER, getCurrentUser, getLoginStatus } from "../../redux/features/authSlice";
import NavbarCategories from "./NavbarCategories";
import AuthModal from "../AuthModal";
import MobileNavbar from "./MobileNavbar";
import { logoutUser } from "../../services/authService";

const Navbar = () => {
    const [showProfile, setShowProfile] = useState(false);
    const [showAuthPanel, setAuthPanel] = useState(false)
    const dispatch = useDispatch();

   

    const isLoggedIn = useSelector(getLoginStatus);
    const userSource = useSelector(getCurrentUser);
    const [isMenuSticky, setMenuSticky] = useState(false)
    const [showCategories, setShowCategories] = useState(false)


    const categoriesAction = () => {
        setShowCategories(!showCategories)

        if (showCategories) {
            document.body.classList.remove("overflow-hidden")

        } else {
            document.body.classList.add("overflow-hidden")
        }
    }

    const handleMenuClick = () => {
        if (isLoggedIn) {
            setShowProfile(!setShowProfile)
        } else {
            setAuthPanel(!showAuthPanel)
            if (showAuthPanel) {
                document.body.classList.remove("overflow-hidden")

            } else {
                document.body.classList.add("overflow-hidden")
            }
        }
    }

    const signOut = () => {
        logoutUser().then(function(response) {
            dispatch(SET_LOGIN(false))
            dispatch(SET_USER({}))
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if (window.scrollY > 300) {
                setMenuSticky(true)
            } else if (window.scrollY < 100) {
                setMenuSticky(false)
            }
        })
    }, [])


    return (
        <div>
            <div className={`mx-auto mb-2 z-30  ${isMenuSticky && "z-20 -top-28 fixed mt-0 translate-y-28 transition-all duration-300 bg-white"}`}>
                <div className="relative mx-3 xl:mx-auto xl:max-w-[1244px]">


                    <nav className={`relative flex items-center justify-between text-md font-medium text-gray-800 bg-white py-2`}>
                        <div className="flex items-center w-full md:w-auto justify-between">
                            <>
                                <button className={`w-10 h-10 ${isMenuSticky ? "block" : "block md:hidden"}`} onClick={(e) => categoriesAction()}>
                                    <div className={`w-6 h-[3px] rounded-lg bg-blue-600 relative transition-all duration-500
                                    after:content-['']  after:w-6 after:h-[3px] after:rounded-lg after:absolute after:left-0  after:bg-blue-600  after:transition-all after:duration-500 
                                    before:content-[''] before:w-6 before:h-[3px] before:rounded-lg before:absolute before:left-0  before:bg-blue-600  before:transition-all before:duration-500 
                                    ${showCategories ? "after:rotate-[-135deg] before:rotate-[135deg] bg-opacity-0 after:-translate-y-0 before:translate-y-0 " : "after:rotate-[0deg] after:translate-y-2 before:-translate-y-2"}                 
                                    `}
                                    ></div>
                                </button>
                            </>


                            <Link href="/" className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" className="fill-blue-600" viewBox="0 0 512 512"><path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" /></svg>
                                <p className="font-black text-blue-600">DEM YAPI</p>
                            </Link>

                        </div>


                        <div className="border max-w-[340px] lg:max-w-[440px] hidden md:flex bg-gray-100 items-center rounded ml-auto">
                            <input type="text" className="text-sm font-medium text-gray-500 bg-inherit outline-none h-10 mx-4 w-96" />
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" className="mr-2 fill-gray-600" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                        </div>

                        <div className="gap-3 ml-auto py-2.5 hidden md:flex">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" className="block sm:hidden fill-blue-600" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>

                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" className="fill-blue-600 hover:fill-blue-700 cursor-pointer" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" className="fill-blue-600 hover:fill-blue-700 cursor-pointer" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                onClick={(e) => handleMenuClick()}
                                className="fill-blue-600 hover:fill-blue-700 cursor-pointer" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>

                        </div>
                    </nav>
                    {isMenuSticky && (
                        <NavbarCategories showCategories={showCategories} setShowCategories={() => categoriesAction()} isFixed={true} />
                    )}
                </div>

                <div className={`z-10 w-screen bg-blue-600 ${isMenuSticky && "h-1"}`}>

                    {!isMenuSticky && (
                        <div onClick={(e) => categoriesAction()} className="relative mx-auto max-w-[1244px]">
                            <div className="cursor-pointer py-2 items-center font-medium text-white hidden md:flex">
                                <span className="ml-3 xl:m-0 hidden md:block">
                                    Categories
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16px" className={`mt-[2px] transition-all duration-300 ${showCategories ? "rotate-1800" : "rotate-180"} fill-white ml-1`} viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>
                            </div>
                            <NavbarCategories showCategories={showCategories} setShowCategories={() => categoriesAction()} />

                        </div>
                    )}
                </div>
            </div>
            <MobileNavbar showOpen = {() => handleMenuClick()} signOut = {() => signOut()} showMobile={showCategories} userSource = {userSource} isLoggedIn = {isLoggedIn} setShowMobile={() => categoriesAction()} />
            <Outlet />
            <AuthModal isOpen={showAuthPanel} showOpen={() => handleMenuClick()}  />

        </div>
    );
};

export default Navbar;
