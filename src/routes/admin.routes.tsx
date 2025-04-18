import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";



export const adminPaths = [
    {
        name:'Dashboard',
        path:'dashboard',
        element:<AdminDashboard></AdminDashboard>
    },
    {
        name:'User Management',
        children:[
            {
                name:'create Admin',
                path:'create-admin',
                element:<CreateAdmin></CreateAdmin>
            },
            {
                name:'create Faculty',
                path:'create-faculty',
                element:<CreateFaculty></CreateFaculty>
            },
            {
                name:'create student',
                path:'create-student',
                element:<CreateStudent></CreateStudent>
            },
        ]
    },
    // {
    //     name:'Course Management',
    //     children:[
    //         {
    //             name:'offered course',
    //             path:'offered-course',
    //             element:<CreateAdmin></CreateAdmin>
    //         },
           
    //     ]
    // }
]



//  export const adminSidebarItems = adminPaths.reduce((acc: TSidebarItem[], item) => {
//     if(item.path && item.name){
//      acc.push({
//          key:item.name,
//          label:<NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//      });
//     }
 
//     if(item.children){
//     acc.push({
//      key:item.name,
//      label:item.name,
//      children:item.children.map(child => ({
//          key:child.name,
//          label:<NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>, 
//      }))
//     })
//     }
//      return acc;
//  },[]);


// export const adminRoutes = adminPaths.reduce((acc:TRoute[], item) => {
//     if(item.path && item.element){
//      acc.push({
//          path:item.path,
//          element:item.element,
//      });
//     }
 
//     if(item.children){
//      item.children.forEach((child) => {
//          acc.push({
//              path:child.path,
//              element:child.element,
//          });
//      })
//     }
//      return acc;
//  },[]);

// export const adminPaths = [
//     {
//         index:true,
//         element:<AdminDashboard></AdminDashboard>,
//     },
//     {
//         path:'dashboard',
//         element:<AdminDashboard></AdminDashboard>,
//     },
//     {
//         path:'create-student',
//         element:<CreateStudent></CreateStudent>,
//     },
//     {
//         path:'create-admin',
//         element:<CreateAdmin></CreateAdmin>,
//     },
//     {
//         path:'create-faculty',
//         element:<CreateFaculty></CreateFaculty>,
//     },
// ]