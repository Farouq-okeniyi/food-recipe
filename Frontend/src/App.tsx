import './index.css'
import './App.css'
import { FormEvent, useState } from 'react'
import * as api from './appi'
import { recipe } from './types'

const App = ()=>{
  const[seachTerm,setSearchTerm] = useState('burgers');

  const[receipts, setRecipts] = useState<recipe[]>([])

  const handleRequest = async(event:FormEvent)=>{
    event.preventDefault()
    try {
      const response = await api.searchRecipts(seachTerm,1)
  
      setRecipts(response.result.results)
    } catch (error) {
      throw new Error('Error fetching Result'+ error)

    }
  }
  return (
    <div>
      <form onSubmit={(event) => { handleRequest(event); }}>
        <button type="submit">Submit</button>
      </form>
      {receipts.map((receipt) => {
        return (
          <div key={receipt.id}>
            <p>Receipt image: <img src={receipt.image} alt={receipt.title} /></p>
            <p>Receipt title: {receipt.title}</p>
            <p>Receipt id: {receipt.id}</p>
            <p>Receipt image type: {receipt.image}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App