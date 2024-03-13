import InsuranceForm1 from "../components/InsuranceForm1";
import { Typography, Container, Paper } from "@mui/material";
function InsuranceRegister(): JSX.Element {
  return (
    <Container sx={{ marginTop: "3rem", marginBottom: "3rem" }}>
      <Paper elevation={3}>
        <Typography variant="h4" p={4} fontWeight={600} sx={{ textAlign: "center", marginTop: "20px" }} gutterBottom>
          Đăng ký bảo hiểm
        </Typography>
        <InsuranceForm1 />
      </Paper>
    </Container>
  );
}

export default InsuranceRegister;
