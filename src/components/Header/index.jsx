import { HeaderStyle } from "./style.js";

export function Header() {
  return (
    <HeaderStyle>
      <section className="HeaderFontes">
        <h2>uma seleção de produtos</h2>
        <h1>especial para você</h1>
        <h3>
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </h3>
      </section>
      <section>
        <button className="bnt">Conheça a Linx</button>
        <button className="bnt">Ajude o algorítimo</button>
        <button className="bnt">Seus produtos</button>
        <button className="bnt">compartilhe</button>
      </section>
    </HeaderStyle>
  );
}
