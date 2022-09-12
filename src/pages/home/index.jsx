import { Description } from "../../components/Description"
import { Header } from "../../components/Header"
import { Divider } from "../../components/Divider"
import { Cards } from "../../components/ProductCard"
import { Compartilhe } from "../../components/Compartilhe"
Compartilhe
Cards
export function Home (){
  return (<div>
   <Header/>
    <Description/>
    <Divider>Sua seleção especial</Divider>
    <Cards/>
    <Divider>Compartilhe a novidade</Divider>
    <Compartilhe/>
   </div>
  )
}
