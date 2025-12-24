"use client";

import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ToolBar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { TextField } from "@mui/material";

export default function Navbar() {
  return (
    <div>
      <AppBar sx={{ bgcolor: "black" }} position="static">
        <ToolBar
          sx={{
            ml: 40,
            mr: 40,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" className="flex flex-row">
            <Image
              src="/Season_2019_-_Victorious_Pengu_-_Gold_Emote.webp"
              aria-hidden="true"
              width={48}
              height={48}
              alt="Victorious Pengu Gold Emote"
            />
            <Typography
              sx={{
                fontSize: 32,
                fontWeight: 700,
                fontFamily: "sans-serif",
              }}
            >
              TFTracker
            </Typography>
          </Link>
          <TextField
            label="Search Player"
            variant="outlined"
            sx={{ backgroundColor: "#313236" }}
          />

          {/* login button */}
          <div>
            <Button
              component={Link}
              href="/login"
              size="medium"
              sx={{
                backgroundColor: "#1a1d21",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
              variant="contained"
            >
              login
            </Button>
          </div>
        </ToolBar>
      </AppBar>
    </div>
  );
}
