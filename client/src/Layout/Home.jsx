import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const URL = "http://localhost:3000/estadios";

  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [capacidad, setCapacidad] = useState();
  const [ubicacion, setUbicacion] = useState("");

  const [titulo, setTitulo] = useState("");
  const [operacion, setOperacion] = useState();

  useEffect(() => {
    getEstadios();
  }, []);

  const getEstadios = async () => {
    try {
      const result = await axios.get(URL);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = async ( op, id, nombre, capacidad, ubicacion ) => {
    setId("");
    setNombre("");
    setCapacidad("");
    setUbicacion("");

    if (op ==1) {
      setOperacion(1);
      setTitulo("Crear Estadios");
      console.log("actualizando")

    } else if (op === 2) {
        console.log("actualizando")
      setOperacion(2);
      setId(id);
      setNombre(nombre);
      setCapacidad(capacidad);
      setUbicacion(ubicacion);
      setTitulo("Editar Estadios");
    }
  };

  const opera = async () => {
    if (operacion === 1) {
      const result = await axios.post(URL, { nombre, capacidad, ubicacion });
      location.reload();
    }
    if (operacion === 2) {
      const result = await axios.put(`${URL}/${id}`, {
        nombre,
        capacidad,
        ubicacion,
      });
      location.reload();
    }
  };

  const deleteEstadio = async (id) => {
    try {
      const result = await axios.delete(`${URL}/${id}`);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary mx-auto"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => openModal(1)}
        >
          Crear Estadios
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Estadio</th>
            <th>Capacidad</th>
            <th>Ubicacion</th>
            <th>Elimar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id_estadios}>
              <td>{item.nombre}</td>
              <td>{item.capacidad}</td>
              <td>{item.ubicacion}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEstadio(item.id_estadios)}
                >
                  Eliminar
                </button>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    openModal(
                      2,
                      item.id_estadios,
                      item.nombre,
                      item.capacidad,
                      item.ubicacion
                    )
                  }
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title " id="exampleModalLabel">
                {titulo}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex flex-column align-items-center">
              <div>
                <label htmlFor="">Nombre Estadio</label>
                <input
                  type="text"
                  className="rounded-3 px-3 my-2 d-block"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">Capacidad</label>
                <input
                  type="number"
                  className="rounded-3 px-3 my-2 d-block"
                  value={capacidad}
                  onChange={(e) => setCapacidad(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">Ubicacion</label>
                <input
                  type="text"
                  className="rounded-3 px-3 my-2 d-block"
                  value={ubicacion}
                  onChange={(e) => setUbicacion(e.target.value)}
                />
              </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => opera()}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
