import productsList from "../list/listData";

export default function CartComponent() {
  return (
    <>
      {productsList.map((product, index) => (
        <div className="cart" key={index}>
          <h3>{product.item}</h3>
          <p>${product.price}</p>
          <p>1</p>
        </div>
      ))}
    </>
  );
}
