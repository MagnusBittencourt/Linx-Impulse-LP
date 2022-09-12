import { CompartilheStyle } from "./style";

export function Compartilhe() {
  return(
<CompartilheStyle>

<div className="novidade">
Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!
</div>

<div className="teste2">
  <div className="teste">
    <div className="inputContainer">
     <label htmlFor="nome">Nome do seu amigo:</label>
     <input type="" id="nome" required />
     </div>
  
      <div className="inputContainer">
      <label htmlFor="email">E-mail</label>
      <input type="" id="email" required />
      </div>
  </div>
</div>


<button className="bnt">Enviar agora</button>





</CompartilheStyle>

)}
