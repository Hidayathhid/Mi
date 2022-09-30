import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
const Slider = ({start}) => {
  return (
    <Carousel>
    {
        start.map((item, index)=>{
            <Carousel.item>
                <img className="d-block w-100"
                src=""
                alt="First slide" 
                    
                />
            </Carousel.item>

        })
    }
    </Carousel>
  );
}

export default Slider