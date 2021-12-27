import React,{useState,useEffect} from "react";
import axios from "axios";
import {Container, Title,Card, List, ListItem} from "./styles";



function Localizacao()
{
    const [location,setLocation]= useState(false);
    const [wheather,setWheater] = useState(false);

    let getWheather = async(lat,long) =>{
        let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather`,
        {
            params:
            {
                lat: lat,
                lon: long,
                appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
                lang: "pt",
                units: "metric"
            }
        }
        
        );
        setWheater(res.data);
       
    }

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            getWheather(position.coords.latitude, position.coords.longitude);
            setLocation(true);
            
            
        });
    },[]);

    if(location===false)
    {
        return (
        <Container>
            <Title>Você precisa permitir que o navegado acesse sua localização</Title>
        </Container>);
    }
     else
    {
        return(
           wheather === false ? ( 
           <Container>
               <h1>Carregando informações</h1>
            </Container> ) :
          ( 
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
        );
    }

    
}


export default Localizacao;