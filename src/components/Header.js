import React from "react";
import Box from "@mui/material/Box";
import Logo from "../images/logo.png";
import { TextField, IconButton } from "@mui/material";
import {
  AccountBalanceWalletOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

function Header() {
  const primaryColor = "#8c7353";
  const handleSearch = () => {};
  return (
    <Box
      sx={{
        display: "flex",
        height: "8vh",
        color: { primaryColor },
      }}
    >
      <Box sx={{ flex: 1.5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            height: "100%",
          }}
        >
          <a href="/" aria-label="Company logo">
            <img
              style={{ height: "2.5rem", width: "2rem" }}
              src={Logo}
              alt="logo"
            />
          </a>
          <p style={{ fontFamily: "Lato", color: { primaryColor } }}>Logo</p>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 3,
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: { primaryColor },
          }}
        >
          <TextField
            sx={{
              width: "90%",
              "& .MuiInputBase-root": {
                "& input": {
                  color: { primaryColor },
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #8098ab",
              },
            }}
            id="outlined-basic"
            label="search"
            variant="outlined"
            size="small"
            aria-label="Type your product name"
          />
          <IconButton
            type="button"
            onClick={{ handleSearch }}
            aria-label="Start searching"
          >
            <SearchOutlined
              style={{
                fill: "#252525",
                height: "2rem",
                width: "2rem",
              }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <Box>
                <Button
                  aria-label="Account settings"
                  sx={{
                    background: "#8c7353",
                    textTransform: "none",
                    height: "2.5rem",
                    "&:hover": {
                      backgroundColor: "#5e3e15",
                    },
                  }}
                  variant="contained"
                  {...bindTrigger(popupState)}
                >
                  Account
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem
                    aria-label="Update your password"
                    onClick={popupState.close}
                  >
                    Update Password
                  </MenuItem>
                  <MenuItem
                    aria-label="Update your account details"
                    onClick={popupState.close}
                  >
                    Update Details
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </PopupState>
        </Box>
      </Box>
      <Box sx={{ flex: 2 }}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            overflow: "hidden",
            color: { primaryColor },
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <IconButton
              type="button"
              aria-label="Wishlist"
              sx={{
                padding: "0",
              }}
            >
              <FavoriteBorderOutlined
                style={{
                  fill: "#252525",
                  height: "2rem",
                  width: "2rem",
                }}
              />
            </IconButton>
            <p style={{ fontSize: "0.7rem", padding: "0", margin: "0" }}>
              Wishlist
            </p>
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <IconButton
              type="button"
              aria-label="Wallet"
              sx={{
                padding: "0",
              }}
            >
              <AccountBalanceWalletOutlined
                style={{
                  fill: "#252525",
                  height: "2rem",
                  width: "2rem",
                }}
              />
            </IconButton>
            <p style={{ fontSize: "0.7rem", padding: "0", margin: "0" }}>
              Wallet
            </p>
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <IconButton
              type="button"
              aria-label="View cart"
              sx={{
                padding: "0",
              }}
            >
              <ShoppingCartOutlined
                style={{
                  fill: "#252525",
                  height: "2rem",
                  width: "2rem",
                }}
              />
            </IconButton>
            <p style={{ fontSize: "0.7rem", padding: "0", margin: "0" }}>
              Cart
            </p>
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <IconButton
              type="button"
              aria-label="Logout"
              sx={{
                padding: "0",
              }}
            >
              <LogoutOutlined
                style={{
                  fill: "#252525",
                  height: "2rem",
                  width: "2rem",
                }}
              />
            </IconButton>
            <p style={{ fontSize: "0.7rem", padding: "0", margin: "0" }}>
              Logout
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
