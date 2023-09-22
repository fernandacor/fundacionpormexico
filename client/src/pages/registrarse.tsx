import React, {useState} from "react";

const Registrarse = () =>{

    const [datos, setDatos]=useState({
        username: "",
        password: "",
        name: "",
        lastName:"",
        slastName:"",
    });

    const handleChange= (event: React.ChangeEvent<HTMLInputElement>)=>{
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
        });
    };

    const handleSendData = async() => {
        // Convert the form data to JSON
        const request = await new Request('http://127.0.0.1:1337/registrarse', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: new Headers({ 'Content-Type': 'application/json'}),
        });
        try {
            const response = await fetch(request);
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            
        } catch {
            throw new Error('No se pudo registrar el usuario');
        }
    };

    return (
        <div>
            <h2>Registro de nuevos usuarios</h2>
            <form>
                <div>
                    <label htmlFor="username">Usuario: </label>
                    <input 
                        type="text"
                        id="username"
                        name="username"
                        value={datos.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        value={datos.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="name">Nombre: </label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={datos.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Apellido Paterno: </label>
                    <input 
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={datos.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="slastName">Apellido Materno: </label>
                    <input 
                        type="text"
                        id="slastName"
                        name="slastName"
                        value={datos.slastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="button" onClick={handleSendData}>
                        Crear Usuario
                    </button>
                </div>
            </form>
        </div>
    );

};

export default Registrarse;