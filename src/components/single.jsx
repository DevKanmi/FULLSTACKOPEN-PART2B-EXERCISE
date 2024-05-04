const Single =({filteredPersons}) => {

    return (
        // persons.map(
        //     (x)=> 
        //     <p key ={x.id}>
        //         {x.name} {x.number}
        //     </p>
        
        // )


        <>
             {filteredPersons.map(person => (
          <li key={person.id}>{person.name} {person.number}</li>
        ))}
        </>
        
    )

}




export default Single
