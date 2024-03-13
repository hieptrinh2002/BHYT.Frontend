import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Typography, Button, Box, Toolbar, IconButton, Menu, MenuItem, Divider, Badge } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AccountCircle } from "@mui/icons-material";
import logo from "../assets/images/logo.png";
import { useStore } from "../app/store";
import AuthService from "../services/authServices";
import { b64_to_utf8 } from "../services/authServices";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LoginOptionForm from "./LoginOption";

function Header(): JSX.Element {
  const navigate = useNavigate();
  const { account, resetAccountAndToken } = useStore((state) => state); //
  const [anchorEl, setAnchorEl] = useState(null);
  const [openLoginOption, setOpenLoginOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const open = Boolean(anchorEl);
  const handleLogout = () => {
    AuthService.logout();
    resetAccountAndToken();
    setAnchorEl(null);
    navigate("/");
  };

  let role = "";

  if (account) {
    console.log(account);
    const localStorageRole = localStorage.getItem("role");
    if (localStorageRole) {
      role = b64_to_utf8(localStorageRole);
    }
  }

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setAnchorEl(null);
  };

  const setLoginOption = (status: boolean) => {
    setOpenLoginOption(status);
  };

  const handleSelectOptionClick = (value: string) => {
    setLoginOption(false);
    setSelectedOption(value);
    navigate(`/login?param=${value}`);
    console.log(selectedOption);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#0E4677" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <Link to="/">
            <Button
              TouchRippleProps={{ style: { color: "white" } }}
              sx={{
                backgroundColor: "white",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "whitesmoke",
                },
              }}
            >
              <img src={logo} className="App-logo" alt="logo" height={50} />
            </Button>
          </Link>
          <Typography variant="h6">VINA LIFE</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <MenuItem>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem>
            <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <Button color="inherit" component={Link} to="/">
            Trang chủ
          </Button>
          <Button color="inherit">
            Tìm hiểu
            <ArrowDropDownIcon />
          </Button>
          {account ? (
            <Button
              component={Link}
              to="/register-insurance-1"
              color="inherit"
              sx={{
                "&:hover": {
                  opacity: 0.8,
                },
              }}
            >
              Đăng ký bảo hiểm
            </Button>
          ) : (
            <></>
          )}

          {account ? (
            <>
              <IconButton onClick={handleMenu} color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>{account.username}</MenuItem>
                {role === "customer" && (
                  <>
                    <MenuItem onClick={() => handleNavigate("/user/profile")}>Profile</MenuItem>
                    <MenuItem onClick={() => handleNavigate("/payment-requests")}>Yêu cầu thanh toán</MenuItem>
                    <MenuItem onClick={() => handleNavigate(`/compensation-request/customer/${account.userId}`)}>
                      DS Yêu cầu bồi thường
                    </MenuItem>
                  </>
                )}

                {role === "employee" && (
                  <>
                    <MenuItem onClick={() => handleNavigate("/employee/list-requirement")}>Yêu cầu bảo hiểm</MenuItem>
                    <MenuItem onClick={() => handleNavigate("/employee/list-approved-policy")}>
                      Chính sách phát hành
                    </MenuItem>
                    <MenuItem onClick={() => handleNavigate("/employee/list-payment-request")}>
                      Thanh toán của khách hàng
                    </MenuItem>
                    <MenuItem onClick={() => handleNavigate("/employee/list-customer")}>Danh sách khách hàng</MenuItem>
                    <MenuItem onClick={() => handleNavigate("/compensation-request/approval")}>
                      Duyệt Yêu cầu bồi thường
                    </MenuItem>
                  </>
                )}

                <Divider />
                <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              variant="outlined"
              TouchRippleProps={{ style: { color: "white" } }}
              onClick={() => setLoginOption(true)}
              sx={{
                background: "#fae0a7",
                "&:hover": {
                  backgroundColor: "gold",
                },
              }}
            >
              Đăng nhập
              <AccountCircle />
            </Button>
          )}
        </Box>
        <LoginOptionForm open={openLoginOption} onSelect={handleSelectOptionClick} setClose={setLoginOption} />
      </Toolbar>
      {/* <Typography>{selectedOption}</Typography> */}
    </AppBar>
  );
}

export default Header;
