import React from "react";
import ReactDOM from "react-dom/client";
import "./files/css/design.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AdminProvider } from "./context/AdminProvider";
import { ProductProvider } from "./context/ProductProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

        <BrowserRouter>
            <GoogleOAuthProvider clientId="1019524442029-an87cjjgu0k9mu467ev80tvup9np5jml.apps.googleusercontent.com">
                <ProductProvider>                 
                    <AdminProvider>
                        <Provider store={store}>     
                            <ToastContainer />                
                            <App />
                        </Provider>                              
                    </AdminProvider>
                </ProductProvider>
            </GoogleOAuthProvider>
        </BrowserRouter>

);
