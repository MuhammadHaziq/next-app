const Card = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="p-24 m-24 border-spacing-1 border-black flex justify-center justify-items-center"> {children}</div>
    )
}
export default Card