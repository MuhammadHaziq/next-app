const Card = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="p-24 m-2 border-spacing-1 border-black flex justify-center justify-items-center bg-slate-400 flex-col"> {children}</div>
    )
}
export default Card