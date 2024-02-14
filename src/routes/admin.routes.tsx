import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";


const adminPaths2=[
    {
      name:"Dashboard",
      path:'/admin/dashboard',
      Element:<AdminDashboard/>
    },
    {
      name:"User Management",
      children:[
            {
                  name:"Create Admin",
                  path:"/admin/createadmin",
                  element:<CreateAdmin/>
            },
            {
                  name:"Create Faculty",
                  path:"/admin/createfaculty",
                  element:<CreateFaculty/>
            },
            {
                  name:"Create Student",
                  path:"/admin/createstudent",
                  element:<CreateStudent/>
            },
      ]
    },
    {
      name:"Course Management",
      children:[
            {
                  name:"Offered Course",
                  path:"/admin/offeredcourse",
                  element:<CreateAdmin/>
            },
           
      ]
    },
]

export const adminPaths=[
      // {
      //  index:true,
      //   element: <AdminDashboard />,
      // },
      {
       path:"dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "createstudent",
        element: <CreateStudent />,
       
      },
      {
        path: "createadmin",
        element: <CreateAdmin />,
       
      },
      {
        path: "createfaculty",
        element: <CreateFaculty />,
       
      },
    ]