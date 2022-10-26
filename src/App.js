import Home from "./pages/home/home";
import './assets/styles/main.scss'
import Header from "./container/header/header";
import Footer from "./container/footer/footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
