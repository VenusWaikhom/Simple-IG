import * as React from "react";
//import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
//import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
//import Typography from "@mui/material/Typography";
//import MenuIcon from "@mui/icons-material/Menu";
//import SearchIcon from "@mui/icons-material/Search";
//import MoreIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import "./card.css";

export default function card() {
  return (
    <Box
      sx={{
        border: "1px",
        justifyContent: "center",
        borderRadius: "5px",
        boxShadow: "0.2px 0.2px 0.2px 0.2px lightgrey",
        marginTop: "20px",
      }}
    >
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <div className="card-style">
          <div className="profile-item">
            <Avatar
              alt="Remy Sharp"
              sx={{
                height: "35px",
                width: "35px",
                marginTop: "7px",
                marginRight: "10px",
              }}
            >
              <HiOutlineUserCircle className="hero-icon" />
            </Avatar>
            <p>Name</p>
          </div>
          <IconButton
            aria-label="display more actions"
            edge="end"
            size="medium"
            sx={{ width: "50px", marginLeft: "170px" }}
          >
            <MdOutlineMoreHoriz sx={{ width: "50px" }} />
          </IconButton>
        </div>
        <div className="pic">PICTURE/VIDEO</div>
        <div className="card-nav">
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <BsHeart />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <FaRegComment />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <FiSend />
            </IconButton>
          </div>
          <div>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <BsBookmark />
            </IconButton>
          </div>
        </div>
        <div className="text-commend">
          <p>
            Number Of Likes
            <br />
            Comment
          </p>
        </div>
        <div className="bar"></div>
        <div className="comment-bar">
          <div className="herocommend">
            <BsEmojiSmile className="hero-icon-comment" />
            <input placeholder="Add a comment..." className="input"></input>
          </div>
          <a href="asd">Post</a>
        </div>
      </AppBar>
    </Box>
  );
}
