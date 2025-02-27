import React, { useState } from "react";
import KanbanColumn from "../KanbanColumn/KanbanColumn";
import styles from "./Tasks.module.scss";
import { MdGridView } from "react-icons/md";
import { CiViewColumn } from "react-icons/ci";
import { BiDotsVerticalRounded } from "react-icons/bi";

import { BsViewList } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Tasks = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  const openAddProjectModal = () => {
    setShowAddProjectModal(true);
  };

  const closeAddProjectModal = () => {
    setShowAddProjectModal(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option) => {
    alert(`You selected: ${option}`);
    setShowDropdown(false);
  };
  
  const columns = [
    {
      title: "In Progress 2",
      cards: [
        {
          projectName: "Project Name",
          projectId: "P-101",
          progress: 50,
          status: "NotStarted",
          startDate: "01/01/2024",
          endDate: "31/01/2024",
          profiles: [
            "images/png-profile.png",
            "images/png-profile.png",
            "images/png-profile.png",
          ],
          tag: 'Badges', 
          fileCount: 12, 
        },
        {
          projectName: "Project Name",
          projectId: "P-101",
          progress: 50,
          status: "NotStarted",
          startDate: "01/01/2024",
          endDate: "31/01/2024",
          profiles: [
            "images/png-profile.png",
            "images/png-profile.png",
            "images/png-profile.png",
          ], 
          fileCount: 12, 
        },
        {
          projectName: "Project Name",
          projectId: "P-102",
          progress: 50,
          status: "NotStarted",
          startDate: "01/01/2024",
          endDate: "31/01/2024",
          profiles: [
            "images/png-profile.png",
            "images/png-profile.png",
            "images/png-profile.png",
          ], 
          fileCount: 12, 
        },
        {
          projectName: "Project Name",
          projectId: "P-102",
          progress: 50,
          status: "NotStarted",
          startDate: "01/01/2024",
          endDate: "31/01/2024",
          profiles: [
            "images/png-profile.png",
            "images/png-profile.png",
            "images/png-profile.png",
          ],
          fileCount: 12, 
        },
      ],
    },
    {
      title: "In Review 2",
      cards: [
        {
          projectName: "Project Name",
          projectId: "P-103",
          progress: 50,
          status: "InProgress",
          startDate: "01/01/2024",
          endDate: "31/01/2024",
          profiles: [
            "images/png-profile.png",
            "images/png-profile.png",
            "images/png-profile.png",
          ], 
          fileCount: 12, 
          tag: 'BadgesRed', 
        },
        {
          projectName: "Project Name",
          projectId: "P-103",
          progress: 50,
          status: "InProgress",
          startDate: "01/01/2024",
          endDate: "31/01/2024",
          profiles: [
            "images/png-profile.png",
            "images/png-profile.png",
            "images/png-profile.png",
          ], 
          fileCount: 12, 
        },
        {
          projectName: "Project Name",
          projectId: "P-103",
          progress: 50,
          status: "InProgress",
          startDate: "01/01/2024",
          endDate: "31/01/2024",
          profiles: [
            "images/png-profile.png",
            "images/png-profile.png",
            "images/png-profile.png",
          ],
          fileCount: 12, 
        },
        {
          projectName: "Project Name",
          projectId: "P-103",
          progress: 50,
          status: "InProgress",
          startDate: "01/01/2024",
          endDate: "31/01/2024",
          profiles: [
            "images/png-profile.png",
            "images/png-profile.png",
            "images/png-profile.png",
          ], 
          fileCount: 12, 
        },
      ],
    },
    {
      title: "In Revision 2",
      cards: [
        {
          projectName: "Project Name",
          projectId: "P-103",
          progress: 50,
          status: "Archived",
          startDate: "01/01/2024",
          endDate: "31/01/2024",
          profiles: [
            "images/png-profile.png",
            "images/png-profile.png",
            "images/png-profile.png",
          ], 
          fileCount: 12, 
          tag: 'Badges', 
        },
        {
          projectName: "Project Name",
          projectId: "P-103",
          progress: 50,
          status: "Archived",
          startDate: "01/01/2024",
          endDate: "31/01/2024",
          profiles: [
            "images/png-profile.png",
            "images/png-profile.png",
            "images/png-profile.png",
          ], 
          fileCount: 12, 
        },
        {
          projectName: "Project Name",
          projectId: "P-103",
          progress: 50,
          status: "Archived",
          startDate: "01/01/2024",
          endDate: "31/01/2024",
          profiles: [
            "images/png-profile.png",
            "images/png-profile.png",
            "images/png-profile.png",
          ], 
          fileCount: 12, 
        },
        {
          projectName: "Project Name",
          projectId: "P-103",
          progress: 50,
          status: "Archived",
          startDate: "01/01/2024",
          endDate: "31/01/2024",
          profiles: [
            "images/png-profile.png",
            "images/png-profile.png",
            "images/png-profile.png",
          ], 
          fileCount: 12, 
        },
      ],
    },
    {
      title: "Completed 2",
      cards: [
        {
          projectName: "Project Name",
          projectId: "P-104",
          progress: 50,
          status: "Completed",
          startDate: "01/01/2024",
          endDate: "31/01/2024",
          profiles: [
            "images/png-profile.png",
            "images/png-profile.png",
            "images/png-profile.png",
          ], 
          fileCount: 12, 
        },
        {
          projectName: "Project Name",
          projectId: "P-104",
          progress: 50,
          status: "Completed",
          startDate: "01/01/2024",
          endDate: "31/01/2024",
          profiles: [
            "images/png-profile.png",
            "images/png-profile.png",
            "images/png-profile.png",
          ], 
          fileCount: 12, 
        },
        {
          projectName: "Project Name",
          projectId: "P-104",
          progress: 50,
          status: "Completed",
          startDate: "01/01/2024",
          endDate: "31/01/2024",
          profiles: [
            "images/png-profile.png",
            "images/png-profile.png",
            "images/png-profile.png",
          ], 
          fileCount: 12, 
        },
        {
          projectName: "Project Name",
          projectId: "P-104",
          progress: 50,
          status: "Completed",
          startDate: "01/01/2024",
          endDate: "31/01/2024",
          profiles: [
            "images/png-profile.png",
            "images/png-profile.png",
            "images/png-profile.png",
          ], 
          fileCount: 12, 
        },
      ],
    },
  ];

  return (
    <div className={styles.boardContainer}>

     

      {/* Actions Section */}
      <div className={styles.actions}>
        <div className={styles.actionleft}>
          <p>All Tasks</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="26"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15.7709 6.27466H4.2297C3.88354 6.27466 3.69025 6.64015 3.90463 6.88967L9.6752 13.581C9.84038 13.7725 10.1584 13.7725 10.3254 13.581L16.0959 6.88967C16.3103 6.64015 16.117 6.27466 15.7709 6.27466Z"
                fill="#2D446E"
              />
            </svg>
          </span>
        </div>

        <div className={styles.rytDiv}>
          <div className={styles.firtleft}>
            <BsViewList />
          </div>
          <button className={styles.toggleViewButton} onClick={toggleViewMode}>
            {viewMode === "grid" ? <MdGridView /> : <CiViewColumn />}
          </button>

          {/* Three-Dot Menu */}
          <div className={styles.threeDot}>
            <BiDotsVerticalRounded onClick={toggleDropdown} />
            {showDropdown && (
              <div className={styles.dropdownMenu}>
                <ul>
                  <li onClick={() => handleOptionClick("Edit Project")}>
                    Edit Project
                  </li>
                  <li onClick={() => handleOptionClick("Delete Project")}>
                    Delete Project
                  </li>
                  <li onClick={() => handleOptionClick("View Details")}>
                    View Details
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Kanban Board */}
      <div
        className={`${styles.board} ${
          viewMode === "list" ? styles.listView : ""
        }`}
      >
        {columns.map((column, index) => (
          <KanbanColumn key={index} title={column.title} cards={column.cards} />
        ))}
      </div>

      {/* Add Project Modal */}
      {showAddProjectModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Add New Project</h3>
            <form>
              <label>Project Name</label>
              <input type="text" placeholder="Enter project name" />
              <label>Start Date</label>
              <input type="date" />
              <label>End Date</label>
              <input type="date" />
              <button type="submit">Add Project</button>
            </form>
            <button
              className={styles.closeModal}
              onClick={closeAddProjectModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
