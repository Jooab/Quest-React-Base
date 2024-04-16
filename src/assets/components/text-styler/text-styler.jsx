export const TextStyler = ({children, color, uppercase}) => {
    return (
        <div className="tnt" style={{ color : color, textTransform:uppercase }}>
            {children}
        </div>
    )
}
