import React from 'react';
import Slider from 'react-animated-slider';
import photo1 from '../../../svg/photo1.jpg';
import photo2 from '../../../svg/photo2.jpg';
import photo3 from '../../../svg/photo3.jpg';
import photo4 from '../../../svg/photo4.jpg';
import photo5 from '../../../svg/photo5.jpg';
import './index.scss';


const images = [
    {
        //title: "Vous avez plus de 4h d'escale ? ",
        image: photo1
    },
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
        image: photo5
    },
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