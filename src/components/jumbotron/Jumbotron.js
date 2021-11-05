import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import img from '../../images/shark.jpg';

const Styles = styled.div`
.jumbo{
    background: url(${img}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
    padding-top: 80px;
}
.overlay{
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 100px;
    left:0;
    bottom: 200px;
    right: 0;
    z-index: -1;
}
`;


const Jumbotron = ()=>{
    return(
            <Styles>
                <div className="jumbo">
                    <div className="overlay">
                    
                    <Container>
                        <h1>
                            Lorem, ipsum dolor.
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, natus.
                        </p>
                    </Container>
                    </div>
                </div>
            </Styles>

    )
}

export default Jumbotron;