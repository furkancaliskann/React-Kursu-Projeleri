import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log("her zaman çalışır")
  })

  useEffect(() => {
    console.log("ilk render edildiğinde çalışır")
    //Veritabanından ürünleri sayfa yüklendiğinde bir kere çekmek istediğimizde kullanırız.
  }, [])

  useEffect(() => {
    console.log("ilk render edildiğinde ve firstName state değeri değiştiğinde çalışır")
  }, [firstName])

  useEffect(() => {
    console.log("ilk render edildiğinde ve lastName state değeri değiştiğinde çalışır")
  }, [lastName])

  useEffect(() => {
    console.log("ilk render edildiğinde ve firstName veya lastName state değeri değiştiğinde çalışır")
  }, [firstName, lastName])

  return (
    <div>
      <div><button onClick={() => setFirstName("Furkan")}>Adı Değiştir</button></div>
      <div><button onClick={() => setLastName("Çalışkan")}>Soyadı Değiştir</button></div>
    </div>
  )
}

export default App
