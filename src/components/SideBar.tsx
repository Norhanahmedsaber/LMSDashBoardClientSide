import React from "react";
import Components from "./Components";
import Auth from "./Auth";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface SidebarProps {
  selected: string;
  onSelect: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selected, onSelect }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarContent = (
    <div className="h-full w-[12.5rem] flex flex-col justify-start items-start bg-sidebar-gradient">
      <div className="w-full h-[4.375rem] flex justify-center items-center ">
        <img
          src="../../../idea.png"
          className="w-[2rem] h-[2rem] mt-1 mr-2 cursor-pointer"
          alt="Menu icon"
        />
      </div>
      <div className="flex w-full h-full flex-col items-between justify-between mb-[1.13rem]">
        <div className="mt-[0.9rem]">
          <Components
            iconPath="../../public/grades.png"
            text="Quizes"
            selected={selected === "Quizes"}
            onClick={() => onSelect("Quizes")}
          />
          <Components
            iconPath="../../public/announcements.png"
            text="Announcement"
            selected={selected === "announcements"}
            onClick={() => onSelect("announcements")}
          />
          <Components
            iconPath="../../public/schedule.png"
            text="Schedule"
            selected={selected === "schedule"}
            onClick={() => onSelect("schedule")}
          />
          <Components
            iconPath="../../public/courses.png"
            text="Courses"
            selected={selected === "courses"}
            onClick={() => onSelect("courses")}
          />
          <Components
            iconPath="../../public/performance.png"
            text="Performance"
            selected={selected === "performance"}
            onClick={() => onSelect("performance")}
          />
        </div>
      </div>
      <div className="w-full h-[6.5rem] border-t flex justify-center items-center">
        <Auth />
      </div>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {isMobile ? (
        <>
          <Box sx={{ position: "fixed", top: 0, left: 0, padding: 1 }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {sidebarContent}
          </Drawer>
        </>
      ) : (
        <Box component="nav" sx={{ width: "12.5rem", flexShrink: 0 }}>
          {sidebarContent}
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
