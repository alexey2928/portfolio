import "./globals.css";
import { Inter } from "next/font/google";
import { Ysabeau } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const ysabeau = Ysabeau({ subsets: ["latin"] });

export const metadata = {
	title: "Aliaksei Kalupaila",
	description: "Aliaksei Kalupaila's Portfolio",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={ysabeau.className}>{children}</body>
		</html>
	);
}
