import Header from "./Header";
import ProductImage from "./ProductImage";
import "./App.css";

function App() {
  return (
    <>
      <header className="pt-3">
        <Header></Header>
      </header>
      <main>
        <ProductImage></ProductImage>
      </main>
    </>
  );
}

export default App;
