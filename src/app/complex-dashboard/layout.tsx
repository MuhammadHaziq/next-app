export default function ComplexDashboardLayout({children, users,
    revenue,
    notifications, login}:{
    children:React.ReactNode;
    users:React.ReactNode;
    revenue:React.ReactNode;
    notifications:React.ReactNode;
    login:React.ReactNode
}){
    const isLogin = false

    return isLogin ? (<div className="flex flex-row">
        <div>{children}</div>
        <div className="flex flex-col">
            {users}
            {revenue}
        </div>
        <div className="flex flex-1">
            {notifications}
        </div>
        </div>
    ): <div className="flex flex-row">{login}</div>;
}