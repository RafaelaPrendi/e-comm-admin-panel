import { createTheme } from "@mui/material/styles";

export const getMuiTableTheme = () =>
  createTheme({
    components: {
    //   MuiPaper: {
    //     styleOverrides: {
    //       root: {
    //         boxShadow: "none",
    //       },
    //     },
    //   },
      MuiTable: {
        styleOverrides: {
          root: {
            fontSize: "14px",
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            backgroundColor: "#F0F2F3",
            justifyContent: "center",
            fontWeight: "700",
          },
          root: {
            justifyContent: "center",
            alignItems: "center",
          },
          body: {
            textAlign: "center",
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            textAlign: "center"
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            borderBottom: "1px solid #F0F2F3",
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          head: {
            minHeight: "20px",
          },
          root: {
            minHeight: "20px",
          },
        },
      },
    },
  });