import Navbar from "./componentes/layout/navbar/Navbar";
import { Productos } from "./componentes/pages/itemListContainer/ItemListContainer";

const App = () => {

  let saludo = "Bienvenidos a tu joyeria Scarlata"

  return (
<div>
  <Navbar/>
  <Productos saludo={saludo} />
  </div>
  )
  
  
};

export default App;
