import NavBar from "../features/navbar/NavBar";
import { ProductList } from "../features/products_list/productList";
import Cart from "./Cart";
function Home() {
    return (

        <NavBar>
            <ProductList></ProductList>
         
        </NavBar>
    )
}
export default Home;