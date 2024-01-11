import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";

const MovieCard = ({ movie }) => {
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        sx={{ height: 500 }}
        image={movie.posterURL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Rating value={0} readOnly />
      </CardActions>
    </Card>
  );
};

export default MovieCard;
