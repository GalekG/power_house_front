import axios from "axios";

// Crea una función para obtener el token del almacenamiento local
const getToken = () => {
  return localStorage.getItem("token");
};

// Interceptor para agregar el encabezado "Authorization" a las solicitudes si el token está presente
axios.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axios;
