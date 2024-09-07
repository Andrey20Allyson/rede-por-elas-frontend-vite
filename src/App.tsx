import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/home'
import { CagetoryPage } from './pages/category'

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/categoria/:id_categoria',
    Component: CagetoryPage,
  },
  {
    path: '/about',
    Component: () => <div>Sobre</div>,
  }
])

function App() {
  return (
    <>
      <header>
        <span>logo</span>
        <nav>links</nav>
        <select value='recife-pe'>
          <option value="recife-pe">Refice PE</option>
        </select>
      </header>
      <RouterProvider router={router} />
      <footer>
        <div>
          <span>logo</span>
          <nav>links</nav>
          <span>PE logo</span>
        </div>
        <p>Governo de Pernambuco | Praça da República, Bairro de Santo Antônio, Recife – PE, CEP 50.010-928 | Telefone: +55 81 3181.2100</p>
      </footer>
    </>
  )
}

export default App
