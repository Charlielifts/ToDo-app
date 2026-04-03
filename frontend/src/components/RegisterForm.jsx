import axios from "axios";
import { useState } from "react";

const Registerform = ({active, showPassword, setShowPassword, setSeeCoPassword, seeCoPassword, messageType, setMessageType, 
     message, setMessage, username, setUsername, password, setPassword}) => {

    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Password do not match")
            setMessageType("error")
            return;
        }
        try {
            console.log("Sending:", username, email, password);
            const res = await axios.post("http://localhost:5000/auth/register", {
                username,
                email,
                password,
            });
            setMessage(res.data.message);
            setMessageType("success");
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            console.log("MESSAGE SET:", res.data.message);
        } catch (err) {
         console.error(err.response?.data || err.message);
        setMessage(err.response?.data?.message || "Something went wrong");
        setMessageType("error");
        }
    };


 return ( 
    <div className={`absolute left-0 w-1/2 h-full flex items-center text-center p-15 z-30
    transition-all duration-600 delay-300
    ${active ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
        <form className="w-full" onSubmit={handleRegister}>
                <h1 className={`text-3xl font-Gummy font-bold mb-6 cursor-default 
                transition-all duration-700 delay-300
                ${active ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
                     Register
                <i class="fa-solid fa-align-center"></i></h1>

            <div className={`relative my-6 transition-all duration-600 opacity-100 delay-250 ${active ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0" }`}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className=" w-full py-3 pl-5 pr-10 bg-gray-300 rounded-full outline-none"
                />
            </div>

            <div className={`relative my-6 transition-all duration-600 opacity-100 delay-200 ${active ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0" }`}>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=" w-full py-3 pl-5 pr-10 bg-gray-300 rounded-full outline-none"

                />
            </div>
            
            <div className={`relative my-6 transition-all duration-600 opacity-100 delay-150 ${active ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0" }`}>
                <input 
                    type= {showPassword ? "text" : "password"}
                    placeholder="Input your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className=" w-full py-3 pl-5 pr-10 bg-gray-300 rounded-full outline-none" 
                />

                <button type="button" onClick={() => setShowPassword(prev => !prev)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                    {showPassword ? ( <i class="fa-solid fa-eye"></i>) : ( <i class="fa-regular fa-eye-slash"></i>)}
                </button>

            </div>

            <div className={`relative my-6 transition-all duration-600 opacity-100 delay-100 ${active ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0" }`}>
                <input 
                    type={seeCoPassword ? "text" : "password"}
                    placeholder="Confirm your Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className=" w-full py-3 pl-5 pr-10 bg-gray-300 rounded-full outline-none" 
                />

                <button type="button" onClick={() => setSeeCoPassword(prev => !prev)}
                    className="absolute right-3 top-5/10 transform -translate-y-1/2 cursor-pointer">
                    {seeCoPassword ? (<i class="fa-solid fa-eye"></i>) : <i class="fa-regular fa-eye-slash"></i>}

                </button>

            </div>

            <button 
            type="submit"
            className={`w-full py-3 pl-5 pr-10 bg-amber-500 rounded-full font-semibold hover:bg-amber-600 hover:scale-105 transition duration-300 cursor-pointer
            duration-600 opacity-100 delay-50 ${active ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0" }`}>
                Register
            </button>
                {message && (
                <p className={`mt-3 text-center text-m
                ${messageType === "success" ? "text-green-700 font-semibold" : "text-red-600 font-semibold"}`}>

                    {messageType === "success" ? (
                     <span className="text-lg">🎉</span>
                    ):(
                    <i className="fa-solid fa-exclamation-circle"></i>)}
                    {message}
                </p>
            )}
            
        </form>
    </div>
 )
}
export default Registerform