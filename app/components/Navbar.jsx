import Link from "next/link";
import DashboardLogo from '../../public/dashboard-logo.png'
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <Image
                src={DashboardLogo}
                alt="Dashboard Logo"
                width={80}
                quality={100}
                placeholder="blur"
            />
            <h1>Alex Dashboard</h1>
            <Link href="/" >Home</Link>
            <Link href="/tickets">Tickets</Link>
        </nav>
    );
};

export default Navbar;