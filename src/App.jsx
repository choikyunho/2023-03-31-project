import Header from "./components/Header"
import Portfolio from "./components/Portfolio"
import Introduce from "./components/Introduce"
import ContactMe from "./components/ContactMe"
import footer from "./components/footer"

function App() {
  return (
    // Container
    <div className="bg-red-100 min-h-screen">
    <Header />
      <main>
          <Introduce />
          <Portfolio />
          <ContactMe  />
      </main>
          <footer />      
    </div>
  );
}

export default App;