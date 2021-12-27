import {Fragment} from "react";
import {Navbar,NavbarBrand,NavItem,NavLink,Nav,} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar()
{
    return(
    <Fragment>
        
        <Navbar color="dark" dark expand="md" fixed="" >
            <NavbarBrand href="/">
            App do Tempo
            </NavbarBrand>
            
            
            <Nav className="me-auto"
                navbar>
                <NavItem>
                    <NavLink href="/">Inicio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/localizacao">
                        Localização
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="pesquisa">
                        Pesquisa
                    </NavLink>
                </NavItem>
                
            </Nav>
        
        
        </Navbar> 
    </Fragment>
    );
}

export default NavBar;