import Carousel from 'react-multi-carousel';
import { CLIENT_LIST } from '../../constant'
import Card from '../Card'
import PageTitle from '../PageTitle'
import styles from './index.module.css'
import "react-multi-carousel/lib/styles.css";
import { LeftArrow, RightArrow } from '../../assets';

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="carousel-button-group">
            <RightArrow onClick={() => next()} className={styles.rightArrow} />
            <LeftArrow onClick={() => previous()} className={styles.leftArrow} />
        </div>
    );
};
const CustomBtn = () => {
    return (
        <div>
        </div>
    );
};
const Client = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <section className={styles.client}>
            <div className={styles.wrapper}>
                <div className={styles.titleContainer}>
                    <PageTitle title={"What says our happy Clients"} />
                </div>
                {/* <div className={styles.clientContainer}>
                    {/* {CLIENT_LIST.map((client) => <Card key={client.id} avatar={client.img} title={client.name} desc={client.desc} />)} */}
                {/* <Carousel
                    swiper={swiper}
                        data={CLIENT_LIST}
                        renderComponent={(client) => <Card key={client.id} avatar={client.img} title={client.name} desc={client.desc} />}
                    /> */}
                {/* </div> */}

                <div className={styles.clientContainer}>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        responsive={responsive}
                        className={styles.swipeableClass}
                        customLeftArrow={<CustomBtn />}
                        customRightArrow={<CustomBtn />}
                        renderButtonGroupOutside={true}
                        customButtonGroup={<ButtonGroup />}
                    >
                        {CLIENT_LIST.map((client) => <Card key={client.id} avatar={client.img} title={client.name} desc={client.desc} />)}
                    </Carousel>

                </div>
            </div>
        </section>
    )
}

export default Client
