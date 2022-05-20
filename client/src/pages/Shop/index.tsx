import React from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Images } from '../../assets/media/images/Images'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'
import ShopComponent from './styles'

export const Shop = () => {
    const imageSources: string[] = [Images.Group, Images.Welding, Images.Stock]

    return (
        <ShopComponent>
            <div className='descriptionContainer'>
                <p className='title'>Производство <br/> и логистика труб <br/> в изоляции </p>
                <p className='description'>Являемся одним из крупнейших поставщиком б/у труб по
                    всей территории Российской Федерации, реализуем проекты в 17 регионах страны,
                    постоянные складские запасы более 2-х тысяч тонн. Наши складские комплексы
                    находятся в г. Краснодаре и Краснодарском крае, Московской области, на Урале и Сибири.
                </p>
                <p className='description'>
                    Инфраструктура нашего комплекса включает в себя:
                    нанесение внутренней и внешней изоляции, восстановление и ремонт труб,
                    транспортно-складскую логистику любой сложности, имеется свой автопарк тентованного
                    и бортового транспорта для организации перевозок.
                </p>
            </div>
            <Swiper
                navigation
                cssMode={true}
                spaceBetween={20}
                speed={650}
                loop={true}
                className='swiperContainer'
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
            >
                {imageSources.map((src, index) =>
                    <SwiperSlide key={`${src}${index}`}>
                        <img src={src} className='img' />
                    </SwiperSlide>)
                }
            </Swiper>
        </ShopComponent>
    )
}
