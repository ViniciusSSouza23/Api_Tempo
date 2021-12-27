
import {Button, Container,Texto,Title} from "./styles";

import 'bootstrap/dist/css/bootstrap.min.css';


function Card(props)
{
    return(
        <Container>
            <Title>{props.title}</Title>
            <Texto>{props.texto}</Texto>
            <Button href={props.redirect} className="btn btn-lg btn-primary rounded-pill">{props.text}</Button>
        </Container>
    ); 
}

export default Card;