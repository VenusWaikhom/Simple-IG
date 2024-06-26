import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { HiOutlineUserCircle } from "react-icons/hi2";
import "./second.css";

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2} sx={{ padding: "0rem 0" }}>
      <Box
        sx={{
          paddingTop: "1rem",
          width: 500,
          display: "flex",
          border: "1px",
          justifyContent: "center",
          gap: "2rem",
          boxShadow: "0.4px 0.4px 1px 1px grey",
          borderRadius: "10px",
        }}
      >
        <div>
          <Avatar
            alt="Remy Sharp"
            sx={{ marginLeft: "6px", height: "50px", width: "50px" }}
          >
            <HiOutlineUserCircle className="hero-icon" />
          </Avatar>
          <p className="para">askdhjg</p>
        </div>
        <div>
          <Avatar
            alt="Remy Sharp"
            sx={{ marginLeft: "6px", height: "50px", width: "50px" }}
          >
            <HiOutlineUserCircle className="hero-icon" />
          </Avatar>
          <p className="para">askdhjg</p>
        </div>
        <div>
          <Avatar
            alt="Remy Sharp"
            sx={{ marginLeft: "6px", height: "50px", width: "50px" }}
          >
            <HiOutlineUserCircle className="hero-icon" />
          </Avatar>
          <p className="para">askdhjg</p>
        </div>
        <div>
          <Avatar
            alt="Remy Sharp"
            sx={{ marginLeft: "6px", height: "50px", width: "50px" }}
          >
            <HiOutlineUserCircle className="hero-icon" />
          </Avatar>
          <p className="para">askdhjg</p>
        </div>
        <div>
          <Avatar
            alt="Remy Sharp"
            sx={{ marginLeft: "6px", height: "50px", width: "50px" }}
          >
            <HiOutlineUserCircle className="hero-icon" />
          </Avatar>
          <p className="para">askdhjg</p>
        </div>
      </Box>
    </Stack>
  );
}
