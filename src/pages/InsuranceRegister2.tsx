import InsuranceForm2 from "../components/InsuranceForm2";
import { Typography, Container, Paper } from "@mui/material";

function InsuranceRegister2(): JSX.Element {
  return (
    <Container sx={{ marginBottom: "3rem", marginTop: "2rem" }}>
      <Paper elevation={3}>
        <Typography variant="h4" fontWeight={600} sx={{ textAlign: "center", pt: "2rem", pb: 2 }} gutterBottom>
          Phiếu sức khỏe
        </Typography>
        <InsuranceForm2 />
      </Paper>
    </Container>
  );
}

export default InsuranceRegister2;
