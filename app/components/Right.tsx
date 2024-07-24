"use client"
import React, { useEffect, useRef } from "react"

import { useActiveSection } from "../context/ActiveSectionContext"

import { Section, ExperienceItem, ProjectItem } from "./GlobalComponent"

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
					<p className="mb-4">Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an .</p>
					<p className="mb-4">My main focus these days is building accessible user interfaces for our customers at that covers everything you need to know to build a web app with the Spotify API.</p>
					<p>When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for .</p>
				</div>
			</Section>

			<Section
				ref={(el: any) => (sectionsRef.current[1] = el)}
				id="experience"
				title="Experience"
			>
				<ol className="group/list">
					<ExperienceItem
						dateRange="2024 — Present"
						position="Senior Frontend Engineer, Accessibility"
						company="Klaviyo"
						companyUrl="https://www.klaviyo.com"
						description="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
						technologies={["JavaScript", "TypeScript", "React", "Storybook"]}
					/>

					<ExperienceItem
						dateRange="2024 — Present"
						position="Senior Frontend Engineer, Accessibility"
						company="Klaviyo"
						companyUrl="https://www.klaviyo.com"
						description="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
						technologies={["JavaScript", "TypeScript", "React", "Storybook"]}
					/>
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
					<ProjectItem />
					<ProjectItem />
				</ul>
			</Section>
		</main>
	)
}

export default Right
