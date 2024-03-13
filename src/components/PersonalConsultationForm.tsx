import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const PersonalConsultationForm = function (): JSX.Element {
  return (
    <Box>
      <Typography variant="h5"> Bạn cần tìm hiểu thông tin về sản phẩm? </Typography>
      <Typography>
        {" "}
        Vui lòng liên hệ đường dây nóng 1800 1786 (miễn cước) hoặc gửi thông tin của bạn để được hỗ trợ.
        <br></br>
        (*) Thông tin bắt buộc
      </Typography>
    </Box>
  );
};

export default PersonalConsultationForm;
