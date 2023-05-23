import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const initialState = {
  name: "",
  age: "",
  gender: ""

}
const AddDetails = () => {
  const [state, setState] = useState(initialState);
  const { name, age, gender } = state;
  const onchange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });

  }
  const n = useNavigate();
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:5000/get/${id}`).then((response) => setState({ ...response.data[0] }));

  }, [id])
  const onsubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !gender) {
      window.alert("enter details");
    }
    else {
      if (!id) {
        axios.post("http://localhost:5000/post", {
          name,
          age,
          gender
        }).then(() => {
          setState({ name: "", age: "", gender: "" })
        }).catch((error) => console.log(error))
        window.alert("sucess");

        setTimeout(() => { n('/') }, 50)
      }
      else {
        axios.put(`http://localhost:5000/update/${id}`, {
          name,
          age,
          gender
        }).then(() => {
          setState({ name: "", age: "", gender: "" })
        }).catch((error) => console.log(error))
        window.alert("updated sucess");

        setTimeout(() => { n('/') }, 50)
      }

    }

  }



  return (
    <div>
      <form onSubmit={onsubmit}>
        <input type="text" id="name" name="name" value={name || ""} placeholder="name" onChange={onchange} /><br />
        <input type="text" id="age" name="age" value={age || ""} placeholder="age" onChange={onchange} /><br />
        <input type="text" id="gender" name="gender" value={gender || ""} placeholder="gender" onChange={onchange} /><br />
        <input type="submit" value={id ? "update" : "save"} />
      </form>
    </div>
  )
}

export default AddDetails