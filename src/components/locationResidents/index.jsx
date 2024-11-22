import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import styles from "./style.module.css";

const LocationResidents = ({ residents }) => {
  return (
    <div>
      <p style={{ color: "rgba(142, 142, 147, 1)" }}>Residents</p>
      <div className={styles.residentsList}>
        {residents && residents.length <= 0 ? (
          <p>Who Knows What Or Who living here...</p>
        ) : (
          residents.map((resident, index) => {
            return (
              <Card key={index} sx={{ maxWidth: 240, maxHeight: 244 }}>
                <CardActionArea>
                  <CardMedia
                    sx={{ height: 168, width: "100% " }}
                    component="img"
                    image={resident.photo}
                    alt={resident.name}
                  />
                  <CardContent sx={{ height: 76 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {resident.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {resident.species}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default LocationResidents;
