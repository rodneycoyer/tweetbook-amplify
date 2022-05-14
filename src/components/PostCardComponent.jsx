import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import ChatIcon from '@mui/icons-material/Chat';
import Divider from "@mui/material/Divider";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from "@mui/material/IconButton"
import MoreHorizIcon from "@mui/icons-material/MoreHorizOutlined"
import ShareIcon from '@mui/icons-material/Share';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import PostOptions from "./PostOptionsComponent";

function PostCard({text}) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Box sx={{ xs:3 }}>
            <IconButton>
              <Avatar
                src={"username"}
                alt={""}
              />
            </IconButton>
          </Box>
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        title={"username"}
        subheader={"subheader or email"}
      />
      <CardContent>
        <Typography variant="p"> {text} </Typography>
      </CardContent>
      <Divider />
        <Box sx={{ display: "flex", p: 1 }}>
          <PostOptions option={"comment"} Icon={ChatIcon} color={"primary"} />
          <PostOptions option={"share"} Icon={ShareIcon} color={"success"} />
          <Box sx={{ ml: "auto"}}>
            <PostOptions option={"like"} color={"error"} Icon={FavoriteBorderIcon} />
          </Box>
        </Box>
    </Card>
  );
}

export default PostCard;