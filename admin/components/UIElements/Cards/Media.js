import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Media(service) {
  return (
    <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
      <Card sx={{ mb: "15px", height: "100%" }} style={{}}>
        <CardMedia
          sx={{ height: 140 }}
          style={{ marginTop: 10, marginBlock: 10, borderRadius: 20 }}
          image={service.image}
          title={service.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {service.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            style={{ hyphens: "auto" }}
          >
            {service.desc.length > 90
              ? `${service.desc.substring(0, 90)}...`
              : service.desc}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
