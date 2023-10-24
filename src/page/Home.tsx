import { useEffect, useState } from 'react';
import '../style/style.css';
import alerta from "../assets/gifs-de-alerta-5.gif";
import paisagem from "../assets/9169455-ceu-dourado-por-do-sol-na-costa-natureza-paisagem-vetor.jpg";
import sirene from "../aud/alarm-no3-14864.mp3";
import natureza from "../aud/birds-frogs-nature-8257.mp3";
import bob from "../aud/que-es-eso-bob-esponja.mp3";

export default function Home() {
    const themeStorage = localStorage.getItem("theme")

    const [theme, setTheme] = useState<string>(themeStorage ? themeStorage : 'dark');
    const [audio, setAudio] = useState(new Audio(theme === 'light' ? sirene : natureza));

    const toggleTheme = () => {
        let value = theme
        if (theme == 'dark') {
            setTheme('light');
            value = 'light'
        }
        else {
            setTheme('dark')
            value = 'dark'
        }
        localStorage.setItem("theme", value)
    };

    useEffect(() => {
        const newAudio = new Audio(theme === 'light' ? sirene : natureza);
        newAudio.volume = theme === 'light' ? 0.5 : 0.05;
        newAudio.loop = true;
        audio.pause();
        newAudio.play();
        setAudio(newAudio);
    }, [theme]);

    return (
        <div className={`${theme}-theme`}>
            <button onClick={toggleTheme}>mudar tema</button>
            <h1>Olá {document.cookie.split("=")[1]}</h1>
            <h2>{theme === 'dark' ? "sua Página está muito bonita" : "🤮🤮 QUE COISA HORROROSA ESSA SUA PÁGINA, MUDA PRO TEMA ESCURO 🤮🤮"}</h2>
            <p>Sua pagina está no tema {theme}</p>
            <img src={theme === 'light' ? alerta : paisagem} alt="alerta" />
            {
                theme === 'light' &&
                <audio src={bob} autoPlay></audio>
            }
        </div>
    );
}
