import { useParams } from "react-router-dom";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Chip,
    Grid,
    Button
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductDetail({ productList }) {
    const { id } = useParams();
    const product = productList.find(p => p.id === parseInt(id));

    if (!product) {
        return <Typography variant="h6">Product not found</Typography>;
    }

    const { availability, category, company, discount, price, productName, rating } = product;

    return (
        <Grid container justifyContent="center" sx={{ width: '100%' }}>
            <Card sx={{ width: '100%', m: 2, boxShadow: 'none' }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={`https://via.placeholder.com/600x300.png?text=${productName}`}
                    alt={productName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {productName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {category} by {company}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <StarIcon sx={{ color: 'gold' }} />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                            {rating}
                        </Typography>
                    </Box>
                    <Typography variant="h6" component="div" sx={{ mt: 1 }}>
                        ${price}
                        {discount > 0 && (
                            <Chip
                                label={`${discount}% OFF`}
                                color="success"
                                size="small"
                                sx={{ ml: 1 }}
                            />
                        )}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<ShoppingCartIcon />}
                        disabled={availability === "no"}
                        sx={{ mt: 2 }}
                    >
                        Add to Cart
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ProductDetail;
