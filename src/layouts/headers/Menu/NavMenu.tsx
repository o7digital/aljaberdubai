"use client";
import Link from "next/link.js";
import Image from "next/image";

const NavMenu = () => {
    return (
        <ul className="navbar-nav align-items-lg-center">
            <li className="d-block d-lg-none">
                <div className="logo">
                    <Link href="/" className="d-inline-flex align-items-center gap-3 text-decoration-none">
                        <Image src="/logo/logo.png" alt="ALJABER DUBAI logo" width={420} height={108} priority style={{ maxHeight: "108px", height: "auto", width: "auto" }} />
                        <span className="fw-semibold text-uppercase text-dark">ALJABER DUBAI</span>
                    </Link>
                </div>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/purchase">Purchase</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/about_us_01">About Us</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/sales">Sales</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/insurance">Insurance</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/blog_01">Blog</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/contact">Contact Us</Link>
            </li>
        </ul>
    );
};

export default NavMenu;

