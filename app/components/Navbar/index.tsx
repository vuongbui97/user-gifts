import { Grid, IconButton } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Navbar = () => {
  return (
    <Grid
      p={1}
      container
      alignItems="center"
      justifyContent="flex-end"
      width="100%"
    >
      <Grid item pr={2}>
        <IconButton color="inherit">
          <PersonOutlineOutlinedIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Navbar;
