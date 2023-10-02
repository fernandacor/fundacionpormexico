import { AuthProvider } from "react-admin";

const authProvider: AuthProvider={
    login: async ({ username , password }) => {
        const request = new Request('http://127.0.0.1:1337/login', {
            method: 'POST',
            body: JSON.stringify({ "username":username, "password": password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        try {
            const response = await fetch(request);
            if (response.status === 401) {
                throw new Error('Usuario incorrecto');
            }
            if (response.status === 403) {
                throw new Error('Contraseña incorrecta');
            }
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            const auth = await response.json();
            console.log('Nombre de usuario:', auth.nombre); 
            localStorage.setItem('auth', auth.token);
            localStorage.setItem('identity',  JSON.stringify({"id": auth.id,  "fullName":auth.nombre}));
            localStorage.setItem('permissions', auth.permissions);
            return Promise.resolve()
        } catch (error: any) {
            throw new Error(error.message);
        }
    },
    logout: ()=>{
        localStorage.removeItem("auth");
        localStorage.removeItem("identity");
        localStorage.removeItem("permissions");
        return Promise.resolve();
    },
    checkAuth: ()=>{
        return localStorage.getItem("auth")? Promise.resolve(): Promise.reject();
    },
    checkError: (error) =>{
        const status=error.status;
        if(status===401|| status===403){
            localStorage.removeItem("auth");
            localStorage.removeItem("identity");
            localStorage.removeItem("permissions");
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getIdentity: () => {
        const identityString = localStorage.getItem("identity");
        console.log(identityString);
        if (identityString) {
            try {
                return Promise.resolve(JSON.parse(identityString));
            } catch (error) {
                return Promise.reject(error);
            }
        } else {
            return Promise.reject("No se encontró la identidad en el almacenamiento local");
        }
    },
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    },
};

export default authProvider;