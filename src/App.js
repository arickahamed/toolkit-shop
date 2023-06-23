import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import store from "./store/store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/productDetail/:id" element={<ProductDetail />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;

// 7:08 will start in shaa allah
