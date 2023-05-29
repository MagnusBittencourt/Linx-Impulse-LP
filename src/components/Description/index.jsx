import { DescriptionStyle } from "./style.js";

export function Description() {
  return (
    <DescriptionStyle>
      <section className="descriptionContainer">
        <div className="boxDescription">
          <h2>Ajude o algoritimo a ser mais certeiro</h2>
          <p>
           Você está em busca do produto perfeito para atender às suas necessidades e desfrutar de uma experiência incrível? Então, não deixe de preencher os nossos campos e ajude o nosso algoritmo a ser mais certeiro!

Queremos garantir que você encontre o produto ideal que se encaixe perfeitamente ao seu estilo de vida e preferências. Ao preencher os nossos campos, você nos fornece informações valiosas sobre as suas necessidades específicas, permitindo que o nosso algoritmo personalize as recomendações de produtos de acordo com os seus interesses.

Imagine só, receber sugestões personalizadas dos melhores produtos disponíveis no mercado, com base nas suas preferências de tamanho, desempenho, recursos e muito mais! Ao preenchendo, você nos ajuda a entender exatamente o que você procura em um produto, possibilitando que nossa equipe selecione as opções mais adequadas para você.
          </p>
  
        </div>
        <form>
          <div className="inputContainer">
            <label htmlFor="nome">Nome</label>
            <input type="" id="nome" required />
          </div>

          <div className="inputContainer">
            <label htmlFor="email">Email</label>
            <input type="" id="email" required />
          </div>

          <div className="inputContainer">
            <label htmlFor="cpf">CPF</label>
            <input type="" id="cpf" required />
          </div>

          <div className="inputRadio">
            <div className="containerInput">
              <label>Masculino</label>
              <input type="radio" name="opcao" value= "1" onclick="desmarcarPrimeiro()" />
            </div>

            <div className="containerInput">
              <label>Feminino</label>
              <input type="radio" name="opcao" value= "2" />
            </div>
          </div>
          <button className="envio">Enviar</button>
        </form>
      </section>
    </DescriptionStyle>
 
 
 
 );
 
}
