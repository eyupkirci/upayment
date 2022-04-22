import AddButton from "../components/AddButton";
import ProductList from "../components/ProductList";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="productlist-container">
        <ProductList />
      </div>

      <div className="addbutton-container">
        <AddButton />
      </div>
    </div>
  );
};

export default Homepage;
