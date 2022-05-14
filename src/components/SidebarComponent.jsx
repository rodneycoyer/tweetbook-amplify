import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useAuthenticator } from "@aws-amplify/ui-react";

function UserStats({ title, count }) {
  return (
    <Box sx={{display: "flex"}}>
      <Typography variant="body2">
        {title}
      </Typography>
      <Typography ml={"auto"}>
        {count}
      </Typography>
    </Box>
  );
}

function RenderUserCard() {

  const { user } = useAuthenticator(context => [context.user])
  console.log(user)

  return (
    <Stack spacing={2}>
      <Card>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <CardMedia
            component={"img"}
            image={""}
            alt=""
            sx={{
              mb: 4,
              height: 112
            }}
          />
          <Avatar
            alt=""
            src=""
            sx={{
              width: 90,
              height: 90,
              border: '0.1em solid lightGray',
              position: "absolute",
              top: 150
            }}
          />
        </div>
        <CardContent>
          <Stack spacing={2} direction="column" >
            <Box>
              <Typography variant="h6">
                {user.username}
              </Typography>
              <Typography variant="overline">
                {user.attributes.email}
              </Typography>
            </Box>
            <Divider />
            <UserStats title="Connections" count={23} />
            <UserStats title="Favorites" count={23} />
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}

function SideBar() {
  return (
    <RenderUserCard />
  );
}

export default SideBar;