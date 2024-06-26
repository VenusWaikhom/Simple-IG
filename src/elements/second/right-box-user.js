import * as React from "react";
import Box from "@mui/material/Box";
import { TbUserCircle } from "react-icons/tb";
import Avatar from "@mui/material/Avatar";
import "./right-box-user.css";

export default function BoxSx() {
  return (
    <Box className="right-box-name">
      <div className="mini-right-box-name">
        <Avatar
          alt="Remy Sharp"
          sx={{
            height: "40px",
            width: "40px",
            marginTop: "7px",
            marginRight: "10px",
          }}
        >
          <TbUserCircle className="profile" />
        </Avatar>
        <p>
          <span>UserName</span>
          <br></br>Name
        </p>
      </div>
      <a href="zz">switch</a>
    </Box>
  );
}
