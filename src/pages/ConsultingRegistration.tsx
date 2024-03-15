import { Box, Container } from "@mui/system";
import { Paper, Typography } from "@mui/material";
import ConsultingForm from "../components/ConsultingForm";
function ConsultingRegistration(): JSX.Element {
  return (
    <Container sx={{ marginTop: "3rem", marginBottom: "3rem" }}>
      <Paper elevation={3}>
        <Box px={15}>
          <Typography variant="h4" p={5} fontWeight={600} sx={{ textAlign: "center", marginTop: "20px" }} gutterBottom>
            Đăng ký hỗ trợ
          </Typography>
          <Container>
            {" "}
            <Typography variant="h5"> Bạn cần tìm hiểu thông tin về sản phẩm? </Typography>
            <Typography p={2}>
              {" "}
              Vui lòng liên hệ đường dây nóng 1800 1786 (miễn cước) hoặc gửi thông tin của bạn để được hỗ trợ.
              <br></br>
              (*) Thông tin bắt buộc
            </Typography>
          </Container>
        </Box>
        <ConsultingForm />
      </Paper>
    </Container>
  );
}
export default ConsultingRegistration;
