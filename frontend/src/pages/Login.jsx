import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import TogglePanel from "../components/togglepanel";

const Login = () => {

    const[active, setActive] = useState(false);
    const[showPassword, setShowPassword] = useState(false);
    const[seeCoPassword, setSeeCoPassword] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState ("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
return (
    <div className="min-h-screen flex items-start pt-10 sm:pt-16 md:pt-20 justify-center bg-linear-to-r from-red-700 to-amber-400 p-4">
        <div className={`relative w-212.5 h-137.5 bg-white m-5 rounded-[2vw] shadow-2xl overflow-hidden ${active ? "active" : ""}`}>
            
            <LoginForm 
            active={active} 
            showPassword={showPassword} setShowPassword={setShowPassword}
            messageType={messageType} setMessageType={setMessageType}
            message={message} setMessage={setMessage}
            username={username} setUsername={setUsername}
            password={password} setPassword={setPassword}       
            />
            
            <RegisterForm 
            active={active} 
            showPassword={showPassword} setShowPassword={setShowPassword} 
            seeCoPassword={seeCoPassword} setSeeCoPassword={setSeeCoPassword}
            messageType={messageType} setMessageType={setMessageType} 
            message={message} setMessage={setMessage}
            username={username} setUsername={setUsername}
            password={password} setPassword={setPassword}    
            email={email} setEmail={setEmail}
            confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}
            />
            
            <TogglePanel 
            active={active} 
            setActive={setActive} 
            setMessage={setMessage}
            setMessageType={setMessageType}
            username={username} setUsername={setUsername}
            password={password} setPassword={setPassword}/>


         </div>
    </div>

    );
};
export default Login