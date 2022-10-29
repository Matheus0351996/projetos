
import useForm from "./hooks/useForm";
import Router from "./routes/Router";
import GlobalState from "./global/GlobalState";

const App = () => {
  // const { form, onChange, cleanFields } = useForm({
  //   name:"",
  //   email:"",
  //   telefone:"",
  //   cpf:"",
  // });

  // const handleInputChange = (event) => {
  //   event.preventDefault();
  //   console.log('Formulário enviado', form);
  //   cleanFields();

  return(
<GlobalState>
  <Router/>
</GlobalState>
  )
}

export default App;
