import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "./images/image145.png"
import image2 from "./images/removebg.png"
import image13 from "./images/image13.jpg"
import image12 from "./images/image12.jpg"
import image9 from "./images/image9.jpg"
import image6 from "./images/image6.jpg"
import image7 from "./images/image7.jpg"
import image8 from "./images/image8.jpg"
import bg from "./images/baground.mp4"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Header from './Components/Header';
import Content1 from './Components/Content1';
import { Link } from 'react-router-dom';
import Content2 from './Components/Content2';
import Content3 from './Components/Content3';
import Content4 from './Components/Content4';
import Content5 from './Components/Content5';
import Content6 from './Components/Content6';
import Content7 from './Components/Content7';
import Footer from './Components/Footer';
import Rights from './Components/Rights';

export default function App() {
  return (
    <>
      <Header />
      
       <div className='section'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper" 
        >
          
          <SwiperSlide><div className='container-img'>
            {/* <img src={image6} alt="" /> */}
            <video  autoPlay muted loop >
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            <div className='inside-swiper'>
             <div className='slider-content'>
          {/* <h3>Welcome to AGRI-FERTI-FARM</h3> */}
          <h1><div><span>A</span>griculture</div> <div><span>M</span>atter<img src={image2} alt="" /></div> </h1>
          <h2>Good production...</h2>
          <p>Agriculture is the backbone of human civilization, providing food and resources essential for survival. Sustainable farming practices ensure that future generations can continue to benefit from healthy, productive lands.
</p>
<p className='discover'><Link>Discover more</Link></p>
             </div>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide><div className='container-img'><img src={image7} alt="" />
          <div className='inside-swiper'>
            <div className='remove-bg'>
              {/* <img src={image1} alt="" /> */}
            <div className='shops-define'>
         <h1>FERTILIZER & TECHNOLOGY</h1>
         <h2>FARMER SHOP</h2>
         <p>Using the right fertilizer combined with modern technology can significantly boost crop yields and soil health. Embrace innovation to enhance efficiency and maximize your farm's potential.</p>

         </div>
            </div>
          
            </div>
         </div></SwiperSlide>
         
          <SwiperSlide><div className='container-img'><img src={image9} alt="" />
            <div className='inside-swiper'>
            <div className='remove-bg'>
              {/* <img src={image1} alt="" /> */}
            <div className='shops-define'>
         <h1>EXPERT ADVICE & FORCASTS</h1>
         <h2>FARMER CORNER</h2>
         <p>"Farmer Corner" can refer to an online or physical space dedicated to providing farmers with information, resources, and services to enhance their agricultural practices.</p>

         </div>
            </div>
            </div></div></SwiperSlide>
          <SwiperSlide><div className='container-img'><img src={image12} alt="" />
            <div className='inside-swiper'>
            <div className='shops-define'>
         <h1>SELLER & BUYER MARKET</h1>
         <h2>AGRIMART</h2>
         <p>
         AgriMart is a platform aimed at bridging the gap between farmers and consumers by offering a marketplace for agricultural products such as seeds, fertilizers, tools, and crops.</p>
         </div>
      
            </div></div></SwiperSlide>
          <SwiperSlide><div className='container-img'><img src={image13} alt="" />
            <div className='inside-swiper'>
            <div className='remove-bg'>
              {/* <img src={image1} alt="" /> */}
            <div className='shops-define'>
         <h1>SCHEME & INFORMATION</h1>
         <h2>GOVERNMENT HELP</h2>
         <p>The Government of India has launched several schemes to support the agricultural sector and improve the livelihood of farmers.</p>

         </div>
            </div>
            </div></div></SwiperSlide>



        </Swiper>
        
      </div>
      <Content1/>
      <Content2/>
      <Content3/>
      <Content4/>
      <Content5/>
      <Content6/>
      <Content7/>
     <Footer/>
     <Rights/>
    </>
  );
}
