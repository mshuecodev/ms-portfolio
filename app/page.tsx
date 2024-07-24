"use client"
import React, { useState, useRef, useEffect } from "react"
import Left from "./components/Left"
import Right from "./components/Right"
import "tailwindcss/tailwind.css"

import { ActiveSectionProvider } from "./context/ActiveSectionContext"

const profileData = {
	name: "Hi, I'm Misna Syari",
	subtext: "Fullstack Developer",
	jobStatus: "Currently freelancing and loving it!",
	// twitterURL: "https://twitter.com",
	// instaURL: "https://instagram.com",
	githubURL: "https://github.com",
	linkedinURL: "https://linkedin.com"
}

const Home: React.FC = () => {
	const [backgroundStyle, setBackgroundStyle] = useState("radial-gradient(600px at 829px 1693px, rgba(29, 78, 216, 0.15), transparent 80%)")

	const handleMouseMove = (event) => {
		const { clientX, clientY } = event
		setBackgroundStyle(`radial-gradient(600px at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`)
	}

	useEffect(() => {
		document.addEventListener("mousemove", handleMouseMove)

		return () => {
			document.removeEventListener("mousemove", handleMouseMove)
		}
	}, [])

	return (
		<ActiveSectionProvider>
			<div>
				<div
					className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
					style={{ background: backgroundStyle }}
				></div>
				<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
					<a
						href="#content"
						className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
					>
						Skip to Content
					</a>
					<div className="lg:flex lg:justify-between lg:gap-4">
						<Left profileData={profileData} />
						<Right />
					</div>
				</div>
			</div>
		</ActiveSectionProvider>
	)
}

export default Home
