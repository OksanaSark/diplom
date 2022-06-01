import styled from 'styled-components'

export const ShopComponent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 150px;
  @media (max-width: 1440px) {
    padding: 20px 80px;
  }
  @media (max-width: 1024px) {
    padding: 20px 40px;
  }
  .swiperContainer {
    width: 60%;
    padding: 25px 50px;
    height: 600px;
    margin: 0;
    z-index: 0;
    @media (max-width: 1440px) {
      height: 550px;
    }
    @media (max-width: 1024px) {
      height: 500px;
      width: 65%;
    }
    @media (max-width: 1024px) {
      height: 420px;
      width: 55%;
    }
  }
  .swiper-wrapper {
    border-radius: 30px;
  }
  .swiper-pagination-bullet-active {
    background-color: #000
  }
  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
  }
  .swiper-button-next, .swiper-button-prev {
    color: black;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    border-radius: 30px;
  }
  .swiper-slide swiper-slide-active {
    margin-right: 0;
  }
  .descriptionContainer {
    display: flex;
    flex-direction: column;
    width: 35%;
    @media (max-width: 900px) {
      width: 40%;
    }
  }
  .swiperMainContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title {
    font-size: 26px;
    font-weight: bold;
    margin: 0;
    @media (max-width: 1440px) {
      font-size: 22px;
    }
    @media (max-width: 1024px) {
      font-size: 18px;
    }
    @media (max-width: 900px) {
      font-size: 16px;
    }
  }
  .description {
    font-size: 22px;
    line-height: 24px;
    margin-top: 10px;
    @media (max-width: 1440px) {
      font-size: 18px;
    }
    @media (max-width: 1024px) {
      font-size: 14px;
    }
    @media (max-width: 900px) {
      font-size: 12px;
    }
  }
  .slideImg {
    background-size: contain;
    width: 100%;
    height: 95%;
    border-radius: 30px;
  }
`
