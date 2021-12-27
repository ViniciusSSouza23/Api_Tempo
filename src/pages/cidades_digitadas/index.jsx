import {Container,Card,List,ListItem,Title} from "../cidades_localizacao/styles";
import {Button, InputArea} from "./styles";
import {GoSearch} from "react-icons/go";
import {useState} from "react";
import axios from "axios";
import UseForm from "./useform";




function Pesquisa()
{
    
    const [controller, setController]=useState(false);
   
    const [wheather,setwheather] = useState(false);

    let getWheather = async(cidade)=>{
        let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?`, 
        {
            params:
            {
                q:cidade,
                appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
                lang:"pt",
                units: "metric"

            }
        });
        setwheather(res.data);
        console.log(res.data)
    }
   const [{values,loading},handleChange,handleSubmit] = UseForm();

        const enviarCidade=()=>
        {
            
           if(values.cidade===undefined)
           {
                alert("Digite uma cidade valida")
               
           }
            else
            {
                getWheather(values.cidade);
                setController(true);
            }
        }

    
   return(
    controller===false ? (
        
            <Container>
                <form onSubmit={handleSubmit(enviarCidade)}  >
                <InputArea name="cidade" id="cidade"  type="text" placeholder="Digite a cidade" onChange={handleChange} ></InputArea>
                <Button type="submit"><GoSearch/></Button>
                </form>
            </Container>
       
    ) : (
        wheather === false ? (
            <Container><h1>Carregando informações</h1></Container>
           
        ) : (
            <Container>
                <Card>
                    <Title>Previsão do tempo para {wheather.name}</Title>
                    <List>
                        <ListItem> Tempo : {wheather.weather[0].description } </ListItem>
                        <ListItem>Temperatura: {wheather.main.temp}°C </ListItem>
                        <ListItem>Pressão do ar: {wheather.main.pressure}</ListItem>
                        <ListItem>Sensação Térmica: {wheather.main.feels_like} °C </ListItem>
                        <ListItem>Umidade relativa do ar: {wheather.main.humidity}% </ListItem>
                    </List>
                </Card>
            </Container>
        )
       
    )
   );
    
}

export default Pesquisa;