import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How do I add a new user to the admin panel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To add a new user, navigate to the user management section in the admin panel. Look for an option like "Add User" or "Create Account" and follow the prompts to input necessary details such as username, password, and assigned roles. This allows you to efficiently onboard new team members.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What steps should I take to generate a detailed report in the admin panel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you need specific data or insights, locate the reporting or analytics section within the admin panel. Depending on the system, you may find options such as "Generate Report" or "Customize Analytics." Follow the prompts to select parameters, filters, and data points to generate a detailed report tailored to your requirements.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How can I schedule automated backups for the admin panel data?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Regular backups are crucial for data security. Access the backup and recovery settings in the admin panel, where you can often find options for scheduling automated backups. Configure the frequency and destination for backups to ensure that your data is consistently and securely backed up.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Is there a way to customize the appearance and layout of the admin panel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Many admin panels offer customization options for appearance and layout. Explore the settings or preferences section for options like "Themes" or "Layout Customization." This allows you to personalize the admin panel interface based on your preferences, making it more user-friendly and aligned with your workflow.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </Box>
  );
};

export default FAQ;