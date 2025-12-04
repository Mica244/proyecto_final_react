import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import {useNavigate, Navigate} from "react-router-dom";

export const Login = () => {
    const [UserForm, setUserForm] = useState({name: "", password: ""});
    const {user, login} = useAuthContext();
    const navigate = useNavigate();

    if(user){
        return <Navigate to="/admin/alta-productos" replace/>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm({...UserForm, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const success = login(UserForm.name, UserForm.password);
        if(success){
            navigate("/admin/alta-productos");
        }else{
            alert("Credenciales incorrectas");
            setUserForm({name: "", password: ""});
        }
    };

    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100">
            <div className="col-12 col-md-6 col-lg-4 mx-auto">
                <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                    <h2 className="text-center mb-4">Iniciar sesión</h2>

                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                        Usuario
                        </label>
                        <input
                        id="name"
                        type="text"
                        name="name"
                        className="form-control"
                        value={UserForm.name}
                        onChange={handleChange}
                        placeholder="Ingresa tu usuario"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                        Contraseña
                        </label>
                        <input
                        id="password"
                        type="password"
                        name="password"
                        className="form-control"
                        value={UserForm.password}
                        onChange={handleChange}
                        placeholder="Ingresa tu contraseña"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Iniciar sesión
                    </button>
                    </form>
                </div>
                </div>

                <p className="text-center mt-3 text-muted" style={{ fontSize: "0.9rem" }}>
                Acceso solo para administradores
                </p>
            </div>
            </div>
        </div>
);
};