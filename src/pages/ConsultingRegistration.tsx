import { Container } from "@mui/system";
import InsuranceForm1 from "../components/InsuranceForm1";
import { Paper, Typography } from "@mui/material";

function ConsultingRegistration(): JSX.Element {
  return (
    <Container sx={{ marginTop: "3rem", marginBottom: "3rem" }}>
      <Paper elevation={3}>
        <Typography variant="h4" p={4} fontWeight={600} sx={{ textAlign: "center", marginTop: "20px" }} gutterBottom>
          Đăng ký hỗ trợ
        </Typography>
        <Container>
          {" "}
          <Typography variant="h5"> Bạn cần tìm hiểu thông tin về sản phẩm? </Typography>
          <Typography>
            {" "}
            Vui lòng liên hệ đường dây nóng 1800 1786 (miễn cước) hoặc gửi thông tin của bạn để được hỗ trợ.
            <br></br>
            (*) Thông tin bắt buộc
          </Typography>
        </Container>
        <InsuranceForm1 />
      </Paper>
    </Container>
  );
}
export default ConsultingRegistration;
