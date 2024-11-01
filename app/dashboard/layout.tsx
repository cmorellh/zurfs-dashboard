import SideNav from '@/app/ui/dashboard/sidenav';
import "./layout.css";

export const experimental_ppr = true;

export default function Layout({ 
    children 
}: 
{ children: React.ReactNode 
    
}) {
    return (
    <div className="main_div">
        <div className="sidenav_div">
        <SideNav />
        </div>
        <div className="children_div">{children}</div>
    </div>
    );
}
