export default function ComplexDashboardLayout({children, users,
    revenue,
    notifications}:{
    children:React.ReactNode;
    users:React.ReactNode;
    revenue:React.ReactNode;
    notifications:React.ReactNode
}){
    return (<div className="flex flex-row">
        <div>{children}</div>
        <div className="flex flex-col">
            {users}
            {revenue}
        </div>
        <div className="flex flex-1">
            {notifications}
        </div>
        </div>
    );
}