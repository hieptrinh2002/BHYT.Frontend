import {
  Typography,
  Container,
  Paper,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { useStore } from "../app/store";
import * as customerPolicyServices from "../services/customerPolicyServices";

function InsuranceRegister3(): JSX.Element {
  const account = useStore((state: any) => state.account);
  const { id } = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      startDate: -1,
      year: 1,
      option: 0,
      customerId: Number(account.userId),
      insuranceId: Number(id),
    },
    validationSchema: Yup.object({
      startDate: Yup.date()
        .min(new Date(), "Ngày bắt đầu phải lớn hơn ngày hiện tại")
        .required("Vui lòng nhập ngày bắt đầu"),
    }),
    onSubmit: async (values) => {
      try {
        console.log("value: ", values);
        const res = await customerPolicyServices.createCustomerPolicy(values);
        alert(res.message);
        navigate("/");
      } catch (error) {
        console.log("Lỗi đăng kí chính sách bảo hiểm !");
      }
    },
  });
  return (
    <Container sx={{ marginBottom: "3rem", marginTop: "2rem" }}>
      <Paper elevation={3}>
        <Typography variant="h4" fontWeight={600} sx={{ textAlign: "center", pt: "2rem" }}>
          Thời gian
        </Typography>
        <Container>
          <Box sx={{ mx: 7, py: 5 }}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Box>
                    <Typography variant="h6" pb={2}>
                      Thời gian bắt đầu:
                    </Typography>
                    {formik.errors.startDate && formik.touched.startDate && (
                      <Alert severity="error">
                        <strong>{formik.errors.startDate}</strong>
                      </Alert>
                    )}
                    <TextField
                      type="date"
                      color="secondary"
                      fullWidth
                      required
                      {...formik.getFieldProps("startDate")}
                      onChange={formik.handleChange}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" pb={2}>
                    Số năm:
                  </Typography>

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">năm</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="year"
                      {...formik.getFieldProps("year")}
                      onChange={formik.handleChange}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" pb={2}>
                    {" "}
                    Tùy chọn thanh toán
                  </Typography>

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{}</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="year"
                      {...formik.getFieldProps("option")}
                      onChange={formik.handleChange}
                    >
                      <MenuItem value={0}>Theo năm</MenuItem>
                      <MenuItem value={1}>Theo tháng</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Button variant="outlined" type="submit" sx={{ px: "4rem", py: 1.5, my: 5 }}>
                Đăng ký
              </Button>
            </form>
          </Box>
        </Container>
      </Paper>
    </Container>
  );
}

export default InsuranceRegister3;
