import "./SignInUp.scss";

import * as React from "react";

import Box from "@mui/material/Box";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
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
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const boxStyle = {
  width: "100%",
  height: "100%",
  margin: "0 auto",
  background: "#FFFFFF",
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)",
  borderRadius: "10px",
};
const tabStyle = {
  width: "50%",
  color: "#029491",
  fontSize: "16px",
};
// const tabStyleSqueeze = {
//   width: "50%",
//   color: "#029491",
//   fontSize: "12px",
// };

const SignInUpForm = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="signInUp__form">
      <Box
        className="signInUp__form-head"
        sx={{ width: "100%" }}
        style={boxStyle}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            sx={{
              "& .MuiTabs-indicator": { background: "#029491" },
              "& .MuiButtonBase-root": {
                textTransform: "none",
              },
            }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              // sx={{ typography: { sm: "tabStyle", xs: "tabStyleSqueeze" } }}
              style={tabStyle}
              label="Войти"
              {...a11yProps(0)}
            />
            <Tab
              // sx={{ typography: { sm: "tabStyle", xs: "tabStyleSqueeze" } }}
              style={tabStyle}
              label="Зарегистрироваться"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <SignIn />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignUp />
        </TabPanel>
      </Box>
    </div>
  );
};

export default SignInUpForm;
