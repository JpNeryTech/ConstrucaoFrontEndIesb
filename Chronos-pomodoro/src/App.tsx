import "./styles/theme.css"
import"./styles/global.css"

export function App() {
    return (
        <>
        {/*Seção 1: Logo*/}
        <div className='container'>
            <div className='content'>
                <p>Logo do App</p>
            </div>
        </div>
        
        {/*Seção 2: Menu*/}
        <div className='container'>
            <div className='content'>
                <p>Menu de Navegação</p>
            </div>
        </div>

        {/*Seção 3: Formulario / cronometro*/}
        <div className='container'>
            <div className='content'>
                <p>Área do Cronometro</p>
            </div>
        </div>

        {/*Seção 4: Footer*/}
        <div className='container'>
            <div className='content'>
                <p>Rodapé da Página</p>
            </div>
        </div>
        </>
    );
}