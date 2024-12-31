export default function LoginButton (){

    const handleLogin = () => {
       const NEXT_PUBLIC_BACKEND_URL = "http://localhost:5000"
        window.location.href = `${NEXT_PUBLIC_BACKEND_URL}/auth/github`;
    };
    
return(
<div>
    <button onClick={handleLogin}>Login in now</button>
</div>
)
}