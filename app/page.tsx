import React from "react"
import Left from "./components/Left"
import Right from "./components/Right"
import "tailwindcss/tailwind.css"

import { ActiveSectionProvider } from "./context/ActiveSectionContext"

const profileData = {
	name: "John Doe",
	subtext: "Web Developer",
	jobStatus: "Available for hire",
	twitterURL: "https://twitter.com",
	instaURL: "https://instagram.com",
	githubURL: "https://github.com",
	linkedinURL: "https://linkedin.com"
}

const Home: React.FC = () => (
	<ActiveSectionProvider>
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
	</ActiveSectionProvider>
)

export default Home
