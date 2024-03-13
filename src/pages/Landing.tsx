import { Typography, Container, Grid } from "@mui/material";
import top2024img from "../assets/images/top2024.jpg";
import Banner from "../components/Banner";
import Quotes from "../components/quotes";
import LandingCard from "../components/LandingCard";
import LandingCard2 from "../components/LandingCard2";
import { Box } from "@mui/system";
const messages: string[] = ["VINA Life- Vững vàng", "VINA Life- Sống mới", "Kế hoạch lạc quan"];

function Landing(): JSX.Element {
  return (
    <>
      <Container>
        <Container maxWidth="lg">
          <Banner />
          <Quotes messages={messages} />
          <LandingCard />

          <Container
            maxWidth="lg"
            sx={{
              margin: "40px 0 40px 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h4" my={5}>
                Tươi Sáng Hơn Trong Từng Khoảnh Khắc
              </Typography>
            </Box>

            <Typography>
              Tương lai tươi sáng là quá trình tận hưởng và trải nghiệm từng khoảnh khắc trong cuộc sống, là chủ động về
              tài chính, xây dựng và thực hiện kế hoạch cho chính mình.
            </Typography>
          </Container>
          <Container
            maxWidth="lg"
            sx={{
              margin: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">Vì sao nên chọn VINA Life ?</Typography>
          </Container>
          <LandingCard2 />
          <Container>
            <Typography mt={7} textAlign={"center"} variant="h4">
              Top 10 thương hiệu uy tín nhất trong năm 2024
            </Typography>
          </Container>

          <Container
            sx={{
              backgroundColor: "#f7f2ee",
              height: 530,
              marginTop: "3rem",
              marginBottom: "3rem",
              borderRadius: "100",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <img src={top2024img} alt="" height="500" />
              </Grid>{" "}
              <Grid item xs={4}>
                <img
                  src="https://images.pexels.com/photos/8297453/pexels-photo-8297453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  height="500"
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  src="https://images.pexels.com/photos/8441866/pexels-photo-8441866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  height="500"
                />
              </Grid>
            </Grid>
            <Typography sx={{ margin: "40px" }} textAlign={"center"} variant="h4"></Typography>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Landing;
