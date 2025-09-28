import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

const CurriculumContainer = styled.div`
  width: 250px;
  padding: 20px;
  border-right: 1px solid #eee;
  font-family: Arial, sans-serif;
`;

const CourseContentTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const CurriculumItem = styled(Link)<{ active?: boolean; completed?: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#007bff" : "#555")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const Icon = styled.div<{ completed?: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${(props) => (props.completed ? "#28a745" : "#ccc")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background-color: ${(props) => (props.completed ? "#28a745" : "transparent")};
  color: ${(props) => (props.completed ? "#fff" : "#ccc")};
  font-size: 12px;

  ${(props) =>
    props.completed &&
    `
    &::before {
      content: '✓';
    }
  `}
`;

const ActiveIcon = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;
  margin-right: 15px;
  margin-left: 5px; /* Adjust for alignment with other icons */
`;

const InactiveIcon = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-right: 10px;
`;

const Curriculum: React.FC = () => {
  const location = useLocation();

  const curriculumItems = [
    { id: "intro", label: "Introduction", type: "lesson", completed: false, path: "/lesson/intro" },
    { id: "lesson1", label: "Lesson 1", type: "lesson", completed: true, path: "/lesson/1" },
    { id: "quiz1", label: "Quiz 1", type: "quiz", completed: true, path: "/quiz/1" },
    { id: "lesson2", label: "Lesson 2", type: "lesson", completed: true, path: "/lesson/2" },
    { id: "training1", label: "Training 1", type: "training", completed: true, path: "/training/1" },
    { id: "lesson3", label: "Lesson 3", type: "lesson", completed: true, path: "/lesson/3" },
    { id: "lesson4", label: "Lesson 4", type: "lesson", completed: false, path: "/lesson/4" },
    { id: "quiz2", label: "Quiz 2", type: "quiz", completed: false, path: "/quiz/2" },
    { id: "conclusion", label: "Conclusion", type: "lesson", completed: false, path: "/lesson/conclusion" },
  ];

  return (
    <CurriculumContainer>
      <CourseContentTitle>Course Content</CourseContentTitle>
      {curriculumItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <CurriculumItem
            key={item.id}
            to={item.path}
            active={isActive}
            completed={item.completed}
          >
            {isActive ? (
              <ActiveIcon />
            ) : item.completed ? (
              <Icon completed />
            ) : (
              <InactiveIcon />
            )}
            <p>{item.label}</p>
          </CurriculumItem>
        );
      })}
    </CurriculumContainer>
  );
};

export default Curriculum;
