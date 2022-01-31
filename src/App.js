import './App.css';
import Header from "./Components/Header/header"
import Body from "./Components/Body/body"
import Footer from "./Components/Footer/footer"
import Navbar from "./Components/Navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
