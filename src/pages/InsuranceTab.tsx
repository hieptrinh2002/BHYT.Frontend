import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HealthItemCard from "../components/HealthItemCard";
import * as insuranceServices from "../services/insuranceServices";

import { useEffect, useState } from "react";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface IInsurance {
  id: number;
  guid?: string;
  name?: string;
  description?: string;
  insuranceTypeId?: number;
  startAge?: number;
  endAge?: number;
  price?: number;
  subInsuranceTypeName?: string;
  slogan?: string;
}
type InsuranceArray = IInsurance[];

type InsuranceArray2 = InsuranceArray[];

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <Typography mx={5}>{children}</Typography>
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
  const [value, setValue] = useState(0);
  const [insurances, setInsurances] = useState<InsuranceArray2>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    void getCustomerList();
  }, []);

  const getCustomerList = async () => {
    try {
      const response = await insuranceServices.getListInsurace();
      setInsurances(response);
      console.log(response);
    } catch (error: any) {
      alert(error.message);
    }
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
            {insurances.map((row: InsuranceArray, index: number) => (
              <Tab key={index} label={row[0].subInsuranceTypeName} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>
        {insurances.map((row: InsuranceArray, index: number) => (
          <CustomTabPanel key={index} value={value} index={index}>
            {row.map((card: IInsurance, indexCard: number) => (
              <Box key={indexCard}>
                <HealthItemCard
                  title={card.name}
                  subheader={card.subInsuranceTypeName}
                  slogan={card.slogan}
                  description={card.description}
                  insuranceId={card.id}
                  price={card.price}
                  startAge={card.startAge}
                  endAge={card.endAge}
                />
                <br></br>
              </Box>
            ))}
          </CustomTabPanel>
        ))}
      </Box>
    </Box>
  );
}
