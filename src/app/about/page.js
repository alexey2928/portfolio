// "use client";
// import React, { useEffect, useRef } from "react";
// import AnimatedText from "@/components/AnimatedText";
// import Image from "next/image";
// import Layout from "@/components/Layout";
// import aboutPic from "../../../public/images/about.jpg";
// import { useInView, useMotionValue, useSpring } from "framer-motion";

// const AnimatedNumbers = ({ value }) => {
// 	const ref = useRef(null);
// 	const motionValue = useMotionValue(0);
// 	const springValue = useSpring(motionValue, { duration: 3000 });
// 	const isInView = useInView(ref);
// 	useEffect(() => {
// 		if (isInView) {
// 			motionValue.set(value);
// 		}
// 	}, [isInView, value, motionValue]);
// 	useEffect(() => {
// 		springValue.on("change", (latest) => {
// 			if (ref.current && latest.toFixed(0) <= value) {
// 				ref.current.textContent = latest.toFixed(0);
// 			}
// 		});
// 	}, [springValue, value]);
// 	return <span ref={ref}></span>;
// };

// const about = () => {
// 	return (
// 		<>
// 			<main className="flex w-full flex-col items-center justify-center min-h-screen bg-light">
// 				<Layout className="pt-0">
// 					<AnimatedText
// 						text="Passion Fuels Purpose!"
// 						className="mb-16"
// 					/>
// 					<div className="grid w-full grid-cols-8 gap-16">
// 						<div className="col-span-3 flex flex-col items-start justify-start">
// 							<h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
// 								My Path
// 							</h2>
// 							<p className="font-medium">
// 								I am a software engineer with a passion for creating
// 								user-friendly web applications. My professional background is in
// 								accounting and finances, where I helped clients maintain
// 								accurate and complete financial records, prepared tax returns,
// 								and made sound financial decisions. I have learned how to
// 								analyze and identify trends and make recommendations on how the
// 								business can improve its financial performance.
// 							</p>
// 							<p className="font-medium my-4">
// 								I recently made the difficult decision to change careers and
// 								pursue my passion for application development. I was drawn to
// 								tech because of its work-life balance, and robust network of
// 								industries. I love that I still get to work and collaborate as
// 								part of a team while also finally having the opportunity to
// 								explore and flex my creativity. I believe that my equable nature
// 								and positive attitude makes me a valuable member of any team.
// 							</p>
// 							<p className="font-medium mb-4">
// 								I am thrilled to bring my skills and experience to a new career
// 								in app development and am eager to learn from experienced
// 								professionals in the industry. I am looking for opportunities to
// 								work on different app development projects and continue growing
// 								as a software engineer. It's extremely exciting to be in an
// 								industry that is always changing and provides endless room to
// 								grow!
// 							</p>
// 							<p className="font-medium">
// 								If you're looking for a dedicated and driven Junior Fullstack
// 								Web Developer who is committed to delivering high-quality
// 								solutions, I would love to connect and learn more about
// 								opportunities to contribute to your team.
// 							</p>
// 						</div>
// 						<div className="col-span-3 relative h-max rounded-2xl border-2 border-solid - border-dark bg-light p-4">
// 							<div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
// 							<Image
// 								src={aboutPic}
// 								className="w-full h-auto rounded-2xl"
// 								alt="Aliaksei Kalupaila"
// 							/>
// 						</div>
// 						<div className="col-span-2 flex flex-col items-end justify-start">
// 							<div className="flex flex-col items-end justify-center mb-12">
// 								<span className="inline-block text-7xl font-bold">
// 									<AnimatedNumbers value={10} />+
// 								</span>
// 								<h2 className="text-xl font-medium capitalize text-dark/75">
// 									projects completed
// 								</h2>
// 							</div>

// 							<div className="flex flex-col items-end justify-center">
// 								<span className="inline-block text-7xl font-bold">
// 									<AnimatedNumbers value={2} />+
// 								</span>
// 								<h2 className="text-xl font-medium capitalize text-dark/75">
// 									years of experience
// 								</h2>
// 							</div>
// 						</div>
// 					</div>
// 				</Layout>
// 			</main>
// 		</>
// 	);
// };
// export default about;
