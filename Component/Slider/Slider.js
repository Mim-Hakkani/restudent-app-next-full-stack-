import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay,Parallax, Pagination } from "swiper";


const reviews = [
    {
        id:1,
        name:'hakkani',
        pro:'web designer',
        quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, impedit.',
        
    },

    {
        id:2,
        name:'Munna',
        pro:'React Dedeloper',
        quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, impedit.'
    },

    {
        id:3,
        name:'Najmul',
        pro:'Node Developer',
        quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, impedit.'
    }

]

const Slider = () => {

    
 

    return (
        <div id="review"> 

        <Swiper
        style={{
          "--swiper-pagination-color": "#ab2f52",
          height:'350px'
        }}
        speed={600}
        parallax={true}

        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
       

        modules={[Parallax, Pagination,Autoplay]}
        className="mySwiper"
      >
     

        {
            reviews.map(review=>
                    
              
                <SwiperSlide   key={review.id} >
                

              
                   
                
                      <p> {review.quote}</p> 
                  
        
                
                    <p> {review.name}</p>
               
        
                    
                          <p> {review.pro}</p>
                   
                </SwiperSlide>
                )
        }


      </Swiper>
      </div>
    );
};

export default Slider;