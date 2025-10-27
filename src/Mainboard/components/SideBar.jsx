import React from "react";

const SideBar = ({
showTimetableHandler,showNoticeHandler,showNotesHandler,showcomplaintHandler
}) => {
  return (
    <div className="sideBarSection">
      <ul>
        <li onClick={showTimetableHandler}>Add Timetables</li>
        <li onClick={showNotesHandler}>Add Notes</li>
        <li onClick={showNoticeHandler}>Add Notice </li>
        <li onClick={showcomplaintHandler}>Add Complaint</li>
      </ul>
    </div>
  );
};

export default SideBar;
