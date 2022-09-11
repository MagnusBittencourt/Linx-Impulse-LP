import { Description } from "../../components/Description"
import { Header } from "../../components/Header"
import { Divider } from "../../components/Divider"
import { Cards } from "../../components/ProductCard"
Cards
export function Home (){
  return (<div>
   <Header/>
    <Description/>
    <Divider>Sua seleção especial</Divider>
    <Cards/>
   </div>
  )
}
