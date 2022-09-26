function Evento({palavra}){

    function meuEvento(){
        console.log(`Opa! Fui ativado! ${palavra}`)
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>ATIVAR</button>
        </div>
    )
}

export default Evento;