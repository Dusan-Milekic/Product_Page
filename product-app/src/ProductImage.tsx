import "./ProductImage.css";
export default function ProductImage() {
  return (
    <>
      <div className="product-image"></div>
      <div className="thumbnails invisible pt-8 flex w-md justify-between">
        <img src="image-product-1-thumbnail.jpg" alt="product" />
        <img src="image-product-2-thumbnail.jpg" alt="product" />
        <img src="image-product-3-thumbnail.jpg" alt="product" />
        <img src="image-product-4-thumbnail.jpg" alt="product" />
      </div>
    </>
  );
}
