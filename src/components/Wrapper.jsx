import { Sheet } from "@mui/joy"
import { Outlet } from "react-router-dom"

export default function Wrapper() {
  return <Sheet variant="plain"
    sx={{
      width: 400,
      height: "auto",
      my: 2,
      p: 2,
      display: "flex",
      flexDirection: "column",
      boxShadow: 'lg',
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 'md',
    }}>
    <Outlet />
  </Sheet>
}