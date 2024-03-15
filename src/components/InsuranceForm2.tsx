import { CheckBox } from "@mui/icons-material";
import { Button, Divider, FormControlLabel, TextField, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import MultipleSelectChip from "./Profile/MultipleSelectChip";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useStore } from "../app/store";

import * as healthIndicatorServices from "../services/healthIndicatorServices";
interface IHealthIndicator {
  customerId: number;
  height?: number;
  weight?: number;
  cholesterol?: number;
  bmi?: number;
  bpm?: number;
  respiratoryRate?: number;
  familyDiseases?: string;
  personDiseases?: string;
  pregnant?: string; // thai sản
  drug?: string; // thuốc
}

export default function HealthIndicator(): JSX.Element {
  const [familyDiseases, setFamilyDiseases] = useState<string | string[]>();
  const [personDiseases, setPersonDiseases] = useState<string | string[]>();

  const account = useStore((state) => state.account);
  const [healthIndicator, setHealthIndicator] = useState<IHealthIndicator>();

  const formik = useFormik({
    initialValues: {
      customerId: -1,
      height: 0,
      weight: 0,
      cholesterol: 0,
      bmi: 0,
      bpm: 0, // nhịp tim
      respiratoryRate: 0,
      familyDiseases: "",
      personDiseases: "",
      pregnant: "", // thai sản
      drug: "", // thuốc
    },
    validationSchema: Yup.object({}),

    onSubmit: async (values) => {
      try {
        if (typeof familyDiseases === "string" && typeof personDiseases === "string") {
          values.familyDiseases = familyDiseases;
          values.personDiseases = personDiseases;
        } else if (Array.isArray(familyDiseases) && Array.isArray(personDiseases)) {
          values.familyDiseases = familyDiseases.join(", ");
          values.personDiseases = personDiseases.join(", ");
        } else {
          values.familyDiseases = "";
          values.personDiseases = "";
        }
        const res = await healthIndicatorServices.updateHealthIndicator(values);
        alert(res.message);
      } catch (error) {
        console.log("update health indicator failed");
      }
    },
  });

  useEffect(() => {
    if (account) {
      void gethealthIndicator(account.userId);
    }
  }, [account]);

  const gethealthIndicator = async (id: number | string) => {
    try {
      const response = await healthIndicatorServices.getHealthIndicator(id);
      setHealthIndicator(response);
      void formik.setValues({
        customerId: response.customerId || account?.userId,
        height: response.height || 0,
        weight: response.weight || 0,
        cholesterol: response.cholesterol || 0,
        bmi: response.bmi || 0,
        bpm: response.bpm || 0, // nhịp tim
        respiratoryRate: response.respiratoryRate || 0,
        familyDiseases: response.diseases || "",
        personDiseases: response.diseases || "",
        pregnant: response.pregnant || "", // thai sản
        drug: response.drug || "", // thuốc
      });
    } catch (error: any) {
      alert(error.message);
    }
  };

  const updateFamilyDiseases = (diseases: string | string[]) => {
    setFamilyDiseases(diseases);
  };
  const updatePersonalDiseases = (diseases: string | string[]) => {
    setPersonDiseases(diseases);
  };
  return (
    <Box borderRadius={2} px={3} pb={3}>
      <Divider sx={{ width: "100%" }} />
      {healthIndicator && (
        <Container sx={{ marginTop: "3rem", marginBottom: "3rem" }}>
          <Box sx={{ mx: 7 }}>
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
                <Typography variant="h6">Tiền sử gia đình: </Typography>
              </Stack>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                Có ai trong gia đình ông (bà) mắc một trong các bệnh: truyền nhiễm, tim mạch, đái tháo đường, lao, hen
                phế quản, ung thư, động kinh, rối loạn tâm thần, bệnh khác: (Nếu &quot;có&quot; đề nghị ghi cụ thể tên
                bệnh)
              </Stack>
              <MultipleSelectChip sendDiseases={updateFamilyDiseases}></MultipleSelectChip>

              <Stack spacing={2} direction="row" sx={{ mt: 6, mb: 2 }}>
                <Typography variant="h6">Tiền sử bản thân: </Typography>
              </Stack>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                Ông (bà) đã/đang mắc bệnh, tình trạng bệnh nào sau đây không: Bệnh truyền nhiễm, bệnh tim mạch, đái tháo
                đường, lao, hen phế quản, ung thư, động kinh, rối loạn tâm thần, bệnh khác.(Nếu có đề nghị ghi cụ thể
                tên bệnh)
              </Stack>
              <MultipleSelectChip sendDiseases={updatePersonalDiseases}></MultipleSelectChip>

              <Stack spacing={2} direction="row" sx={{ mt: 6, mb: 2 }}>
                <Typography variant="h6">Câu hỏi khác (Nếu có): </Typography>
              </Stack>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                Ông (bà) có đang điều trị bệnh gì không? Nếu có, xin hãy liệt kê các thuốc đang dùng và liều lượng:
              </Stack>
              <Stack spacing={2} direction="row" sx={{ mb: 2 }}>
                <TextField
                  type="text"
                  color="secondary"
                  label="Thông tin thuốc"
                  fullWidth
                  multiline
                  rows={2}
                  {...formik.getFieldProps("drug")}
                  onChange={formik.handleChange}
                />
              </Stack>

              <Stack spacing={2} direction="row" sx={{ mt: 6, mb: 2 }}>
                Tiền sử thai sản (Đối với phụ nữ):
              </Stack>
              <Stack spacing={2} direction="row">
                <TextField
                  type="text"
                  color="secondary"
                  label="Thông tin"
                  fullWidth
                  multiline
                  rows={2}
                  {...formik.getFieldProps("pregnant")}
                  onChange={formik.handleChange}
                />
              </Stack>

              <Stack spacing={2} direction="row" sx={{ mt: 6, mb: 2 }}>
                <Typography variant="h6">Phiếu sức khỏe: </Typography>
              </Stack>

              <Stack spacing={2} direction="row" sx={{ marginBottom: 6 }}>
                <TextField
                  type="number"
                  color="secondary"
                  label="Chiều cao (cm)"
                  fullWidth
                  required
                  {...formik.getFieldProps("height")}
                  onChange={formik.handleChange}
                />
                <TextField
                  type="number"
                  color="secondary"
                  label="Cân nặng (kg)"
                  fullWidth
                  required
                  {...formik.getFieldProps("weight")}
                  onChange={formik.handleChange}
                />
                <TextField
                  type="number"
                  color="secondary"
                  label="Cholesterol (mg/dL)"
                  fullWidth
                  {...formik.getFieldProps("cholesterol")}
                  onChange={formik.handleChange}
                />
              </Stack>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 6 }}>
                <TextField
                  type="number"
                  color="secondary"
                  label="Body Mass Index - BMI (kg/m²)"
                  fullWidth
                  required
                  {...formik.getFieldProps("bmi")}
                  onChange={formik.handleChange}
                />
                <TextField
                  type="number"
                  color="secondary"
                  label="Nhịp tim (BPM)"
                  fullWidth
                  {...formik.getFieldProps("bpm")}
                  onChange={formik.handleChange}
                />
                <TextField
                  type="number"
                  color="secondary"
                  label="Respiratory Rate (lần/phút)"
                  fullWidth
                  {...formik.getFieldProps("respiratoryRate")}
                  onChange={formik.handleChange}
                />
              </Stack>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 6, marginTop: 4 }}>
                <Typography variant="body1" color="red">
                  *** Các thông tin còn lại về phiếu khám lâm sàng vui lòng gửi về Địa chỉ tòa nhà 1, số 15, phường Bến
                  Nghé, quận 1, Thành phố Hồ Chí Minh hoặc chi nhánh nào gần bạn nhất. Chúng tôi sẽ liên hệ và hỗ trợ
                  trong vòng 1-2 ngày trong thời gian làm việc.
                </Typography>
              </Stack>

              <Stack spacing={2} direction="row" sx={{ marginBottom: 6, marginTop: 4 }}>
                <FormControlLabel control={<CheckBox />} label="" />

                <Typography variant="body1">
                  Tôi xin cam đoan những điều khai trên đây hoàn toàn đúng với sự thật theo sự hiểu biết của tôi và đồng
                  ý cho BHYT Life Việt Nam sử dụng thông tin được cung cấp trên đây để phê duyệt và phân tích chính sách
                  bảo hiểm <a href="#">Tìm hiểu thêm.</a>
                </Typography>
              </Stack>
              <Button variant="outlined" color="secondary" type="submit" sx={{ px: "4rem", py: 1 }}>
                Cập nhật và tiếp tục
              </Button>
            </form>
          </Box>
        </Container>
      )}
    </Box>
  );
}
