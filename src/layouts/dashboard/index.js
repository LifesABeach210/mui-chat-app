import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/logo.ico";
import { Outlet } from "react-router-dom";
import { Avatar, Box, Divider, IconButton, Switch } from "@mui/material";
import { Gear } from "phosphor-react";
import { Chat } from "../../pages/dashboard/Chat";
import { Stack } from "@mui/system";
import { Grid } from "@mui/material";
import { Nav_Buttons } from "../../data/index";
import { faker } from "@faker-js/faker";
const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const [gearSelect, setGearSelect] = useState(false);
  return (
    <>
      <Box
        mb={1}
        p={1}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          height: "100vh",
          width: "100px",
        }}
      ></Box>
      {/* <Stack justifyContent="space-evenly" alignItems="baseline">
        <Stack>
          <Box
            mb={1}
            p={1}
            sx={{
              backgroundColor: theme.palette.background.paper,
              boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
              height: "100vh",
              width: "100px",
            }}
          >
            <Stack
              spaceing={3}
              height="100%"
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: "100%" }}
            >
              {" "}
              <Stack spaceing={4} alignItems="center">
                {" "}
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    height: 64,
                    width: 64,
                    borderRadius: 2.5,
                  }}
                >
                  <img src={Logo} alt="Logo"></img>
                </Box>
                <Stack
                  m={3}
                  alignItems="center"
                  sx={{ width: "max-content" }}
                  spacing={3}
                >
                  {Nav_Buttons.map((_, i) =>
                    _.index === selected ? (
                      <Box
                        sx={{
                          backgroundColor: theme.palette.primary.main,
                          borderRadius: 1.5,
                        }}
                      >
                        <IconButton
                          onClick={() => {
                            setSelected(_.index);
                          }}
                        >
                          {_.icon}
                        </IconButton>
                      </Box>
                    ) : (
                      <Box
                        sx={{
                          backgroundColor: theme.palette.secondary.light,
                          borderRadius: 1.5,
                        }}
                      >
                        <IconButton
                          onClick={() => {
                            setSelected(_.index);
                          }}
                        >
                          {_.icon}
                        </IconButton>
                      </Box>
                    )
                  )}
                  <Divider spaceing={4} sx={{ width: "24px" }} />
                  {gearSelect === true ? (
                    <Box
                      sx={{
                        backgroundColor: "gray",
                        borderRadius: 0.5,
                      }}
                    >
                      {" "}
                      <IconButton
                        sx={{
                          width: "48px",
                          color: "#000",
                          borderRadius: 1.5,
                        }}
                        onClick={() => {
                          setGearSelect(!gearSelect);
                        }}
                      >
                        <Gear></Gear>
                      </IconButton>
                    </Box>
                  ) : (
                    <Box
                      m={4}
                      spaceing={4}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: 1.5,
                      }}
                    >
                      {" "}
                      <IconButton
                        spaceing={4}
                        sx={{ width: "48px", color: "#000", borderRadius: 1.5 }}
                        onClick={() => {
                          setGearSelect(!gearSelect);
                        }}
                      >
                        <Gear></Gear>
                      </IconButton>
                    </Box>
                  )}
                  <Divider />
                  <Divider />
                  <Stack
                    spacing={10}
                    justifyContent="space-between"
                    p={3}
                    m={5}
                  >
                    {" "}
                    <Switch></Switch>
                    <Box>
                      {" "}
                      <Avatar spaceing={5} m={7} src={faker.image.avatar()} />
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack> */}

      <Outlet />
    </>
  );
};

export default DashboardLayout;
