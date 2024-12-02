"use client"
import React from "react"
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"
import { NavLink, SocialLink } from "./GlobalComponent"

import { useActiveSection } from "../context/ActiveSectionContext"

interface ProfileData {
	name: string
	subtext: string
	jobStatus: string
	// twitterURL: string
	// instaURL: string
	githubURL: string
	// linkedinURL: string
}

interface LeftProps {
	profileData: ProfileData
}

const Left: React.FC<LeftProps> = ({ profileData }) => {
	const { activeSection } = useActiveSection()

	console.log("activeSection", activeSection)

	return (
		<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
			<div>
				<h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
					<a href="/">{profileData.name}</a>
				</h1>
				<h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">{profileData.subtext}</h2>
				<p className="mt-4 max-w-xs leading-normal">{profileData.jobStatus}</p>
				<nav
					className="nav hidden lg:block"
					aria-label="In-page jump links"
				>
					<ul className="mt-16 w-max">
						<NavLink
							href="#about"
							text="About"
							isActive={activeSection === "about"}
						/>
						<NavLink
							href="#experience"
							text="Experience"
							isActive={activeSection === "experience"}
						/>
						<NavLink
							href="#projects"
							text="Projects"
							isActive={activeSection === "projects"}
						/>
					</ul>
				</nav>
			</div>
			<ul className="ml-1 mt-8 flex items-center">
				<SocialLink
					href={profileData.githubURL}
					label="GitHub"
					icon={<FaGithub className="h-6 w-6" />}
				/>
				{/* <SocialLink
					href={profileData.linkedinURL}
					label="LinkedIn"
					icon={<FaLinkedin className="h-6 w-6" />}
				/> */}
				{/* <SocialLink
					href={profileData.instaURL}
					label="Instagram"
					icon={<FaInstagram className="h-6 w-6" />}
				/>
				<SocialLink
					href={profileData.twitterURL}
					label="Twitter"
					icon={<FaTwitter className="h-6 w-6" />}
				/> */}
			</ul>
		</header>
	)
}

export default Left
