
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import AccountList from "./Components/Account/AccountList";
import AddFood from "./Components/AddFood";
import Admin from "./Components/Admin/Admin";
import Manager from "./Components/Admin/Layout";
import AddCategory from "./Components/Category/AddCategory";
import CategoryList from "./Components/Category/CategoryList";
import DeleteFood from "./Components/DeleteFood";
import FoodDetail from "./Components/FoodDetail.jsx";
import FoodList from "./Components/FoodList";
import OrderList from "./Components/Order/OrderList";
import Test from "./Components/Order/Test";

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="admin" element={<Manager />} />
          <Route path="test" element={<Test />} />
          <Route path="add" element={<AddFood />} />
          <Route path="/order/list" element={<OrderList />} />
          <Route path="accounts/list" element={<AccountList />} />
          <Route path="/category/add" element={<AddCategory />} />
          <Route path="category/list" element={<CategoryList />} />
          <Route path="list" element={<FoodList />} />
          <Route path="details/:id" element={<FoodDetail />} />
          {/* <Route path="delete/:id" element={<DeleteFood />} /> */}
          {/* <Route path="delete" element={<DeleteFood/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;