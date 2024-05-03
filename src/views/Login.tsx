import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../services/auth";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log("Render");
    
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const authenticated = authenticateUser(email, password);
        if (authenticated) {
            navigate("/");
        } else {
            navigate("/login");
        }
    };

    return (
        <>
            <form className="flex flex-col justify-center items-center mt-10" onSubmit={onSubmit}>
                <h1 className="text-3xl font-bold text-gray-600 mb-3">Login</h1>
                <div className="mb-4">
                    <input
                        value={email}
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Password"
                        className="border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        value="Login"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                    />
                </div>
            </form>
        </>
    );
};

export default Login;
