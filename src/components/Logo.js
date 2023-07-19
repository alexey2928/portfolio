"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);
const Logo = () => {
	return (
		<nav className="flex items-center justify-center mt-2">
			<MotionLink
				href="/"
				className="w-16 h-16 border flex items-center justify-center rounded-full text-xl"
				whileHover={{
					backgroundColor: "whitesmoke",
					fontWeight: "bold",
					transition: { duration: 1, repeat: Infinity },
				}}
			>
				AK
			</MotionLink>
		</nav>
	);
};
export default Logo;
