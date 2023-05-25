import Navbar from "./Navbar";

export default function Layout ({children}) {
    return (
        <div className="m-4">
            <Navbar />
            {children}
        </div>
    )
}