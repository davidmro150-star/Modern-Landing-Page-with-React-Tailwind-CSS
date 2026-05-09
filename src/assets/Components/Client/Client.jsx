import React, { useState } from "react";
import image from "../../images/client.png";
import image2 from "../../images/client2.png";
import image3 from "../../images/client3.png";
import image4 from "../../images/client4.png";
const Client = () => {

  const [active, setActive] = useState(0);

  const slides = [
    { image: image, title: "Excellent Team!", name: "Farhan Rio", role: "Happy Seller" },
    { image: image2, title: "Great Service", name: "Alizabeth Nancy", role: "Happy Seller" },
    { image: image3, title: "The Best Agency!", name: "Jenny Wilson", role: "Happy Seller" },
    { image: image4, title: "Awesome Work", name: "John Doe", role: "Client" },
  ];

  const views = [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 0],
  ];

  const currentView = views[active];

  return (
  <section className="mt-23">
  <div className="container mx-auto">

    <div className='flex text-center justify-center'>

            <h3 className=' font-lato font-semibold text-[45px] text-[#1B1B1B] leading-13.5 mb-12'>What our clients saying</h3>
    </div>

       
           <div className=" ">
           <div className="flex gap-6">

            {currentView.map((index) => {
            const item = slides[index];

            return (

            <div className='flex flex-cols-3 mb-11.75'>
                  
                  
            <div className='flex flex-col  bg-[#FFFFFF] border-[2px] border-[#F1F1F1] items-center text-center  p-20 rounded-[15px] shadow-[0px_0px_20px_2px_rgba(0,0,0,0.08)] relative group'>
              
                    
            <div className='mt-11.75'>
                      
            <svg className='absolute text-white hover:text-white transition duration-300 ' width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="21.5" cy="21.5" r="21.5"  className="fill-black group-hover:fill-green-500 transition duration-300"/>
<g clip-path="url(#clip0_38_232)">
<path d="M25.3061 21.7562C27.1012 20.8317 29.7957 21.4903 31.0727 23.1368C32.3141 24.7358 32.3489 26.8825 31.2404 28.699C29.9584 30.7999 27.5372 30.9574 25.9487 30.4739C24.0398 29.892 22.9139 28.4923 22.2621 26.7132C21.3437 24.2056 21.5662 21.7054 22.6639 19.2953C23.8912 16.5992 25.9354 14.6659 28.4713 13.2203C28.7943 13.0361 29.1364 12.8869 29.4585 12.701C29.6354 12.5984 29.7184 12.6509 29.8189 12.8043C30.1095 13.2462 30.4051 13.6847 30.7198 14.109C30.8552 14.2916 30.8269 14.3616 30.6368 14.4683C29.2227 15.2611 27.9681 16.2474 26.9858 17.5562C26.0517 18.8017 25.5095 20.2048 25.3052 21.7571L25.3061 21.7562Z" fill="currentColor"/>
<path d="M13.7271 21.751C15.7025 20.7072 19.3485 21.5576 20.2751 24.6921C20.9718 27.0489 19.5511 29.9701 17.1605 30.527C15.1304 31.0005 13.3676 30.4995 11.9693 28.9122C10.4498 27.1881 9.98648 25.1182 10.1484 22.8848C10.3933 19.5051 12.0781 16.9024 14.599 14.7757C15.5929 13.937 16.6922 13.2609 17.8622 12.6982C18.0199 12.6223 18.1013 12.6207 18.2051 12.7824C18.4974 13.2351 18.8004 13.6819 19.1234 14.1129C19.2654 14.303 19.2164 14.3664 19.0346 14.4689C17.6006 15.2717 16.3352 16.2763 15.3471 17.6076C14.4711 18.789 13.9546 20.1187 13.728 21.5676C13.7188 21.6259 13.7271 21.6859 13.7271 21.751Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_38_232">
<rect width="21.9216" height="18.0531" fill="currentColor" transform="translate(10.1176 12.647)"/>
</clipPath>
</defs>
            </svg>

            <img
            src={item.image}
            className="w-37 mb-3.75"
            alt=""
            />
            </div>
                    
            <h3 className="font-lato font-semibold text-[#1B1B1B] text-[24px] leading-7.5 mb-1">
            {item.title}
            </h3>

                    
            <div className="flex gap-1.5 mb-5">
            {Array(5).fill(0).map((_, i) => (
            <svg
            key={i}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="gold"
            >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 
            9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 
            4.73L5.82 21z"/>
            </svg>
            ))}
            </div>
            <p className='font-lato font-regular text-[#7B7B7B] text-[16px] leading-6 mb-3.75'>
            The customer service team at this company was very responsive and helpful when I had questions about their products.
            </p>


                  

            <h4 className="font-medium text-gray-80font-lato font-semibold text-[#1B1B1B] text-[18px] leading-7.5 ">
            {item.name}
            </h4>

            <p className="font-lato font-regular text-[#7B7B7B] text-[14px] leading-6">
            {item.role}
            </p>

                   

            </div>
            </div>
              
            );
            })}

           </div>
           </div>

     
    <div className="flex text-center justify-center gap-3.5 mb-25">
          {[0, 1, 2].map((i) => (
          <div
          key={i}
          onClick={() => setActive(i)}
          className={`flex w-[35px] h-[10px] bg-[#D7D7D7] rounded-[50px] ${
          active === i ? "bg-green-500" : "bg-gray-300"
          }`}
          />
          ))}
         </div>

    </div>
    </section>
  );
};

export default Client;
