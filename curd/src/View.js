import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const View = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:5000/get/${id}`)
            .then((resp) => setUser({ ...resp.data[0] }));
    }, [id])


    return (
        <div>
            <Link to={"/"}>
                <button className='btn btn-info'>Home</button>
            </Link>
            <center>
                <h2>details</h2>
                <table>
                    <thead>
                        <tr>
                            <th style={{ textAlgin: "center" }}>ID</th>
                            <th style={{ textAlgin: "center" }}>name</th>
                            <th style={{ textAlgin: "center" }}>age</th>
                            <th style={{ textAlgin: "center" }}>gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.gender}</td>
                    </tbody>
                </table>
            </center>
        </div>
    )
}

export default View