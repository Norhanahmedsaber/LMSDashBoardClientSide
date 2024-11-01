import React, { useState } from "react";
import Sidebar from "./SideBar.tsx";
import Quiz from "./QuizComponet/Quiz.tsx";
import Announcements from "./AnnouncemetComponent/AnnouncementMain.tsx"; 
import Navbar from './Navbar.tsx';
import MidBar from "./MidBar.tsx";
const DashboardLayout: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState("grades");

  return (
    <div className="flex h-screen w-full">
      <Sidebar selected={selectedSection} onSelect={setSelectedSection} />
      <div className="flex flex-col w-full p-4">
        <Navbar />
          <MidBar/>
        <div className="p-4 transition-all duration-300 flex-1">
          {selectedSection === "Quizes" && <Quiz/>}
          {(selectedSection === "announcements" ||
            selectedSection === "schedule" ||
            selectedSection === "courses" ||
            selectedSection === "performance") &&  <Announcements/>}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;