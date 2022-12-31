import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

export default ({ products }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item xs={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
