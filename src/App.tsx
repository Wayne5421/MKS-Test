import { useState } from 'react';
import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import IncrementButton from './components/buy-button/Increment_button';

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   photo: string;
// }

function App() {
  const [number, setNumber] = useState(0);
  const [animate, setAnimate] = useState(false);
 


  const soma = () => {
    setNumber(number + 1);
    setAnimate(true); // Ativa a animação
    setTimeout(() => setAnimate(false), 500); // Desativa a animação após 500ms
  };

  return (
    <>
      <header>
        <Header count={number} animate={animate} />
      </header>



      <IncrementButton onIncrement={soma} />

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
