import React, { useContext, useEffect } from "react";
import Page from "../components/Page";

import Banner from "../components/Banner";
import Pill from "../components/Pill";
import { Divider } from "@mui/material";
import SubjectCarousaleWrapper from "../components/SubjectCarousale";
import { CarouselTransition } from "../components/Qoutes";
import Authenticator from "../components/Authenticator";

// Triangle stuff

import { Box } from "@mui/material";

export default function Home() {
  return (
    <Authenticator>
      <Page>
        <Banner />
        <Pill />
        <Divider />
        <SubjectCarousaleWrapper />
        <Divider />
        <Box
          width="100%"
          height="30vh"
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(248, 255, 253, 0.14)",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(8.4px)",
            WebkitBackdropFilter: "blur(8.4px)",
            border: "1px solid rgba(248, 255, 253, 0.17)",
          }}
        >
          <Box
            height="150px"
            width="150px"
            sx={{
              backgroundColor: "red",
              background: "rgba(0, 0, 0, 0.14)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(8.4px)",
              WebkitBackdropFilter: "blur(8.4px)",
              border: "1px solid rgba(248, 255, 253, 0.17)",
            }}
          ></Box>
          <Box
            height="150px"
            width="150px"
            sx={{
              backgroundColor: "blue",
              backgroundColor: "red",
              background: "rgba(0, 0, 0, 0.14)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(8.4px)",
              WebkitBackdropFilter: "blur(8.4px)",
              border: "1px solid rgba(248, 255, 253, 0.17)",
            }}
          ></Box>
        </Box>

        <Divider className="py-1" />
        <h1
          style={{ fontFamily: "Roboto,Kanit,Nunito", fontSize: "1rem" }}
          className="py-2"
        >
          Great sayings:
        </h1>
        <div style={{ paddingBottom: "10rem" }}>
          <CarouselTransition />
        </div>
      </Page>
    </Authenticator>
  );
}
