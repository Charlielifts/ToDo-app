
const Registerform = ({active, showPassword, setShowPassword, setSeeCoPassword, seeCoPassword}) => {
 return ( 
    <div className={`absolute left-0 w-1/2 h-full flex items-center text-center p-15 z-30
    transition-all duration-600 delay-300
    ${active ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
        <form className="w-full">
                <h1 className={`text-3xl font-Gummy font-bold mb-6 cursor-default 
                transition-all duration-700 delay-300
                ${active ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
                     Register
                <i class="fa-solid fa-align-center"></i></h1>

            <div className={`relative my-6 transition-all duration-600 opacity-100 delay-250 ${active ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0" }`}>
                <input
                    type="text"
                    placeholder="Username"
                    className=" w-full py-3 pl-5 pr-10 bg-gray-300 rounded-full outline-none"
                />
            </div>

            <div className={`relative my-6 transition-all duration-600 opacity-100 delay-200 ${active ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0" }`}>
                <input
                    type="email"
                    placeholder="Email"
                    className=" w-full py-3 pl-5 pr-10 bg-gray-300 rounded-full outline-none"

                />
            </div>
            
            <div className={`relative my-6 transition-all duration-600 opacity-100 delay-150 ${active ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0" }`}>
                <input 
                    type= {showPassword ? "text" : "password"}
                    placeholder="Input your Password"
                    className=" w-full py-3 pl-5 pr-10 bg-gray-300 rounded-full outline-none" 
                />

                <button type="button" onClick={() => setShowPassword(prev => !prev)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                    {showPassword ? ( <i class="fa-solid fa-eye"></i>) : ( <i class="fa-regular fa-eye-slash"></i>)}
                </button>

            </div>

            <div className={`relative my-6 transition-all duration-600 opacity-100 delay-100 ${active ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0" }`}>
                <input 
                    type={seeCoPassword ? "text" : "Password"}
                    placeholder="Confirm your Password"
                    className=" w-full py-3 pl-5 pr-10 bg-gray-300 rounded-full outline-none" 
                />

                <button type="button" onClick={() => setSeeCoPassword(prev => !prev)}
                    className="absolute right-3 top-2/10 transform -transalate-y-1/2 cursor-pointer">
                    {seeCoPassword ? (<i class="fa-solid fa-eye"></i>) : <i class="fa-regular fa-eye-slash"></i>}
                </button>

            </div>

            <button className={`w-full py-3 pl-5 pr-10 bg-amber-500 rounded-full font-semibold hover:bg-amber-600 hover:scale-105 transition duration-300 cursor-pointer
            duration-600 opacity-100 delay-50 ${active ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0" }`}>
                Register
            </button>
        </form>
    </div>
 )
}
export default Registerform