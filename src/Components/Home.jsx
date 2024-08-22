import React, { useState, useEffect } from 'react'
import PageBanner from './PageBanner'

export default function Home() {

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [advice, setAdvice] = useState('')
  const [count, setCount] = useState(0)

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json()
    setAdvice(data.slip?.advice ?? 'No Advice Found');
    setCount(count + 1);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 2000);

    getAdvice()

    return () => {
      clearInterval(timer);
    }
  }, []);
  


  return (
    <div>
        <PageBanner title="Home" />
        <div className="container mt-5 mb-5 text-center w-80 p-5 bg-light rounded shadow">
          <h1 className="text-center mb-4 font-roboto fw-bold">⌚{time}</h1>
          <h1 className="text-center mb-4 font-roboto fw-bold">While you're here, let's brighten up your day!</h1>
          <h2>{advice}</h2>
          <button className="btn btn-primary mt-3" onClick={getAdvice}>Get Advice</button>
          <h3 className="text-center mt-3">Advice Generated: {count}</h3>
        </div>
    </div>
  )
}
