import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Container } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
export default function LandingCard() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        margin: "40px 0 40px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Card
        sx={{
          minWidth: "325px",
          maxWidth: "325px",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardActionArea>
          <CardMedia component="img" height="300" image="src\assets\images\savemoney.png" alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bảo hiểm Tiết kiệm
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Giúp Khách hàng đạt được bảo vệ tài chính trước các rủi ro và tận hưởng cuộc sống khoẻ mạnh
            </Typography>
          </CardContent>
        </CardActionArea>
        <Box width="100%" sx={{ display: "flex", justifyContent: "right" }}>
          <Button to="/health-insurance/tab" component={Link}>
            xem ngay
            <ArrowForwardIosIcon />
          </Button>
        </Box>
      </Card>

      <Card
        sx={{
          minWidth: "325px",
          maxWidth: "325px",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", top: 0, right: 0, zIndex: 100, borderRadius: "50%", overflow: "hidden" }}>
            {" "}
            <img
              src="https://thumbs.dreamstime.com/b/set-vector-gold-stars-icon-best-seller-gold-star-icon-templa-illustration-template-60476772.jpg"
              height={120}
              alt=""
            />
          </Box>
        </Box>

        <CardActionArea>
          <CardMedia component="img" height="300" image="src\assets\images\health.png" alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bảo hiểm Sức khỏe
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nhiều dự án góp phần vào sự phát triển và nâng cao sức khỏe cộng đồng từ Vina Life Việt Nam
            </Typography>
          </CardContent>
        </CardActionArea>
        <Box width="100%" sx={{ display: "flex", justifyContent: "right" }}>
          <Button to="/health-insurance/tab" component={Link}>
            xem ngay
            <ArrowForwardIosIcon />
          </Button>
        </Box>
      </Card>

      <Card
        sx={{
          minWidth: "325px",
          maxWidth: "325px",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardActionArea>
          <CardMedia component="img" height="300" image="src\assets\images\travel.png" alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Giải pháp hưu trí
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Những trải nghiệm của Khách hàng khi tham gia Bảo hiểm Nhân thọ Vina Life
            </Typography>
          </CardContent>
        </CardActionArea>
        <Box width="100%" sx={{ display: "flex", justifyContent: "right" }}>
          <Button to="/health-insurance/tab" component={Link}>
            xem ngay
            <ArrowForwardIosIcon />
          </Button>
        </Box>
      </Card>
    </Container>
  );
}
