import ThemeProvider from "@mui/material/styles/ThemeProvider";
import {
  Button,
  Paper,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";
// redux
import { useSelector, useDispatch } from "react-redux";
import { darkTheme, lightTheme } from "./styles/theme";
import { toggleTheme } from "./redux/themeSlice";

// AWS
import Amplify from "aws-amplify";
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

function App({ isPassedToWithAuthenticator, signOut, user }) {
  // get mui theme from store
  const theme = useSelector((state) => state.theme);

  // initialize redux variable
  const dispatch = useDispatch();

  // ToggleSwitch Component
  const ToggleSwitch = () => {
    return (
      <div
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={theme.darkTheme}
                onChange={() => dispatch(toggleTheme())}
              />
            }
            label="Toggle Theme"
          />
        </FormGroup>
      </div>
    );
  };

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <Paper
        sx={{
          minHeight: "100vh",
          borderRadius: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ToggleSwitch />
        <Typography variant="h1">Hello {user.username} </Typography>
        <Button variant={"contained"} onClick={signOut}>Sign out</Button>
      </Paper>
    </ThemeProvider>
  );
}


export default withAuthenticator(App);