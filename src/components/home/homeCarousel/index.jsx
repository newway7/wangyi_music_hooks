import React, { useEffect, useState} from "react";
import Swiper                        from "swiper";
import axios                         from "axios";

import "./style.scss";
import "swiper/css/swiper.min.css";

const HomeCarousel = props => {
  const [banner, setBanner] = useState([]); //轮播图的数组；

  const initSwiper = () => {
    new Swiper(".home-carousel", {
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }; //创建轮播图实例对象；

  useEffect(() => {
    const getBanner = async () => {
      //获取轮播图的图片地址数组；
      await axios.get("/banner").then(res => {
        setBanner(res.data.banners);
      });

      initSwiper();
   
    };
    getBanner();
  }, []); //只执行一次；

  return (
    <div className="swiper-container home-carousel">
      <div className="swiper-wrapper slider-content">
        {banner.map((item, index) => {
          return (
            <div className="swiper-slide" key={index}>
              <img src={item.imageUrl} alt="" />
            </div>
          );
        })}
      </div>

      <div className="swiper-pagination"></div>
    </div>
  );
};

export default HomeCarousel;
