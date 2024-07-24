"use client"
import React, { useEffect, useRef } from "react"

import { useActiveSection } from "../context/ActiveSectionContext"

import { Section, ExperienceItem, ProjectItem } from "./GlobalComponent"
import experienceData from "./experience.json"
import projectsData from "./projects.json"

const aboutMe = "I am Fullstack Developer specializing in both web and mobile application development. With 5 years of experience in the tech industry, I've developed a strong foundation in creating efficient and user-friendly applications."

const aboutMe2 = "As a freelancer, I enjoy working on a variety of projects that keep me engaged and constantly learning. I'm currently diving into cybersecurity to broaded my knowledge and ensure that application I build are secure."

const aboutMe3 = "I'm naturally curious and passionate about my work, always looking for ways to improve my skills and keep up with the latest technology trends."

const Right: React.FC = () => {
	const { setActiveSection } = useActiveSection()
	const sectionsRef = useRef<(HTMLElement | null)[]>([])

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id)
					}
				})
			},
			{ threshold: 0.5 }
		)

		sectionsRef.current.forEach((section) => {
			if (section) observer.observe(section)
		})

		return () => {
			sectionsRef.current.forEach((section) => {
				if (section) observer.unobserve(section)
			})
		}
	}, [setActiveSection])

	return (
		<main
			id="content"
			className="pt-24 lg:w-1/2 lg:py-24"
		>
			<Section
				ref={(el: any) => (sectionsRef.current[0] = el)}
				id="about"
				title="About"
			>
				<div>
					<p className="mb-4">{aboutMe}</p>
					<p className="mb-4">{aboutMe2}</p>
					<p className="mb-4">{aboutMe3}</p>
				</div>
			</Section>

			<Section
				ref={(el: any) => (sectionsRef.current[1] = el)}
				id="experience"
				title="Experience"
			>
				<ol className="group/list">
					{experienceData.map((item, index) => (
						<ExperienceItem
							key={index}
							{...item}
						/>
					))}

					{/* <ExperienceItem
						dateRange="2024 — Present"
						position="Senior Frontend Engineer, Accessibility"
						company="Klaviyo"
						companyUrl="https://www.klaviyo.com"
						description="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
						technologies={["JavaScript", "TypeScript", "React", "Storybook"]}
					/> */}
				</ol>
				<div className="mt-12">
					<a
						className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
						href="/resume.pdf"
						target="_blank"
						rel="noreferrer noopener"
						aria-label="View Full Résumé (opens in a new tab)"
					>
						<span>
							View Full{" "}
							<span className="inline-block">
								Résumé
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
										clipRule="evenodd"
									></path>
								</svg>
							</span>
						</span>
					</a>
				</div>
			</Section>

			<Section
				ref={(el: any) => (sectionsRef.current[2] = el)}
				id="projects"
				title="Projects"
			>
				<ul className="group/list">
					{projectsData.map((item, index) => (
						<ProjectItem
							key={index}
							{...item}
						/>
					))}
				</ul>
			</Section>
		</main>
	)
}

export default Right
