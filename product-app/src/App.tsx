import Header from "./Header";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import "./App.css";

function App() {
  return (
    <>
      <header className="pt-3">
        <Header></Header>
      </header>
      <main>
        <ProductImage></ProductImage>
        <ProductInfo></ProductInfo>
      </main>
    </>
  );
}

export default App;
