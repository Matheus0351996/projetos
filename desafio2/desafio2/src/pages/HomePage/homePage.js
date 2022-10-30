import useForm from "../../hooks/useForm";

const homePage = () => {

  const { form, onChange, cleanFields } = useForm({
    name:"",
    email:"",
    telefone:"",
    cpf:"",
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    console.log('Formulário enviado', form);
    cleanFields();

    return(
        <>
    <h1>Dados Pessoais</h1>
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
      min={18}  // Adicionar aqui uma máscara de telefone
      
      required
      />

      <input 
      placeholder="CPF"
      value={form.cpf}
      name="cpf"
      onChange={onChange}
      type={"number"}
      min={18}  // Adicionar aqui uma máscara de cpf
      
      required
      />

      <br/><br/>
      <button>Enviar</button>
      </form>
        </>
    )
}}
export default homePage;