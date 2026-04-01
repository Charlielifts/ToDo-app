import axios from "axios"

const Loginform = ({active, showPassword, setShowPassword, messageType, setMessageType, message, setMessage, username, setUsername, password, setPassword}) => {



    const handlelogin = async (e) => {
        e.preventDefault();

        try { 
            const res = await axios.post("http://localhost:5000/auth/login", {
            username,
            password,
            });
            console.log(res.data);
            setMessageType("success");
            setUsername("");
            setPassword("");
            console.log("MESSAGE SET:", res.data.message);
        } catch (err) {
            console.error(err.response?.data || err.message);
            setMessage(err.response?.data?.message || "Something went wrong");
            setMessageType("error");
        }
    };


  return(
        <div className={`absolute right-0 w-1/2 h-full flex items-center text-center p-15 z-30
        transition-all duration-600 delay-200
        ${active ? "`translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}>
            <form className="w-full" onSubmit={handlelogin} >
                    <h1 className={`text-2xl font-Gummy font-bold mb-6 cursor-default
                    transition-all duration-600 opacity-100 delay-200 ${active ? "translate-x-full opacity-0" : "translate-x-0 opacity-100" }`}>
                        Log in
                    <i class="fa-solid fa-arrow-right-to-bracket"></i></h1>

                <div className={`relative my-6 transition-all duration-600 opacity-100 delay-150 ${active ? "translate-x-full opacity-0" : "translate-x-0 opacity-100" }`}>
                    < input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full py-3 pl-5 pr-10 bg-gray-300 rounded-full outline-none"
                    />

                </div>

                <div className={`relative my-6 transition-all duration-600 opacity-100 delay-100 ${active ? "translate-x-full opacity-0" : "translate-x-0 opacity-100" }`}>
                    <input
                    type={showPassword ? "text" : "password" }
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-3 pl-5 pr-10 bg-gray-300 rounded-full outline-none"
                    />

                   <button type="button" onClick={() => setShowPassword(prev=> !prev)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                        {showPassword ? ( <i className="fa-solid fa-eye"></i>) : ( <i class="fa-regular fa-eye-slash"></i>)}
                    </button>

                </div>

                <button
                type="submit"
                className={`w-full h-12 bg-amber-500 text-black rounded-full font-semibold hover:bg-amber-600 hover:scale-105 transition 
                duration-300 cursor-pointer transition-all duration-600 opacity-100 delay-50 
                ${active ? "translate-x-full opacity-0" : "translate-x-0 opacity-100" }`} >
                    Log in
                </button>
                    {message && (
                    <p className={`mt-3 text-center text-sm font-semibold
                        ${messageType === "success" ? "text-green-700" : "text-red-600"}`}
                    >
                        {messageType === "success" ? "🎉" : (<i className="fa-solid fa-exclamation-circle"></i>)} {message}
                    </p>
                    )}
             </form>
        </div>
    )
} 
export default Loginform