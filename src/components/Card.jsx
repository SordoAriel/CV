export default function Card ({children, className}) {
    return (
        <div className={`bg-sky-900 bg-opacity-40 rounded border p-3 ${className}`}>
            {children}
        </div>
    )
}
