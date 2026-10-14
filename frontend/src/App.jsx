
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>📦 Estoque Fácil</h1>
        <p>Seu estoque organizado em um só lugar.</p>
      </header>

      <section className="cards">
        <div className="card">
          <h3>Produtos cadastrados</h3>
          <p>25</p>
        </div>

        <div className="card">
          <h3>Unidades em estoque</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h3>Valor do estoque</h3>
          <p>R$ 2.500,00</p>
        </div>
      </section>

      <section className="painel">
        <h2>Bem-vinda ao seu sistema!</h2>
        <p>Seu painel de estoque está funcionando.</p>
      </section>
    </div>
  );
}

export default App;
