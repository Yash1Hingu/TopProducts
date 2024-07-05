import { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Button,
    Badge,
    Box,
    Chip,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Checkbox,
    FormControlLabel
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function AllProducts({ productListProp }) {
    const [productList, setProductList] = useState(productListProp);
    const [productCategory, setProductCategory] = useState("all");
    const [company, setCompany] = useState("all");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [minRating, setMinRating] = useState("");
    const [available, setDiscountAvailable] = useState(false);

    // Function to filter products based on current state
    const filterProducts = () => {
        let filteredList = productListProp.filter(product => {
            // Filter by category
            if (productCategory !== "all" && product.category !== productCategory) {
                return false;
            }
            // Filter by company
            if (company !== "all" && product.company !== company) {
                return false;
            }
            // Filter by price range
            if (minPrice !== "" && product.price < parseInt(minPrice)) {
                return false;
            }
            if (maxPrice !== "" && product.price > parseInt(maxPrice)) {
                return false;
            }
            // Filter by rating
            if (minRating !== "" && product.rating < parseFloat(minRating)) {
                return false;
            }
            // Filter by discount availability
            if (available && product.availability === "no") {
                return false;
            }
            return true;
        });

        setProductList(filteredList);
    };

    // Handle category change
    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setProductCategory(category);
    };

    // Handle company change
    const handleCompanyChange = (event) => {
        const company = event.target.value;
        setCompany(company);
    };

    // Handle min price change
    const handleMinPriceChange = (event) => {
        const price = event.target.value;
        setMinPrice(price);
    };

    // Handle max price change
    const handleMaxPriceChange = (event) => {
        const price = event.target.value;
        setMaxPrice(price);
    };

    // Handle min rating change
    const handleMinRatingChange = (event) => {
        const rating = event.target.value;
        setMinRating(rating);
    };

    // Handle discount toggle change
    const handleDiscountToggle = () => {
        setDiscountAvailable(!available);
    };

    // Apply filters when any filter changes
    useEffect(() => {
        filterProducts();
    }, [productCategory, company, minPrice, maxPrice, minRating, available]);

    return (
        <div>
            <Box sx={{ display: 'flex', gap: '12px', padding: '14px' }}>
                <FormControl sx={{ width: '200px' }}>
                    <InputLabel>Category</InputLabel>
                    <Select value={productCategory} onChange={handleCategoryChange}>
                        {["all", ...new Set(productListProp.map(({ category }) => category))].map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl sx={{ width: '200px' }}>
                    <InputLabel>Company</InputLabel>
                    <Select value={company} onChange={handleCompanyChange}>
                        {["all", ...new Set(productListProp.map(({ company }) => company))].map((company) => (
                            <MenuItem key={company} value={company}>
                                {company}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    label="Min Price"
                    type="number"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    inputProps={{ min: 0 }}
                    style={{ margin: '0 10px' }}
                />
                <TextField
                    label="Max Price"
                    type="number"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    inputProps={{ min: 0 }}
                    style={{ margin: '0 10px' }}
                />
                <TextField
                    label="Min Rating"
                    type="number"
                    value={minRating}
                    onChange={handleMinRatingChange}
                    inputProps={{ min: 0, max: 5, step: 0.1 }}
                    style={{ margin: '0 10px' }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={available}
                            onChange={handleDiscountToggle}
                            color="primary"
                        />
                    }
                    label="Available"
                    style={{ margin: '10px 0' }}
                />
            </Box>
            <Grid
                container
                columns={{ xs: 4, sm: 8, md: 12 }}
                justifyContent="center"
            >
                {productList.map(({ availability, category, company, discount, price, productName, rating, id }) => (
                    <Card
                        key={id}
                        sx={{ maxWidth: 345, m: 2, position: 'relative' }}
                    >
                        <Badge
                            badgeContent="Unavailable"
                            color="error"
                            invisible={availability !== "no"}
                            sx={{ position: 'absolute', top: 20, left: 50 }}
                        />
                        <CardMedia
                            component="img"
                            height="140"
                            image={`https://via.placeholder.com/300x140.png?text=${productName}`}
                            alt={productName}
                            loading="lazy"
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
                        </CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                color="primary"
                                startIcon={<ShoppingCartIcon />}
                                disabled={availability === "no"}
                            >
                                Add to Cart
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Grid>
        </div>
    );
}

export default AllProducts;
