import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);

    const LoadData = async () => {
        const response = await axios.get("http://localhost:5000/get");
        setData(response.data);
    }
    useEffect(() => { LoadData() }, []);
    const del = (id) => {
        if (window.confirm("are u sure want to delete"));

        axios.delete(`http://localhost:5000/delete/${id}`)
        setTimeout(() => LoadData(), 50)


    }

    return (
        <div>
            <Link to={"/AddDetails"}>
                <button className="btn btn-success">AddDetails</button>
            </Link>
            <table>
                <thead>
                    <tr>
                        <th style={{ textAlgin: "center" }}>No.</th  >
                        <th style={{ textAlgin: "center" }}>Name</th >
                        <th style={{ textAlgin: "center" }}>age</th >
                        <th style={{ textAlgin: "center" }}>gender</th>
                        <th style={{ textAlgin: "center" }}>Actinos</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={index.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.gender}</td>
                                    <td>
                                        <Link to={`/update/${item.id}`}>
                                            <button className="btn btn-edit">edit</button>
                                        </Link>
                                        <button className="btn btn-danger" onClick={() => { del(item.id) }}> Delete</button>
                                        <Link to={`/View/${item.id}`}>
                                            <button className="btn btn-info">view</button>
                                        </Link>
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

export default Home