import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //Jsx : {}
  //Javascript kodları yazılır
  //let a = 5;

  let a = 15;
  const firstName = "Furkan";

  let vize1 = 30;
  let vize2 = 80;

  let sonuc = false;

  let isimler = [
    "Furkan",
    "Ayşenur",
    "Kübra",
    "Adem"
  ]

  return (
    //Html kodları yazılır
    <div>
      <p>a değişkeninin değeri : {a}</p>
      <p>Müşterinin adı : {firstName}</p>
      <p>Ortalama : {(vize1 + vize2) / 2}</p>
      {sonuc ? <p>Ehliyeti alabilirsin</p> : <p>Ehliyeti alamazsın.</p>}
      {
        (vize1 + vize2) / 2 >= 50 ? <p>Dersten geçtin aferin</p> : <p>Kaldın geçmiş olsun</p>
      }
      {
        isimler.map((isim, index) => (
          <div style={{
            backgroundColor: 'orange',
            border: '1px solid black'
          }} key={index}> {isim} </div>
        ))
      }
    </div>

  );
}

export default App
