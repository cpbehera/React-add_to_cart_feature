import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardItem({ product }) {
  return (
    <div className='container p-4'>
      <div className='row'>
        <div className='col-12 col-md-4 col-lg-3'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CardItem;