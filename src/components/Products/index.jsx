import { ProductsStyle } from "./style";
import { Cards } from "../../components/ProductCard";
import { useEffect, useState } from "react";

export function Products() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`;

  const getProduct = async () => {
    const data = await fetch(url);
    const jsonData = await data.json();
    setProduct([...product, ...jsonData.products]);
    setPage(page + 1);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <ProductsStyle>
      <div className="ProductsContainer">
        {product.map((current) => (
          <Cards
            key={current.id}
            image={current.image}
            name={current.name}
            description={current.description}
            desc={current.description}
            oldPrice={`De: R$${current.oldPrice},00`}
            newPrice={`Por: R$${current.price},00`}
            price={`ou ${current.installments.count}x de R$${current.installments.value}0`}
          />
        ))}
      </div>
      <button onClick={getProduct}>Ainda mais produtos aqui!</button>
    </ProductsStyle>
  );
}
