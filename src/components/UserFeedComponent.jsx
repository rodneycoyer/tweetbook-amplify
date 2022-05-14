import React from "react";
import { API } from "aws-amplify";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
//icons
import CreateIcon from "@mui/icons-material/Create";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplayOutlined"
// components
import PostCard from "./PostCardComponent";
import PostOptions from "./PostOptionsComponent";

// GET all posts
// POST new post

function UserFeed() {

  const [posts, setPosts] = React.useState([]);
  const [textInput, setTextInput] = React.useState("");

  React.useEffect(() => {
    API.get("postsApi", "/posts/id")
      .then(postResponse => {
        setPosts(postResponse.data);
        console.log(postResponse)
      })
      .catch(err => console.log(err))
  }, []);

  // render user feed
  const userFeed = posts.map(post => {
    return (
      <Grid item key={post.id}>
        <PostCard post={post}/>
      </Grid>
    );
  });

  // handle submitPost
  const submitPost = (event) => {
    event.preventDefault();
    API.post("postsApi", "/posts", {
      body: {
        id: "2",
        text: textInput,
        author: "rcoyer"
      },
    }).then((response) => {
      console.log(response);
      setPosts([...posts, response.data])
      setTextInput("")
    })
  };

  return (
    <Stack spacing={2}>
      <Card>
        <Stack direction="row" spacing={1}>
          <CardContent sx={{ alignItems: "center"}}>
            <Avatar
              src=""
              alt=""
              sx={{ top: -5 }}
            />
          </CardContent>
          <TextField
            value={textInput}
            onChange={(event) => setTextInput(event.target.value)}
            type={"text"}
            name="create a post"
            label="create a post"
            multiline
            sx={{ width: "80%" }}
          />
        </Stack>
        <Box sx={{ pt: 1, display: "flex", p: 1}}>
          <PostOptions option={"upload media"} Icon={SmartDisplayIcon} color={"success"} onClick={submitPost} />
          <Box sx={{ ml: "auto"}}>
            <Button color="error" sx={{p: 1}} onClick={submitPost}>
              <CreateIcon />
            <Typography color="text.primary" ml={1}> create post </Typography>
          </Button>
          </Box>
        </Box>
      </Card>
      {userFeed}
    </Stack>
  );
}

export default UserFeed;