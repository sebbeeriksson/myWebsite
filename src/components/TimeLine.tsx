import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "../cssComponents/TimeLine.css";

interface TimeLineProps {
  currentSection: string;
  onSectionClick: (section: string) => void;
}

const TimeLine: React.FC<TimeLineProps> = ({
  currentSection,
  onSectionClick,
}) => {
  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "aboutMe", label: "About Me" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <Timeline
      position="left"
      className="fade-in" // Apply the fade-in class
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 2,
          height: 250,
        },
      }}
    >
      {sections.map((section, index) => (
        <TimelineItem key={section.id}>
          <TimelineSeparator>
            <TimelineDot
              onClick={() => onSectionClick(section.id)}
              sx={{
                cursor: "pointer",
                bgcolor: currentSection === section.id ? "black" : "grey.300",
                border:
                  currentSection === section.id ? "none" : "2px solid grey",
              }}
            />
            {index < sections.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent
            onClick={() => onSectionClick(section.id)}
            sx={{
              cursor: "pointer",
              color: currentSection === section.id ? "black" : "grey.500",
              fontSize: currentSection === section.id ? "1.2rem" : "1rem",
              fontWeight: currentSection === section.id ? "bold" : "normal",
            }}
          >
            {section.label}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimeLine;
