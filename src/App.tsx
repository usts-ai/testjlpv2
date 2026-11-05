import "./App.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Hours } from "./components/Hours";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Products />
        <Hours />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
