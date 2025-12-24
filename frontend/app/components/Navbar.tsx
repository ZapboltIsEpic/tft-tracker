"use client";

import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ToolBar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <AppBar sx={{ bgcolor: "black" }} position="static">
        <ToolBar sx={{ ml: 40, mr: 40 }}>
          <Image
            src="/Season_2019_-_Victorious_Pengu_-_Gold_Emote.webp"
            aria-hidden="true"
            width={48}
            height={48}
            alt="Victorious Pengu Gold Emote"
          />
          <Typography
            sx={{
              flexGrow: 1,
              fontSize: 32,
              fontWeight: 700,
              fontFamily: "sans-serif",
            }}
          >
            TFTracker
          </Typography>
          {/* login button */}
          <div>
            <Button
              size="medium"
              sx={{
                backgroundColor: "#1a1d21",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
              variant="contained"
              onClick={() => {
                alert("clicked");
              }}
            >
              login
            </Button>
          </div>
        </ToolBar>
      </AppBar>
    </div>
  );
}
