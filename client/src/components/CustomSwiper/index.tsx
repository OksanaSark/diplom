import React from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { Strings } from './strings'
import { Images } from '../../assets/media/images/Images'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'
import { CustomSwiperComponent } from './styles'

export const CustomSwiper = () => {
    const { width } = useWindowDimensions()
    const imageSources: string[] = [Images.Welding, Images.Group, Images.Stock]

    return (
        <CustomSwiperComponent>
            <div className='descriptionContainer'>
                <p className='title'>{Strings.production}</p>
                <p className='title'>{Strings.logistics}</p>
                <p className='title'>{Strings.insulation}</p>
                <p className='description'>{Strings.companyDescription}</p>
                <p className='description'>{Strings.infrastructureDescription}</p>
            </div>
            {width > 900
                && <Swiper
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
                            <img src={src} className='slideImg' />
                        </SwiperSlide>)
                    }
                </Swiper>}
        </CustomSwiperComponent>
    )
}
