import React from 'react';
import Slider from 'react-animated-slider';
import photo1 from '../../../svg/photo1.jpg';
import photo2 from '../../../svg/photo7.jpg';
import photo3 from '../../../svg/photo8.jpg';
import photo4 from '../../../svg/photo3.jpg';
import './index.scss';


const images = [
    {
        image: photo2
    },
    {
        image: photo3
    },
    {
        image: photo4
    },
    {
        //title: "Vous avez plus de 4h d'escale ? ",
        image: photo1
    }
]
const Carousel = () => (<div className='carousel-container'>< Slider infinite={true} autoplay={5000} >
    {
        images.map((article, index) => <div key={index}>
            <div
                key={index}

                style={{ background: `url('${article.image}') no-repeat center/90%` }}
            >
                <div className="center">
                    <div className='left-div'>
                        {article.data}
                    </div>
                    <div className='right-div'>
                        <h1>{article.title}</h1>
                    </div>
                </div>
            </div>
        </div>)
    }
</Slider ></div>)

export default Carousel