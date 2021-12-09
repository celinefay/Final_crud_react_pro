import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {  
    Navbar,
    NavbarBrand,
    Container,
} from 'reactstrap';


const WrapperDiv = styled.div`
    display: inline-block;
    position: relative;
    left: 13rem;
    text-align: right;
    justifyContent: space-between;
`;


export const Heading = () => {
    return (
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand href="/"> My Contacts </NavbarBrand>  
                <WrapperDiv> 
                <Link className="btn btn-primary" to="/add"> Add User </Link>               
                </WrapperDiv> 
            </Container>
        </Navbar>
    )
}

// key={user.id}