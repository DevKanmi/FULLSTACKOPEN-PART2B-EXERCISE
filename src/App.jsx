import { useState } from 'react'
import Single from "./components/single"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number : '040-1234567' ,id : 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const[newNumber , setNewNumber] =useState('')
  const[search, setSearch] = useState('')

  const handleclick =(event)=>{
    event.preventDefault();
      const personobject ={
        name :newName,
        number : newNumber,
        id : persons.length + 1
      }
  
    setPersons(persons.concat(personobject))   
    setNewName('')
    setNewNumber('')
    setsearch(persons.filter(x=>x.name))


  }
  const Tochange = (event) =>{
    event.preventDefault();
    console.log(event.target.value)
    setNewName(event.target.value)

  }


  const TochangeNumber = (event) =>{
    event.preventDefault();
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }


  const filterArrayByValue = (array, value) => {
    return array.filter(item =>
      Object.values(item).some(val =>
        typeof val === 'string' && val.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const filteredPersons = filterArrayByValue(persons, search);

  const onSearch =(e) =>{
    setSearch(e.target.value)


  }
  



           return (
    <div>
      <h2>Phonebook</h2>
      <p><input value={search} onChange={onSearch} /></p>
      <h2>Add a New</h2>
      <form onSubmit={handleclick}>
        <div>
          name: <input value ={newName} onChange={Tochange} />
        </div>
        <div>
          number: <input value ={newNumber} onChange={TochangeNumber} />
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     
     
      <Single filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App

