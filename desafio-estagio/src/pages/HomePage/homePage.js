import React from "react"
import { useForm } from "./hooks/useForm"

const HomePage = () => {
  const {form, onChange, cleanFields} = useForm({
    nome: "", 
    idade: "", 
    email: ""
  })


  const handleLogin = (e) =>{
    e.preventDefault()
    console.log("Formulário enviado", form);
    
    cleanFields()
  }
  
  return(
    <>
    <h1>Dados HomePage</h1>
    <form onSubmit={handleLogin} >
      <input 
      placeholder="nome"
      value={form.nome}
      name="nome"
      onChange={onChange}
      type="text"
      pattern ={"^.{3,}"}
      title={"Seu nome deve conter no mínimo 3 letras"}
      required
      />
      <input 
      placeholder="email"
      value={form.email}
      name="email"
      onChange={onChange}
      type={"email"}
      
      required
      />
      <input 
      placeholder="telefone"
      value={form.telefone}
      name="telefone"
      onChange={onChange}
      type={"number"}
      min={18}
      required
      />

<input 
      placeholder="CPF"
      value={form.cpf}
      name="cpf"
      onChange={onChange}
      type={"number"}
      min={18}
      required
      />
      <br/><br/>
      <button>Enviar</button>
      </form>
    </>
  )
}
export default HomePage