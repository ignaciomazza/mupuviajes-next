"use client"
import React, { useState, useEffect } from 'react'
import CardCategory from "./CardCategory.jsx";
import db from '../services'
import { collection, getDocs } from 'firebase/firestore';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Categories = () => {

    const [cat, setCat] = useState([]);

    cat.sort(function (a, b) {
        if (a.pos > b.pos) {
            return 1;
        }
        if (a.pos < b.pos) {
            return -1;
        }
        return 0;
    });

    useEffect(() => {
        const getData = async () => {
            const data = collection(db, "categorias");
            const col = await getDocs(data);
            const res = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            return res;
        }
        const task = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(getData())

            }, 0);
        })
        task
            .then((resultado) => {
                setCat(resultado)
            })
        return () => {
        }
    }, [])

    return (
        <div className='flex flex-col justify-center bg-black'>
            <div className='flex flex-wrap justify-evenly items-center w-full '>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Navigation]}
                    key='Slide'
                    className="swiper_container"

                >
                    {cat.map((item, index) => (
                        <SwiperSlide key={index.toString()}>
                            <CardCategory key={index} categoria={item.categoria} nombre={item.nombre} img={item.img} />
                        </SwiperSlide>
                    ))}
                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </div >
    )
}

export default Categories