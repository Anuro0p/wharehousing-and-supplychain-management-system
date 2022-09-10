import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import car3 from '../../assets/img/car3.png';
import car4 from '../../assets/img/car4.png';
import car5 from '../../assets/img/car5.png';

const ProductCard = (_props) => {
  let cars = [car3, car4, car5];
  return (
    <Card sx={{ maxWidth: 240 }}>
      <CardMedia
        component='img'
        height='140'
        image={cars[_props.product.index % 3]}
        alt='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {_props.product.car.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {_props.product.car.model}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Delete</Button>
        <Button size='small' variant='contained'>
          View
        </Button>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
