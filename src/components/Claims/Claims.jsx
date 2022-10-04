import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Claim() {
  return (
    <Card sx={{ maxWidth: 180, ml: 2, mt: 4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.ibb.co/2NgKpFN/educacion.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Educacion
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
