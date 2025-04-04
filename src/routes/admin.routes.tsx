import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";


const adminPaths2 = [
    {
        name:'Dashboard',
        path:'/admin/dashboard',
        element:<AdminDashboard></AdminDashboard>
    },
    {
        name:'User Management',
        children:[
            {
                name:'create Admin',
                path:'/admin/create-admin',
                element:<CreateAdmin></CreateAdmin>
            },
            {
                name:'create Faculty',
                path:'/admin/create-faculty',
                element:<CreateFaculty></CreateFaculty>
            },
            {
                name:'create student',
                path:'/admin/create-student',
                element:<CreateStudent></CreateStudent>
            },
        ]
    },
    {
        name:'Course Management',
        children:[
            {
                name:'offered course',
                path:'/admin/offered-course',
                element:<CreateAdmin></CreateAdmin>
            },
           
        ]
    }
]


export const adminPaths = [
    {
        index:true,
        element:<AdminDashboard></AdminDashboard>,
    },
    {
        path:'dashboard',
        element:<AdminDashboard></AdminDashboard>,
    },
    {
        path:'create-student',
        element:<CreateStudent></CreateStudent>,
    },
    {
        path:'create-admin',
        element:<CreateAdmin></CreateAdmin>,
    },
    {
        path:'create-faculty',
        element:<CreateFaculty></CreateFaculty>,
    },
]