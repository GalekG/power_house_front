import { useEffect, useState } from "react";
import MachinesForm from "../components/machinesForm";
import axios from "axios";
import MachinesList from "../components/machinesList";
import { API_URL } from "../consts";

function Inventory () {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/machines/`)
      .then((res) => setMachines(res.data))
      .catch((e) => console.error(e));
  }, []);

  const handleDeleteMachine = (machineId) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/machines/${machineId}/delete/`)
      .then(() => {
        setMachines((prevMachines) =>
          prevMachines.filter((machine) => machine.id !== machineId)
        );
      })
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <h1 className="inventory">Gimnasio - Inventario de Máquinas</h1>
      <MachinesForm setMachines={setMachines}/>
      <MachinesList machines={machines} handleDeleteMachine={handleDeleteMachine} />
    </div>
  )
}

export default Inventory;