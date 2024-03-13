import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HealthItemCard from "../components/HealthItemCard";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function InsuranceTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: "#fff",
      }}
    >
      <Box
        my={3}
        sx={{
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          maxWidth: "1200px",
          minWidth: "1200px",
          minHeight: "600px",
          maxHeight: "800px",
          overflow: "auto", // Thêm thuộc tính overflow
          background: "#fff",
        }}
      >
        <Box
          sx={{
            padding: "10px",
            borderBottom: "2px solid",
            borderColor: "divider",
            position: "sticky",
            top: 0,
            zIndex: 100,
            background: "#fff",
          }}
        >
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Sức khỏe" {...a11yProps(0)} />
            <Tab label="Tai nạn" {...a11yProps(1)} />
            <Tab label="Gia tăng bảo vệ " {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <HealthItemCard />
          <br></br>
          <HealthItemCard />
          <br></br>
          <HealthItemCard />
          <br></br>
          <HealthItemCard />
          <br></br>
          <HealthItemCard />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
          <HealthItemCard />
          <br></br>
          <HealthItemCard />
          <br></br>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
          <HealthItemCard />
          <br></br>
          <HealthItemCard />
          <br></br>
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
