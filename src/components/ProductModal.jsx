import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import {Box} from "@mui/material"
import {DonateButton} from "./DonateButton.jsx"

const ProductModal = ({ show, handleClose, product }) => {
    if (!product) return null;
    const { image, title, price, description, features } = product;

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>{title} {description}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-md-5">
                        <img src={image} alt={title} className="img-fluid rounded" />
                    </div>
                    <div className="col-md-7">
                        <h5>{title}</h5>
                        <p className="text-primary"><strong>Цена:</strong> {price}</p>
                        <p>{description}</p>
                        {features && features.length > 0 && (
                            <div>
                                <h6>Характеристики:</h6>
                                <ul>
                                    {features.map((f, i) => <li key={i}>{f}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Box sx={{padding: 2}}>
                    <DonateButton/>
                </Box>
            </Modal.Footer>
        </Modal>
    );
};

ProductModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    product: PropTypes.object,
};

export default ProductModal;
