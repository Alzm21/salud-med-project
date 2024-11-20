import { useEffect, useState } from 'react'
import '../components/HeroCarousel.css'

const HeroCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000)
        return () => clearInterval(interval)

    }, [images.length])
  
  return (
    <div className='main__carousel '>
        {images.map((image, index) => (
            <div key={index} 
                className={`carousel__slide ${
                    index === currentIndex ? "carousel__slide--active" : ""
                }`}
                style={{ backgroundImage: `url(${image})` }}>
            </div>
        ))}

        <div className='c__indicators'>
            {images.map((_, index) => (
                <button key={index}
                className={`c__indicator ${
                    index === currentIndex ? 'c__indicator--active' : ''
                }`}
                onClick={() => setCurrentIndex(index)}>
                </button>
            ))}
        </div>
    </div>
  )
}

export default HeroCarousel