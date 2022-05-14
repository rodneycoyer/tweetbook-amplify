import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// user card options
export default function PostOptions({Icon, color, option, onClick}) {
  return (
    <Button color={color} sx={{p: 1}} onClick={onClick}>
      <Icon />
      <Typography color="text.primary" ml={1}> {option} </Typography>
    </Button>
  );
}