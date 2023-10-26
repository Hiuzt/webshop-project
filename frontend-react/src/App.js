// import './files/design.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Store from "./pages/ProductsByCategory";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { useEffect } from "react";
import { getLoginStatus } from "./services/authService";
import { getRoles, getUsers } from "./services/adminService";
import Users from "./pages/admin/Users";
import AdminSidebar from "./components/AdminSidebar";
import useAdmin from "./customHooks/useAdmin";
import Roles from "./pages/admin/Roles";
import Products from "./pages/admin/Products";
import AdminDashboard from "./pages/admin/AdminDashboard";
import useProduct from "./customHooks/useProduct";
import Product from "./pages/products/ProductView";
import Orders from "./pages/admin/Orders";
import Promos from "./pages/admin/Promos";
import { useDispatch } from "react-redux";
import { SET_LOGIN, SET_USER } from "./redux/features/authSlice";

import AdminCategories from "./pages/admin/AdminCategories";
import {  getCategories } from "./redux/features/categorySlice";
import { getAllProducts } from "./redux/features/productSlice";
import ProductsByCategory from "./pages/ProductsByCategory";


function App() {
    const { setRoles, setUsers } = useAdmin();
    const dispatch = useDispatch();

    useEffect(() => {
        const loginStatus = async () => {
            const getStatus = await getLoginStatus();
            if (!getStatus) {
                dispatch(SET_LOGIN(false));
                dispatch(SET_USER({}))
               
                return;
            }
            dispatch(SET_LOGIN(true));
            dispatch(SET_USER(getStatus.user))
        };
        loginStatus();

        const categoryList = async () => {
            dispatch(getCategories())          
        };
        categoryList();

        const roleList = () => {
            getRoles().then(function(response) {
                setRoles({
                    roles: response?.role,
                    loadedContext: true,
                })
            })
        }

        roleList();

        const usersList = () => {
            getUsers().then(function(response) {
                setUsers({
                    loadedContext: true,
                    usersTable: response?.users,
                })
            })
        }

        usersList();

        const productList = () => {
            dispatch(getAllProducts())
        }

        productList();       
    }, []);

    

    return (
        <Routes>
            
            <Route element={<Navbar />}>
                <Route path="/" element={<Home />} />
                <Route path="/product/:productID" element={<Product />} />
                <Route path="/category/:categoryName" element={<ProductsByCategory />} />
            
            </Route>
                <Route element={<AdminSidebar />}>
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/users" element={<Users />} />
                    <Route path="/admin/roles" element={<Roles />} />                    
                    <Route path="/admin/products" element={<Products />} />
                    <Route path="/admin/orders" element={<Orders />} />
                    <Route path="/admin/promos" element={<Promos />} />
                    <Route path="/admin/categories" element={<AdminCategories />} />
                </Route>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
        </Routes>
    );
}

export default App;
