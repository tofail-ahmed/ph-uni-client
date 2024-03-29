import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import CreateMember from "../pages/admin/userManagement/CreateMember";
import StudentData from "../pages/admin/userManagement/StudentData";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";
import SemesterRegistration from "../pages/admin/CourseManagement/SemesterRegistration";
import RegisteredSemesters from "../pages/admin/CourseManagement/RegisteredSemesters";
import CreateCourse from "../pages/admin/CourseManagement/CreateCourse";
import OfferCourse from "../pages/admin/CourseManagement/OfferCourse";
import OfferedCourses from "../pages/admin/CourseManagement/OfferedCourses";
import Courses from "../pages/admin/CourseManagement/Courses";





export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-departmenmt",
        element: <AcademicDepartment />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
     
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "createadmin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "createfaculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "createstudent",
        element: <CreateStudent />,
      },
      {
        name: "Students",
        path: "students-data",
        element: <StudentData />,
      },
      {
        // name: "Student Details",
        path: "students-data/:studentId",
        element: <StudentDetails />,
      },
      {
        name: "Create Member",
        path: "createmember",
        element: <CreateMember />,
      },
    ],
  },
  {
    name: 'Course Management',
    children: [
      {
        name: 'Semester Registration',
        path: 'semester-registration',
        element: <SemesterRegistration />,
      },
      {
        name: 'Registered Semesters',
        path: 'registered-semesters',
        element: <RegisteredSemesters />,
      },
      {
        name: 'Create Course',
        path: 'create-course',
        element: <CreateCourse />,
      },
      {
        name: 'Courses',
        path: 'courses',
        element: <Courses />,
      },
      {
        name: 'Offer Course',
        path: 'offer-course',
        element: <OfferCourse />,
      },
      {
        name: 'Offered Courses',
        path: 'offered-courses',
        element: <OfferedCourses />,
      },
    ],
  },
];

// export const adminRoutes = adminPaths.reduce((acc: IRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc; 
// }, []);

// export const adminSidebarItems = adminPaths.reduce((acc:ISidebarItem[], item) => {
//   if (item.path && item.name) {
//     acc.push({
//       key: item.name,
//       label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//     });
//   }
//   if (item.children) {
//     acc.push({
//       key: item.name,
//       label: item.name,
//       children: item.children.map((child) => ({
//         key: child.name,
//         label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//       })),
//     });
//   }
//   return acc;
// }, []);



//!hardcoded--------------
// export const adminRoutes=[
      // {
      //  index:true,
      //   element: <AdminDashboard />,
      // },
//       {
//        path:"dashboard",
//         element: <AdminDashboard />,
//       },
//       {
//         path: "createstudent",
//         element: <CreateStudent />,

//       },
//       {
//         path: "createadmin",
//         element: <CreateAdmin />,

//       },
//       {
//         path: "createfaculty",
//         element: <CreateFaculty />,

//       },
//     ]
