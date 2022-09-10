import { DescriptionStyle } from "./style.js";

export function Description() {
  return (
    <DescriptionStyle>
      <section className="descriptionContainer">
        <div className="boxDescription">
          <h2>Ajude o algoritimo a ser mais certeiro</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu
            urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper
            pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis
            ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean
            lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Vestibulum vel urna tortor. Vivamus et arcu non felis tristique
            eleifend.
          </p>
          <p>
            {" "}
            Morbi eu condimentum urna. Curabitur eu magna eget turpis
            condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar
            purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra.
            Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla
            varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi
            viverra, magna ac luctus commodo, odio ante suscipit libero, at
            mattis augue est vel metus.
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
            
            <div className="a">
              <label>Masculino</label>
              <input type="radio" name="" />
            </div>
           
           
            <div className="a">
              <label>Feminino</label>
              <input type="radio" name="" />
            </div>
           </div>
          <button className="envio">Enviar</button>
        </form>
      </section>
    </DescriptionStyle>
  );
}
