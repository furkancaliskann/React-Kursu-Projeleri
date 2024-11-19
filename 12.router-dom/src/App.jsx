import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import EmployeeAbout from './pages/EmployeeAbout'
import CompanyAbout from './pages/CompanyAbout'
import ProductDetails from './pages/ProductDetails'

//Routes route

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />}>
          <Route path='employee' element={<EmployeeAbout />} />
          <Route path='company' element={<CompanyAbout />} />
        </Route>

        <Route path='/products' element={<Products />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
