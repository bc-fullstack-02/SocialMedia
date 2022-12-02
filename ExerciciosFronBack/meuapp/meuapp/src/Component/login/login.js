import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (

        <div className="Background">

            <div className="modal">

                <h1>ENTRAR</h1>
                <form>
                    <input type="text" name="name" id="name" placeholder="Digite seu nome" required />
                    <input type="text" name="email" id="email" placeholder="Digite seu email" required />
                    <input type="password" name="password" id="password" placeholder="Digite sua senha" required />
                    <button>ENTRAR</button><br></br>
                    <div className="Cadastro">
                        <Link>Criar conta</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;