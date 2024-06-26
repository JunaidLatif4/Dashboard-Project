import React from "react";

// MUI :
import { createTheme } from "@mui/material";




const MainTheme = createTheme({
    palette: {
        primary: {
            main: "#5D87FF",
            field: "#405189",
            text: "#fff",
            grey: "#575757",
            shadow: "#808080a8"
        },
        secondary: {
            main: "#49BEFF",
            field: "#5d87ff1a",
            text: "#5a6a85",
            shadow: "#F3F6F9"
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: ({ theme, ownerState }) => ({
                    ...(ownerState.type == "heading" && {
                        fontSize: "1.3rem",
                        color: theme.palette.secondary.text,
                        fontWeight: "bold"

                    })
                })
            }
        },
        MuiButton: {
            styleOverrides: {
                root: ({ theme, ownerState }) => ({
                    ...(ownerState.variant == "contained" && {
                        backgroundColor: theme.palette.primary.field

                    })
                })
            }
        },
    }
})

export default MainTheme