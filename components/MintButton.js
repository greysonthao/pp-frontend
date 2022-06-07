/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

export default function MintButton(props) {
  const ColorButton = styled(Button)(({ theme }) => ({
    /* color: theme.palette.getContrastText(purple[400]), */
    /* backgroundColor: "#222da0", */

    backgroundColor: "#b85fff",
    "&:hover": {
      /* backgroundColor: purple[600], */
      background:
        "linear-gradient(90deg, rgba(142,1,255,1) 89%, rgba(184,95,255,1) 100%)",
    },
  }));

  /*   const handleClick = () => {
    console.log("Mint button was clicked");
  }; */

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
        }}
      >
        <ColorButton
          onClick={() => props.submitMint()}
          sx={{
            borderRadius: "8px",
            margin: "1rem 0 0 0",
            padding: ".5rem 5rem .5rem 5rem",
          }}
          variant="contained"
        >
          <Box
            display="flex"
            justifyContent="center"
            margin="0 1rem 0 1rem"
            alignItems="center"
          >
            <AutoAwesomeIcon fontSize="small" />
            <Typography
              variant="body1"
              component="span"
              textTransform="none"
              marginLeft=".35rem"
            >
              MINT
            </Typography>
          </Box>
        </ColorButton>
      </Box>
    </Box>
  );
}
