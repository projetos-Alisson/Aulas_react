import {useState} from 'react'

function Form(){
    
    function cadastrarUsuario(e){
        e.preventDefault()
        // console.log(nome)
        // console.log(senha)
        console.log('Usuário cadastrado.')
        console.log(`Usuário ${nome} entrou com a senha ${senha}`)
    }

    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome"
                        onChange={(e) => setNome(e.target.value)}

                    />

                </div>
                <div>
                        <label htmlFor="senha">Senha:</label>
                        <input
                        type="password" 
                        id="senha" name="senha" 
                        placeholder="Digite sua senha" 
                        onChange={(e) => setSenha(e.target.value)} 
                    />
                </div>
                <div>
                    <input type="submit" value="ENVIAR"></input>
                </div>
            </form>
        </div>
    )
}

export default Form