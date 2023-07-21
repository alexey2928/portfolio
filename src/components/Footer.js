import Link from "next/link";
import Layout from "./Layout";
const Footer = () => {
	return (
		<footer className="w-full border-t-2 border-solid border-dark font-medium text-lg bg-light">
			<Layout className="py-8 flex items-center justify-between">
				<span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
				<Link href="/">Aliaksei Kalupaila</Link>
				<Link
					href="mailto:alexey2928@gmail.com"
					target={"_blank"}
				>
					Get in touch
				</Link>
			</Layout>
		</footer>
	);
};

export default Footer;
