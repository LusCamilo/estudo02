import { useState } from 'react'
import '../style/style.css'

export default function Login() {

    const [name, setName] = useState<string>("")
    const [alertMessage, setAlertMessage] = useState<string | null>(null);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        if (name.trim() === "") {
            e.preventDefault()
            setAlertMessage("Rapaz, ta achando que é brincadeira? digita alguma coisa ali onde eu falei.");
        } else {
            setAlertMessage(null)
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 30);
            const cookieValue = encodeURIComponent(name) + (`; expires=${expirationDate.toUTCString()}`);
            document.cookie = `userName=${cookieValue}`;
        }
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Login</h1>
            <h2 style={{ textAlign: 'center' }}>passa o seu Nome manito</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Digita aí...' onChange={(value) => {
                    setName(value.target.value)
                }} />
                <button type='submit'>Entrar</button>
            </form>
            {alertMessage && <p style={{ textAlign: 'center' }}>{alertMessage}</p>}
        </div>
    )
}
