import React from 'react';
import { Link } from 'react-router-dom';
import './admin.css';
import { UserAddOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

function Admin() {
  return (
    <div className='fondo'>
      <div className="container">
        <h2 className="admin-heading">Listar Usuarios</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Fecha de Creación</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Juan Videz</td>
                <td>04/10/2013</td>
                <td>Admin</td>
                <td><span className="status active">&bull;</span> Activo</td>
                <td>
                  <button className="action-btn edit" title="Editar"><EditOutlined /></button>
                  <button className="action-btn delete" title="Eliminar"><DeleteOutlined /></button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jorge Viaña</td>
                <td>05/08/2014</td>
                <td>Guardia</td>
                <td><span className="status active">&bull;</span> Activo</td>
                <td>
                  <button className="action-btn edit" title="Editar"><EditOutlined /></button>
                  <button className="action-btn delete" title="Eliminar"><DeleteOutlined /></button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Calderon</td>
                <td>11/05/2015</td>
                <td>Guardia</td>
                <td><span className="status suspended">&bull;</span> Suspendido</td>
                <td>
                  <button className="action-btn edit" title="Editar"><EditOutlined /></button>
                  <button className="action-btn delete" title="Eliminar"><DeleteOutlined /></button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Johanna Maestre</td>
                <td>06/09/2016</td>
                <td>Recepcion</td>
                <td><span className="status active">&bull;</span> Activo</td>
                <td>
                  <button className="action-btn edit" title="Editar"><EditOutlined /></button>
                  <button className="action-btn delete" title="Eliminar"><DeleteOutlined /></button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Patito</td>
                <td>12/08/2017</td>
                <td>Recepcion</td>
                <td><span className="status inactive">&bull;</span> Inactivo</td>
                <td>
                  <button className="action-btn edit" title="Editar"><EditOutlined /></button>
                  <button className="action-btn delete" title="Eliminar"><DeleteOutlined /></button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Fernando Lopez</td>
                <td>22/11/2018</td>
                <td>Admin</td>
                <td><span className="status active">&bull;</span> Activo</td>
                <td>
                  <button className="action-btn edit" title="Editar"><EditOutlined /></button>
                  <button className="action-btn delete" title="Eliminar"><DeleteOutlined /></button>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>Maria Rodriguez</td>
                <td>19/04/2019</td>
                <td>Guardia</td>
                <td><span className="status active">&bull;</span> Activo</td>
                <td>
                  <button className="action-btn edit" title="Editar"><EditOutlined /></button>
                  <button className="action-btn delete" title="Eliminar"><DeleteOutlined /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to="/agregar-usuario" className="btn btn-primary"><UserAddOutlined /> Agregar Usuario</Link>
      </div>
    </div>
  );
}

export default Admin;
