import {Swiper, SwiperSlide} from 'swiper/react';
import {Grid, Pagination, Autoplay} from 'swiper/modules';
import Card from './Card';
import products from '../data/products';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import {Box} from '@mui/material';
import styles from './ProductSlider.module.css';

const chunkArray = (arr, size) =>
    Array.from({length: Math.ceil(arr.length / size)}, (_, i) =>
        arr.slice(i * size, i * size + size)
    );

export default function ProductSlider() {
    const grouped = chunkArray(products, 6);

    return (
        <>
           <Box sx={{paddingBottom: 10}}>
            <Swiper
                className={styles.swiperContainer}
                slidesPerView={1}
                grid={{rows: 1}}
                spaceBetween={20}
                speed={3000}
                loop={true}
                pagination={{type: 'progressbar'}}
                autoplay={{delay: 3000, disableOnInteraction: true}}
                grabCursor={true}
                modules={[Grid, Pagination, Autoplay]}
            >
                {grouped.map((group, idx) => (
                    <SwiperSlide key={idx}>
                        <div className={styles.grid}>
                            {group.map((p) => (
                                <Card key={p.id} {...p} />
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
           </Box>
        </>
    );
}
