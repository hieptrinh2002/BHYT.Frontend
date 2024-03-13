import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
        p: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={7}>
          <Grid item xs={12} sm={5}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tận hưởng cuộc sống mà không lo lắng với VN LIFE. VN LIFE tạo ra một môi trường an toàn và đáng tin cậy để
              khách hàng thảnh thơi tận hưởng cuộc sống. Chúng tôi cung cấp các giải pháp bảo hiểm đa dạng, từ bảo hiểm
              sức khỏe, bảo hiểm xe hơi đến bảo hiểm tài sản và nhiều hơn nữa.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link href="https://www.instagram.com/" color="inherit" sx={{ pl: 1, pr: 1 }}>
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              My Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
