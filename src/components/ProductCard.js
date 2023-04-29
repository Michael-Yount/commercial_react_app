import { Card, Button, Form, Row, Col, FormLabel } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';

function ProductCard(props) {
const product = props.product;
const cart = useContext(CartContext);
const productQuantity = cart.getProductQuantity(product.id);

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                { productQuantity > 0 ? 
                <>
                 <Form as={Row}>
                    <FormLabel column="true" sm="6"></FormLabel>
                 </Form>
                </>
                <Button variant='primary' onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
            }
            </Card.Body>
        </Card>

    )

}

export default ProductCard;