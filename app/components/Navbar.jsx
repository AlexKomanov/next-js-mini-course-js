import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <h1>Alex Dashboard</h1>
            <Link href="/" >Home</Link>
            <Link href="/tickets">Tickets</Link>
        </nav>
    );
};

export default Navbar;