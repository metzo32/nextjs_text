
import Image from "next/image";
import productsList from "./listData";
import NumberButton from "./NumberButton";

export default function List() {
  
  return (
    <div className="main">
      {productsList.map((product, index) => (
        <div className="product-box" key={index}>
          <Image
            src={product.image}
            alt={product.item}
            className="product-img"
          />
          <h2>{product.item}</h2>
          <p>${product.price}</p>
          <p>{product.content}</p>
          <p className="stock">{product.stock ? "" : "재고 없음!"}</p>
          <NumberButton id={product.item}/>
        </div>
      ))}
    </div>
  );
}
