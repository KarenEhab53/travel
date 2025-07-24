import React, { useEffect } from 'react'
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboard2Check } from "react-icons/bs";
import img from '../../Assets/img (1).jpg';
import img2 from '../../Assets/img (2).jpg';
import img3 from '../../Assets/img (3).jpg';
import img4 from '../../Assets/img (5).jpg';
import img5 from '../../Assets/img (4).jpg';
import img6 from '../../Assets/img (6).jpg';
import img7 from '../../Assets/img (8).jpg';
import img8 from '../../Assets/img (7).jpg';
import img9 from '../../Assets/img (9).jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
  {
    id: 1,
    imgSrc: img,
    desTitle: "Bora Bora",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.",
  }
  ,
  {
    id: 2,
    imgSrc: img2,
    desTitle: "Maui",
    location: "Hawaii, USA",
    grade: "Adventure Beach",
    fees: "$850",
    description:
      "Maui is a dream destination for surfers and beach lovers. With stunning beaches, waterfalls, and scenic routes, it's a paradise for adventure enthusiasts.",
  }
  ,{
    id: 3,
    imgSrc: img3,
    desTitle: "Santorini",
    location: "Greece",
    grade: "Romantic Getaway",
    fees: "$600",
    description:
      "Santorini is known for its whitewashed buildings, blue-domed churches, and beautiful sunsets. A top destination for couples seeking romance.",
  },
  {
    id: 4,
    imgSrc: img4,
    desTitle: "Kyoto",
    location: "Japan",
    grade: "Cultural Retreat",
    fees: "$500",
    description:
      "Kyoto is a historic city filled with temples, gardens, and traditional tea houses. It's a perfect destination to immerse yourself in Japanese culture.",
  },
  {
    id: 5,
    imgSrc: img5,
    desTitle: "Maldives",
    location: "Indian Ocean",
    grade: "Luxury Relax",
    fees: "$1000",
    description:
      "The Maldives offers stunning overwater bungalows and crystal-clear waters. A luxurious destination ideal for honeymooners and vacationers seeking tranquility.",
  }
  ,
  {
    id: 6,
    imgSrc: img6,
    desTitle: "Paris",
    location: "France",
    grade: "Romantic City Break",
    fees: "$1200",
    description:
      "Known as the city of love, Paris offers iconic landmarks, world-class cuisine, and charming streets. A top destination for art and romance lovers.",
  },
  {
    id: 7,
    imgSrc: img7,
    desTitle: "Bali",
    location: "Indonesia",
    grade: "Spiritual Adventure",
    fees: "$700",
    description:
      "Bali is a beautiful island known for its lush landscapes, vibrant culture, and spiritual retreats. It offers a perfect mix of adventure and relaxation.",
  },
  {
    id: 8,
    imgSrc: img8,
    desTitle: "Rome",
    location: "Italy",
    grade: "Historical Tour",
    fees: "$950",
    description:
      "Rome is a city filled with ancient history and stunning architecture. Visit the Colosseum, Vatican City, and enjoy authentic Italian cuisine.",
  },
  {
    id: 9,
    imgSrc: img9,
    desTitle: "Sydney",
    location: "Australia",
    grade: "Urban Adventure",
    fees: "$1100",
    description:
      "Sydney offers a vibrant city experience with iconic landmarks like the Sydney Opera House and Harbour Bridge, along with beautiful beaches.",
  },
];

const Main = () => {
  useEffect(() =>{
    Aos.init({duration: 2000})
      },[])
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most Visited destination</h3>
      </div>
      <div className="secContent grid">
        {
          Data.map(({ id, imgSrc, desTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination" data-aos="fade-up">
                <div className="imageDiv">
                  <img src={imgSrc} alt={desTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="desTitle">{desTitle}</h4>
                  <span className="continent flex"><HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    Details <BsClipboard2Check className='icon' />
                  </button>
                </div>

              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main