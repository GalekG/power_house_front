import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../consts';
import '../estilos/LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [user, setUser] = useState(null); // Agrega un estado para el usuario autenticado

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    setErrorMessage('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes agregar la lógica de autenticación
    const credentials = {
      username,
      password
    };

    axios.post(`${API_URL}/auth/login`, credentials)
      .then((res) => {
        const token = res.data.token;

        localStorage.setItem('token', token);

        // Almacena el usuario autenticado en el estado
        setUser(credentials.username);

        // Redirige al usuario a "/presentacion"
        navigate('/');
        window.location.reload(false);
      })
      .catch((error) => {
        setErrorMessage(error.response?.data); // Muestra el mensaje de error
      });
  }

  return (
    <div className="container">
      <div className="login-box">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td className="tableLogin-label">
                  <label>Usuario:</label>
                </td>
                <td>
                  <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={handleInputChange}
                    />
                </td>
              </tr>
              <tr>
                <td className="tableLogin-label">
                  <label>Contraseña:</label>
                </td>
                <td>
                  <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                    />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="login-button">Iniciar sesión</button>
        </form>
        {errorMessage && (
          <p className="error-message">Error: {errorMessage.error}</p>
        )}
        {user && <p>Bienvenido, {user}.</p>}
      </div>
    </div>
    
  );
}

export default LoginForm;
