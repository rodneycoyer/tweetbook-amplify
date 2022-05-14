import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// footer
export default function Copyright() {
  return (
    <Stack spacing={1} sx={{ mt: 8, mb: 4, alignItems: "center" }}>
      <Typography variant="body2" align="center">
        Built with: React, Material UI <br />
        AWS Services: Amplify, Lambda, API Gateway, DynamoDB, Cognito <br />
        CI/CD: Github, Amplify
      </Typography>
      <Typography variant="button">
        {`copyright`}{" "}
        <Link color="inherit" href="#" underline="none">
          © rodneycoyer.com {new Date().getFullYear()}
        </Link>
      </Typography>
    </Stack>
  );
}