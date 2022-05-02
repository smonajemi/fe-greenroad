import { Box } from "@mui/material";
import { FunctionComponent } from "react";

interface ITabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
const TabPanel: FunctionComponent<ITabPanelProps> = ({children, value, index }) => {
  return (
    <Box role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }} >
          <>{children}</>
        </Box>
      )}
    </Box>
  );
}

export default TabPanel