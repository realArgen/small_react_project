import React from "react";
import { Carousel } from "react-bootstrap";
import sea from '../../images/ocean.jpg';
import sea2 from '../../images/sea-2.jpg';
import sea3 from '../../images/sea-3.jpg';

const Slider = ()=>{
    return(
        <div>
            <Carousel>


                <Carousel.Item style={{'height':'580px'}}>
                    <img className="d-block w-100"
                    src={sea}
                    alt="First slide" />

                <Carousel.Caption>
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Carousel.Caption>
                </Carousel.Item>



                <Carousel.Item style={{'height':'580px'}}>
                    <img className="d-block w-100"
                    src={sea2}
                    alt="Second slide" />

                <Carousel.Caption>
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Carousel.Caption>
                </Carousel.Item>



                <Carousel.Item style={{'height':'580px'}}>
                    <img className="d-block w-100"
                    src={sea3}
                    alt="Third slide" />

                <Carousel.Caption>
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Carousel.Caption>
                </Carousel.Item>



            </Carousel>



        </div>
    )
}

export default Slider;