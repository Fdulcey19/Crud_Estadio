import { pool } from "../data/db.js";

export const getEstadios = async (req, res) => {
  try {
    const [rows] = await pool.query("select * from estadios");
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
};

export const createEstadio = async (req, res) => {
  try {
    const { nombre, capacidad, ubicacion } = req.body;
    const [rows] = await pool.query(
      "insert into estadios (nombre, capacidad, ubicacion) values (?,?,?)",
      [nombre, capacidad, ubicacion]
    );
    if (rows.affectedRows === 0) {
      res.status(400).json({ message: "el usuario no se creo" });
    }
    res.status(200).json({ message: "Usuario creado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

export const updateEstadio = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, capacidad, ubicacion } = req.body;
    const [rows] = await pool.query(
      "update estadios set ? where id_estadios=?",
      [{nombre, capacidad, ubicacion },id]
    );
    if (rows.affectedRows === 0) {
      res.status(400).json({ message: "el usuario no se actualizo" });
    }
    res.status(200).json({ message: "Usuario actualizado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteEstadio = async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await pool.query(
        "delete from estadios where id_estadios=?",
        [id]
      );
      if (rows.affectedRows === 0) {
        res.status(400).json({ message: "el usuario no se elimino" });
      }
      res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
      console.log(error);
    }
  };
