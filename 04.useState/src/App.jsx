import { useState } from 'react'
import './App.css'


function App() {

  // String tckn = "1290312312"
  // String firstName = "Furkan"

  // useState : hooks

  // useState : Bir state'in değerini set metodunu kullanarak değiştirdiğinde component yeniden render edilir.

  const [count, setCount] = useState(0)

  const arttir = () => {
    setCount(count + 1)
  }

  const azalt = () => {
    if (count > 0)
      setCount(count - 1)
  }

  console.log('component render edildi')

  // const [firstName, setFirstName] = useState('Furkan');
  // const [lastName, setLastName] = useState('Çalışkan');
  // const [names, setNames] = useState(['Furkan', 'Adem', 'Yakup', 'Ali'])
  // const [userInfo, setUserInfo] = useState({ username: "fcaliskan", password: "1212" })
  // const [show, setShow] = useState(true)

  // const handleChange = () => {
  //   debugger;
  //   setFirstName('Hello')
  // }

  //console.log(names);

  return (
    <div>
      {/* <div>{firstName}</div> */}
      {/* <div><button onClick={() => { setFirstName('Hello') }}>İsmi Değiştir</button></div> */}
      {/* <div><button onClick={handleChange}>İsmi Değiştir</button></div> */}
      {/* {names.map((name, index) => (
        <div key={index}>
          {name}
        </div>
      ))} */}
      {/* {userInfo.username} {userInfo.password} */}
      {/* {show ? <div> {userInfo.username} {userInfo.password} </div> : <div>bilgileri gösterme</div>} */}
      <div>{count}</div>
      <div><button onClick={arttir}>Arttır</button></div>
      <div><button onClick={azalt}>Azalt</button></div>
    </div>
  )
}

export default App
