import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

export const studentPaths=[
      {
            name:"Dashboard",
            path:"dashboard",
            element:<StudentDashboard/>
      },
      {
            name:"Offered Courses",
            path:"offered-courses",
            element:<OfferedCourse/>
      }
]