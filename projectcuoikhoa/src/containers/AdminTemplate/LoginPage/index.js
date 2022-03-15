import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import DashboardNavbar from "../DashboardPage/components/DashboardNavbar";
import DashboardSidebar from "../DashboardPage/components/DashboardSidebar";
import { actLoginApi } from "./modules/actions";
import "@fontsource/roboto/500.css";
import Facebook from "../DashboardPage/icons/Facebook";
import Google from "../DashboardPage/icons/Google";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actLoginApi(state, history));
  };

  return (
    <div>
      <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <DashboardSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />

      <Box
        sx={{
          // backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          mt: 10,
        }}
      >
        <form onSubmit={handleLogin}>
          <Box sx={{ mb: 3 }}>
            <Typography color="textPrimary" variant="h3">
              Sign In
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Button
                color="primary"
                fullWidth
                startIcon={<Facebook />}
                // onClick={handleSubmit}
                size="large"
                variant="contained"
              >
                Login with Facebook
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                fullWidth
                startIcon={<Google />}
                // onClick={handleSubmit}
                size="large"
                variant="contained"
              >
                Login with Google
              </Button>
            </Grid>
          </Grid>
          <Box
            sx={{
              pb: 1,
              pt: 3,
            }}
          >
            <Typography align="center" color="textSecondary" variant="body1">
              or login with email address
            </Typography>

            <TextField
              // error={Boolean(touched.email && errors.email)}
              fullWidth
              // helperText={touched.email && errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              // onBlur={handleBlur}
              onChange={handleOnChange}
              type="email"
              variant="outlined"
            />
            <TextField
              // error={Boolean(touched.password && errors.password)}
              fullWidth
              // helperText={touched.password && errors.password}
              label="Password"
              margin="normal"
              name="password"
              // onBlur={handleBlur}
              onChange={handleOnChange}
              type="password"
              variant="outlined"
            />

            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                // disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign in now
              </Button>
            </Box>

            <Typography color="textSecondary" variant="body1">
              Don't have an account?
              <Link
                // component={RouterLink}
                to="/signup"
                variant="h6"
                underline="hover"
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </form>
      </Box>

      {/* <div className="container">
        <form onSubmit={handleLogin}>
          <div className="form-group row">
            <label>Email</label>
            <div className="col-sm-1-12">
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label>Password</label>
            <div className="col-sm-1-12">
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <button className="bnt btn-success">Login</button>
        </form>
      </div> */}
    </div>
  );
}
