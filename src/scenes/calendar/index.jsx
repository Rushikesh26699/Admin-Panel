import { Box,Skeleton } from "@mui/material";

// import { tokens } from "../../theme";

import Header from "../../components/Header";
// import { useTheme } from "@mui/material";

const Contacts = () => {
  //   const theme = useTheme();
  //   const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Under Development Phase !" />
      
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
};

export default Contacts;
