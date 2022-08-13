import FoodDetail from "./Components/Food/FoodDetail.jsx";
import FoodList from "./Components/Food/FoodList";
import OrderList from "./Components/Order/OrderList";
import Test from "./Components/Order/Test";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import AccountList from "./Components/Account/AccountList";
import AddAccount from "./Components/Account/AddAccount";
import Manager from "./Components/Admin/Layout";
import AddCategory from "./Components/Category/AddCategory";
import CategoryList from "./Components/Category/CategoryList";
import AddFood from "./Components/Food/AddFood.jsx";
import AccountDetail from "./Components/Account/AccountDetail.jsx";
import CategoryDetail from "./Components/Category/CategoryDetail.jsx";
;


function App() {


    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="admin" element={<Manager />} >
                        <Route path="/admin/food/create" element={<AddFood />} />
                        <Route path="/admin/food/list" element={<FoodList />} />
                        <Route path="/admin/food/details/:id" element={<FoodDetail />} />
                        <Route path="/admin/category/create" element={<AddCategory />} />
                        <Route path="/admin/category/list" element={<CategoryList />} />
                        <Route path="/admin/category/details/:id" element={<CategoryDetail />} />
                        <Route path="/admin/account/create" element={<AddAccount />} />
                        <Route path="/admin/account/list" element={<AccountList />} />
                        <Route path="/admin/account/details/:id" element={<AccountDetail />} />
                        <Route path="/admin/order/list" element={<OrderList />} />

                    </Route>

                    <Route path="test" element={<Test />} />

                    {/* <Route path="delete/:id" element={<DeleteFood />} /> */}
                    {/* <Route path="delete" element={<DeleteFood/>} /> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;