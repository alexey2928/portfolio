"use client";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title, className = "" }) => {
	const pathname = usePathname();
	return (
		<Link
			href={href}
			className={`${className} relative group `}
		>
			{title}
			<span
				className={`h-[2px] inline-block bg-black/60 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
					pathname === href ? "w-full" : "w-0"
				}`}
			>
				&nbsp;
			</span>
		</Link>
	);
};

const Navbar = () => {
	return (
		<header className="w-full px-32 py-8 font-medium flex items-center justify-between">
			<nav className="flex items-center">
				<NavLink
					href="/"
					title="Home"
					className="mr-4"
				/>
				<NavLink
					href="/about"
					title="About"
					className="mx-4"
				/>
				<NavLink
					href="/skills"
					title="Skills"
					className="mx-4"
				/>
				<NavLink
					href="/projects"
					title="Projects"
					className="mx-4"
				/>
				<NavLink
					href="/contact"
					title="Contact"
					className="ml-4"
				/>
			</nav>
			<div className="absolute left-[50%] top-2 translate-x-[-50%]">
				<Logo />
			</div>
			<nav className="flex items-center">
				<Link
					href="https://github.com/alexey2928"
					className="mr-4"
				>
					<BsGithub />
				</Link>
				<Link
					href="https://www.linkedin.com/in/akalupaila/"
					className="mx-4"
				>
					<BsLinkedin />
				</Link>
				<Link
					href="https://www.instagram.com/aliaksei2928/"
					className="ml-4"
				>
					<BsInstagram />
				</Link>
			</nav>
		</header>
	);
};
export default Navbar;