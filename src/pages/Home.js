import React from "react";
import Slider from "../components/slider/Slider";
import Jumbotron from "../components/jumbotron/Jumbotron";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import sea from '../images/shark.jpg'

const Home = ()=>{
    return (
        <div>
            <Slider/>

            <Container style={{paddingTop:'2rem', paddingBottom:'2rem'}}>
                <Row>
                    <Col>
                        <Card style={{width:'18rem'}}>
                            <Card.Img
                                src={sea}
                                variant='top'
                            />

                            <Card.Body>
                                <Card.Title>
                                    Lorem, ipsum.
                                </Card.Title>
                                <Card.Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </Card.Text>
                                <Button varian='primary'>
                                    Learn More
                                </Button>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col>
                        <Card style={{width:'18rem'}}>
                            <Card.Img
                                src={sea}
                                variant='top'
                            />

                            <Card.Body>
                                <Card.Title>
                                    Lorem, ipsum.
                                </Card.Title>
                                <Card.Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </Card.Text>
                                <Button varian='primary'>
                                    Learn More
                                </Button>
                            </Card.Body>
                        </Card>
                        </Col>
                    <Col>
                        <Card style={{width:'18rem'}}>
                            <Card.Img
                                src={sea}
                                variant='top'
                            />

                            <Card.Body>
                                <Card.Title>
                                    Lorem, ipsum.
                                </Card.Title>
                                <Card.Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </Card.Text>
                                <Button varian='primary'>
                                    Learn More
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


            <Jumbotron/>

            <Container style={{paddingTop:'30px', paddingBottom:'30px'}}>
                <Row>
                    <Col md={7}>
                        <img 
                        height={400}
                        src={sea} 
                        alt="sea" />
                    </Col>
                    <Col md={5}>
                        <h2>Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, quia. Voluptatum mollitia dignissimos obcaecati excepturi, voluptate nam ipsum beatae sunt.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;