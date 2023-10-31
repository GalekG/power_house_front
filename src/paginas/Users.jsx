import { useNavigate } from "react-router-dom";
import { API_URL } from "../consts";
import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { checkIfUserIsLogged } from "../services/checkIfIsLogged";

function Users() {

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  if (!checkIfUserIsLogged()) navigate('/');

  useEffect(() => {
    axios.get(`${API_URL}/users/`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div>
      <div>
        <h2>LISTAR USUARIOS</h2>
        <button>Registrar nuevo usuario</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              Identificación
            </th>
            <th>
              Nombres
            </th>
            <th>
              Apellidos
            </th>
            <th>
              Edad
            </th>
            <th>
              Correo
            </th>
            <th>
              Teléfono
            </th>
            <th>
              Fotografia
            </th>
            <th>
              Acción
            </th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => {
              return (
                <tr>
                  <td>
                    {user.id}
                  </td>
                  <td>
                    {user.identification}
                  </td>
                  <td>
                    {user.names}
                  </td>
                  <td>
                    {user.lastnames}
                  </td>
                  <td>
                    {user.birthdate}
                  </td>
                  <td>
                    {user.email}
                  </td>
                  <td>
                    {user.phone}
                  </td>
                  <td>
                    {user.image ? (
                      <img src={user.image} alt={user.username}/>
                    )
                    :
                    (
                      <>No tiene fotografia</>
                    )}
                  </td>
                  <td>
                    <button>Editar</button>
                    <button>Eliminar</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Users;