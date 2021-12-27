// @ts-nocheck
import {Fragment} from "react";
import { Container } from "./styles";
import Card from "../../components/card/index";


function Home()
{
    let texto_localizacao = "Nessa opção de pesquisa na API, você irá permitir com que o navegador tenha acesso a sua localização. Através dessa localização a API irá fornecer a temperatura atual da sua localização, velocidade do vento e também a sensação térmica. ";
    let texto_pesquisa = "Nessa opção de pesquisa na API, você irá digitar o nome da cidade que deseja, então uma consulta a API será feita através dos dados informados. Cuidado apenas com a escrita, cidades internacionais devem ser escritas em inglês por exemplo: Londres será London.";
    return(
        <Fragment>
            
            <Container>
            <Card title = "Localização" texto ={texto_localizacao} redirect="/localizacao" text="Pesquise"/>
            <Card title="Nomes" texto={texto_pesquisa} redirect="/pesquisa" text="Pesquise"/>
            </Container>
            
        </Fragment>
    );
}

export default Home;