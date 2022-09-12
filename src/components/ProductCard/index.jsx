import { CardsStyle } from "./style";

export function Cards({ image, name, oldPrice, price, description, newPrice }) {
  return (
    <CardsStyle>
      <div className="teste">
        <div className="FotoCards">
          <img className="img" src={image} alt={name} />
        </div>
        <h3 className="name">{name}</h3>
        <p className="info">{description}</p>

        <span className="valor-antigo">{oldPrice}</span>

        <span className="promoção">{newPrice}</span>

        <span className="dividindo">{price}</span>
        <div>
          <button className="bnt">Comprar</button>
        </div>
      </div>
    </CardsStyle>
  );
}
