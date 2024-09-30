import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Pages/Home";
import { ProductList } from "./Pages/ProductList";
import { ProductDetail } from "./Pages/ProductDetail";
import { Contact } from "./Pages/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Admin from "./Pages/Admin";
import PageNotFound from "./Pages/PageNotFound";
import ContactIN from "./Pages/Contact/ContactIn";
import ContactEU from "./Pages/Contact/ContactEU";
import ContactUS from "./Pages/Contact/ContactUS";

function App() {
  const user = false;

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/contact" element={<Contact />}>
            <Route path="in" element={<ContactIN />} />
            <Route path="us" element={<ContactUS />} />
            <Route path="eu" element={<ContactEU />} />
          </Route>
          <Route
            path="/admin"
            element={user ? <Admin /> : <Navigate to="/" />}
          ></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
