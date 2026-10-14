
import './App.css';

function App() {
  return (
    <div className="container">

      <header>
        <h1>Estoque Fácil</h1>
        <p>Controle seus produtos de forma simples e organizada.</p>
      </header>

      <main>
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
            <h3>Valor total do estoque</h3>
            <p>R$ 2.500,00</p>
          </div>

        </section>

        <section className="painel">
          <h2>Cadastrar produto</h2>

          <form>
            <input
              type="text"
              placeholder="Nome do produto"
            />

            <input
              type="text"
              placeholder="Categoria"
            />

            <input
              type="number"
              placeholder="Quantidade"
              min="0"
            />

            <input
              type="number"
              placeholder="Preço unitário"
              min="0"
              step="0.01"
            />

            <button type="button">
              Cadastrar produto
            </button>
          </form>
        </section>

        <section className="painel">
          <h2>Produtos em estoque</h2>

          <div className="tabela">
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Categoria</th>
                  <th>Quantidade</th>
                  <th>Preço unitário</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Detergente</td>
                  <td>Limpeza</td>
                  <td>50</td>
                  <td>R$ 2,50</td>
                </tr>

                <tr>
                  <td>Desinfetante</td>
                  <td>Limpeza</td>
                  <td>30</td>
                  <td>R$ 8,00</td>
                </tr>

                <tr>
                  <td>Sabão em pó</td>
                  <td>Limpeza</td>
                  <td>40</td>
                  <td>R$ 12,00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

    </div>
  );
}

export default App;
