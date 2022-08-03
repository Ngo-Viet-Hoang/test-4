
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import AddFood from "./Components/AddFood";
import DeleteFood from "./Components/DeleteFood";
import FoodDetail from "./Components/FoodDetail.jsx";
import FoodList from "./Components/FoodList";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="add" element={<AddFood />} />
          <Route path="list" element={<FoodList />} />
          <Route path="details/:id" element={<FoodDetail />} />
          {/* <Route path="delete" element={<DeleteFood/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;