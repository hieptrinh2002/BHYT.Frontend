// import * as React from "react";
// import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const Customers = [
  "Khách hàng cá nhân của VN LIFE",
  "Khách hàng doanh nghiệp",
  "Khách hàng của doanh nghiệp",
  "Nhân viên của VN LIFE",
];

export interface LoginOptionProps {
  open: boolean;
  onSelect: (value: string) => void;
  setClose: (value: boolean) => void;
}

function LoginOption(props: LoginOptionProps) {
  const { onSelect, open, setClose } = props;

  const handleListItemClick = (value: string) => {
    handleSelect(value);
  };

  const handleSelect = (selectedValue: string) => {
    onSelect(selectedValue);
  };

  return (
    <Dialog open={open}>
      <Box>
        <Box
          sx={{ position: "relative" }}
          mx={1}
          my={1}
          onClick={() => {
            setClose(false);
          }}
        >
          <IconButton sx={{ position: "absolute", top: 0, right: 0 }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="h5" fontWeight={600} align="center" my={3}>
          Đăng nhập
        </Typography>
        <DialogTitle>Vui lòng chọn cổng thông tin</DialogTitle>
        <List sx={{ pt: 0 }}>
          {Customers.map((customer) => (
            <ListItem disableGutters key={customer}>
              <ListItemButton onClick={() => handleListItemClick(customer)}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={customer} />
                <NavigateNextIcon />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disableGutters>
            <ListItemButton autoFocus onClick={() => handleListItemClick("addAccount")}>
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Add account" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Dialog>
  );
}

export default LoginOption;
