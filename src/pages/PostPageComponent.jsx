import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Sidebar from "../components/SidebarComponent";
import Promotions from "../components/PromotionsComponent";
import UserFeed from "../components/UserFeedComponent";

function PostPage() {

  return (
    <Container>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={6}>
          <UserFeed />
        </Grid>
        <Grid item xs={3}>
          <Promotions />
        </Grid>
      </Grid>
    </Container>
  );
}

export default PostPage;