import React, {useState} from 'react'

const App = () => {
  let [counter, setCounter] = useState(1);
  

  let [price, setPrice] = useState(10000);
  const tee = () => {
    setPrice(price+5)
  }
  const nee = () => {
    setPrice(price-5)
  }
  return (
    <div>
      <h1>นัทพงชอบกินหมา</h1>
      <p>ราคาไม้ละ {price} บาท</p> 
      <button onClick={tee}>+</button>
      <button onClick={nee}>-</button>
      <p>5 ไม้ {price*5} บาท</p>
      <p>10 ไม้ {price*10} บาท</p>
      <p>15 ไม้ {price*15} บาท</p>
      <p>20 ไม้ {price*20} บาท</p>
    </div>
  )
}

export default App