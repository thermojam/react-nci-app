import {useState} from 'react';
import PropTypes from 'prop-types';
import ProductModal from './ProductModal';


const Card = ({image, title, price, description, features}) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <div className="card">
                <img src={image} className="card-img-top" alt={title}/>
                <div className="card-body">
                    <h5 className="card-title my-0">{title}</h5>
                    <p className="card-text my-0">{description}</p>
                    <p className="fw-bold text-primary ">{price}</p>

                    <button onClick={openModal} className="btn btn-dark w-100 text-center">
                        Подробнее
                    </button>

                </div>
            </div>

            <ProductModal
                show={showModal}
                handleClose={closeModal}
                product={{image, title, price, description, features}}
            />
        </>
    );
};

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.array,
};

export default Card;
