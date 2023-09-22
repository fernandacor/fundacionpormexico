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
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            const auth = await response.json();
            localStorage.setItem('auth', auth.token);
            localStorage.setItem('identity',  JSON.stringify({"id": auth.id,  "fullName":auth.fullName}));
            return Promise.resolve()
        } catch {
            throw new Error('Error en usuario o password');
        }
    },
    logout: ()=>{
        localStorage.removeItem("auth");
        localStorage.removeItem("identity");
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
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getIdentity: () => {
        const identityString = localStorage.getItem("identity");
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
    getPermissions: ()=>{return Promise.resolve()},
};

export default authProvider;