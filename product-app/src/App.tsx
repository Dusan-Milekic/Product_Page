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
        <div className="info-all">
          <div>
            <ProductImage></ProductImage>
          </div>
          <div className="max-w-info">
            <ProductInfo></ProductInfo>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
