function MachinesList ({ machines, handleDeleteMachine }) {
  return (
    <div>
      {
        machines.map((machine) => {
          return (
            <div key={machine.id}>
              <h2>{machine.name}</h2>
              <p>{machine.description}</p>
              {machine.image && (
                <img src={machine.image} alt={machine.name} width="250px"/>
              )}
              <button onClick={() => handleDeleteMachine(machine.id)}>Eliminar</button>
            </div>
            
          )
        })
      }
    </div>
  )
}

export default MachinesList