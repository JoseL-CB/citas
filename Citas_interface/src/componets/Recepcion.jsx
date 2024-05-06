import React from 'react';
import './Recepcion.css';
import logo from './logo3.jpg';
import { UserAddOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';
<EditOutlined />

function Recepcion() {
  return (

    <body>
    <div className="container-xl">
        <div className="table-responsive">
            <div className="table-wrapper">
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-5">
                            <h2>MANEJO DE <b>HABITACIONES</b></h2>
                            <a href="#" className="btn btn-secondary"><UserAddOutlined /><span>Agregar Habitacion</span></a>

                        </div>

                        <div className="col-sm-7">
                        </div>
                    </div>
                </div>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Piso</th>
                            <th>Numero</th>						
                            <th>Paciente</th>
                            <th>Dianostico</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><a href="#">301</a></td>
                            <td>Cristian Colona</td>                        
                            <td>Flojera</td>
                            <td><span className="status text-success">&bull;</span> Dispo</td>
                            <td>
                                <a href="#" className="settings" title="Settings" data-toggle="tooltip"><EditOutlined /></a>
                                <a href="#" className="delete" title="Delete" data-toggle="tooltip"><DeleteOutlined /></a>
                            </td>
                        </tr>
                        <tr>
                            <td> 2</td>
                            <td><a href="#">101</a></td>
                            <td>Marlon Calvo</td>                       
                            <td>Inservible</td>
                            <td><span className="status text-success">&bull;</span> Dispo</td>
                            <td>
                                <a href="#" className="settings" title="Settings" data-toggle="tooltip"><EditOutlined /></a>
                                <a href="#" className="delete" title="Delete" data-toggle="tooltip"><DeleteOutlined /></a>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><a href="#"> 301</a></td>
                            <td>Enrique Paredes</td>
                            <td>No tiene na</td>
                            <td><span className="status text-danger">&bull;</span> No Dispo</td>                        
                            <td>
                                <a href="#" className="settings" title="Settings" data-toggle="tooltip"><EditOutlined /></a>
                                <a href="#" className="delete" title="Delete" data-toggle="tooltip"><DeleteOutlined /></a>
                            </td>                        
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><a href="#">102</a></td>
                            <td>Wiliam Gonzalez</td>
                            <td>Calculo</td>
                            <td><span className="status text-success">&bull;</span> Active</td>
                            <td>
                                <a href="#" className="settings" title="Settings" data-toggle="tooltip"><EditOutlined /></a>
                                <a href="#" className="delete" title="Delete" data-toggle="tooltip"><DeleteOutlined /></a>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><a href="#">103</a></td>
                            <td>Carlos Rincon</td>                        
                            <td>Pulmon</td>
                            <td><span className="status text-warning">&bull;</span> Inactive</td>
                            <td>
                                <a href="#" className="settings" title="Settings" data-toggle="tooltip"><EditOutlined /></a>
                                <a href="#" className="delete" title="Delete" data-toggle="tooltip"><DeleteOutlined /></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="clearfix">
                    <ul className="pagination">
                    </ul>
                </div>
            </div>
        </div>
    </div>     
    </body>

  );
}

export default Recepcion;