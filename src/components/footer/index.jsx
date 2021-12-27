import { Fragment } from "react";
import {Footers,P,Link} from "./styles";


function Footer()
{
    return(
        <Fragment>
            <Footers>
                <P>Desenvolvido por <Link target="_blank" href="https://www.linkedin.com/in/vinicius-souza-b89719141/">Vinicius Souza</Link></P>
            </Footers>
        </Fragment>
    );
}

export default Footer;