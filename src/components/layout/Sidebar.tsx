import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";

const {  Sider } = Layout;
const Sidebar = () => {
    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        
      >
        <div style={{color:'white', textAlign:'center', height:'4rem', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <h1 >PH Uni</h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItemsGenerator(adminPaths,'admin')} />
      </Sider>
    );
};

export default Sidebar;