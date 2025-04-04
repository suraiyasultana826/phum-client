const { AccountBookFilled } = require("@ant-design/icons");

const adminPaths2 = [
    {
        name:'Dashboard',
        path:'/admin/dashboard',
        element:'ADMIN_DASHBOARD'
    },
    {
        name:'User Management',
        children:[
            {
                name:'create Admin',
                path:'/admin/create-admin',
                element:'CREATE_ADMIN'
            },
            {
                name:'create Faculty',
                path:'/admin/create-faculty',
                element:'CREATE_FACULTY'
            },
            {
                name:'create Student',
                path:'/admin/create-student',
                element:'CREATE_STUDENT'
            },
        ]
    },
   
];

const newArray = adminPaths2.reduce((acc, item) => {
    acc.push(item);
    return acc;
},[]);
console.log(newArray);