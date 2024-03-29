import { Description } from "../../components/Description";
import { Header } from "../../components/Header";
import { Divider } from "../../components/Divider";
import { Compartilhe } from "../../components/Compartilhe";
import { Footer } from "../../components/Footer";
import { Products } from "../../components/Products";
function Home() {
  return (
    <div>
      <Header />
      <Description />
      <Divider>Sua seleção especial</Divider>
      <br />
      <Products />
      <Divider>Compartilhe a novidade</Divider>
      <Compartilhe />
      <Footer />
    </div>
  );
}
export default Home;
