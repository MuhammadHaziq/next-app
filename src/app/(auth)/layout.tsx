"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [{name:"Login", href:"/login"},{name:"Sign Up", href:"/sign-up"},{name:"Forgot Password", href:"/forgot-password"}]

export default function AuthLayout({
    children,
}:{children:React.ReactNode}){
/** Get Active Links */
const pathName = usePathname()
    return (
        <div>
       {navLinks?.map((item)=> {
        const isActive = pathName.startsWith(item.href)
            return (
                <Link href={item.href} key={item.name} className={`mr-5 ${isActive ? "font-extrabold text-red-800" : "text-blue-500"}`}> {item.name}</Link>
            )
       } )}
       {children}
        </div>
    )
}