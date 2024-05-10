import React,{useState } from 'react';


const Form = () => {

    // const [name,setName] = useState("")
    // const [email,setEmail] = useState("");
    // const [password,setPaasword] = useState(""); 

    const [formdata,setForm]  = useState({
        name:'',
        email:'',
        password :'',
    })


    // const handleName = (e) => {
    //     setName(e.target.value);
    // }

    // const handleEmail = (e) => {
    //     setEmail(e.target.value)
    // }

    // const handlePaasword = (e) => {
    //     setPaasword(e.target.value)
    // }

    const handleSubmit = () => {
        e.preventDefault();
    }

    const handleInput = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        const {name,value} = e.target
        setForm({
            ...formdata,[name]:value

        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: 
                <input type="text" value={formdata.name} name="name" onChange={handleInput}></input>
            </label>
            {formdata.name}
            <br/>
            <label>
                Email: 
                <input type="email" value={formdata.email} name="email" onChange={handleInput}></input>
            </label>
            {formdata.email}
            <br/>
            <label>
                Paasword: 
                <input type="password" value={formdata.password} name="password" onChange={handleInput}></input>
            </label>
            {formdata.password}
            <br/>
            <button>Submit</button>
        </form>
        
    )
}

export default Form

