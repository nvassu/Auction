// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          height: 48,
        },
        // contained
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          "&:hover": {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows.primary,
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        containedInfo: {
          boxShadow: theme.customShadows.info,
        },
        containedSuccess: {
          boxShadow: theme.customShadows.success,
        },
        containedWarning: {
          boxShadow: theme.customShadows.warning,
        },
        containedError: {
          boxShadow: theme.customShadows.error,
        },

        containedPrimary: {
          backgroundColor: "#048C8C",
          "&:hover": {
            backgroundColor: "#048C8C",
          },
        },
        textPrimary: {
          color: "#048C8C",
        },
        // outlined
        outlinedPrimary: {
          // border: `1px solid ${theme.palette.grey[500_90]}`,
          color: "#048C8C",
          backgroundColor: "rgb(4, 140, 140, 0.08)",
          border: "1px solid rgb(4,140,140)",
          "&:hover": {
            color: "#048C8C",
            backgroundColor: "rgb(4, 140, 140, 0.08)",
            border: "1px solid rgb(4,140,140)",
          },
        },
        outlinedError: {
          // border: `1px solid ${theme.palette.grey[500_90]}`,
          color: "#bc3843",
          backgroundColor: "rgb(188,56,67, 0.08)",
          border: "1px solid #bc3843",
          "&:hover": {
            color: "#bc3843",
            backgroundColor: "rgb(188,56,67, 0.08)",
            border: "1px solid #bc3843",
          },
        },
        // outlinedError: {
        //   border: `1px solid #bc3843`,
        //   color: "#bc3843",
        //   backgroundColor: "rgb(188,56,67)",
        // },
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
