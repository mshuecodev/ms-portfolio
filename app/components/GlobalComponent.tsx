"use client"
import React, { forwardRef } from "react"

const SectionHeader = forwardRef<HTMLHeadingElement, { id: string; title: string }>(({ id, title }, ref) => (
	<div
		ref={ref}
		className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-emerald-400 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
	>
		<h2
			id={id}
			className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only"
		>
			{title}
		</h2>
	</div>
))

const Section = forwardRef<HTMLDivElement, { id: string; title: string; children: React.ReactNode }>(({ id, title, children }, ref) => (
	<section
		id={id}
		ref={ref}
		className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
		aria-label={title}
	>
		<SectionHeader
			id={id}
			title={title}
			ref={ref}
		/>
		{children}
	</section>
))

const ExperienceItem: React.FC<{
	dateRange: string
	position: string
	company: string
	companyUrl: string
	description: string
	technologies: string[]
}> = ({ dateRange, position, company, companyUrl, description, technologies }) => (
	<li className="mb-12">
		<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover:list:opacity-50">
			<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-emerald-950 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
			<header
				className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
				aria-label={dateRange}
			>
				{dateRange}
			</header>
			<div className="z-10 sm:col-span-6">
				<h3 className="font-medium leading-snug text-slate-200">
					<a
						className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
						href={companyUrl}
						target="_blank"
						rel="noreferrer noopener"
						aria-label={`${position} at ${company} (opens in a new tab)`}
					>
						<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
						<span>
							{position} · <span className="inline-block">{company}</span>
						</span>
					</a>
				</h3>
				<p className="mt-2 text-sm leading-normal">{description}</p>
				<ul
					className="mt-2 flex flex-wrap"
					aria-label="Technologies used"
				>
					{technologies.map((tech) => (
						<li
							key={tech}
							className="mr-1.5 mt-2"
						>
							<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tech}</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	</li>
)

// LEFT COMPONENT
const NavLink: React.FC<{ href: string; text: string; isActive: boolean }> = ({ href, text, isActive }) => (
	<li>
		<a
			className={`group flex items-center py-3 ${isActive ? "text-blue-200" : ""}`}
			href={href}
		>
			<span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${isActive ? "w-16 bg-blue-200" : ""} group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}></span>
			<span className={`nav-text text-xs font-bold uppercase tracking-widest ${isActive ? "text-blue-200" : "text-slate-500"}  group-hover:text-slate-200 group-focus-visible:text-slate-200`}>{text}</span>
		</a>
	</li>
)

const SocialLink: React.FC<{ href: string; label: string; icon: JSX.Element }> = ({ href, label, icon }) => (
	<li className="mr-5 text-xs shrink-0">
		<a
			className="block hover:text-slate-200"
			href={href}
			target="_blank"
			rel="noreferrer noopener"
			aria-label={label}
			title={label}
		>
			<span className="sr-only">{label}</span>
			{icon}
		</a>
	</li>
)

const ProjectItem = () => (
	<li className="mb-12">
		<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover:list:opacity-50">
			<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-emerald-950 lg:group-hover:shadow-lg"></div>
			<div className="z-10 sm:order-2 sm:col-span-6">
				<h3>
					<a
						className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base transition-colors duration-300 ease-in-out"
						href="https://www.newline.co/courses/build-a-spotify-connected-app"
						target="_blank"
						rel="noreferrer noopener"
						aria-label="Build a Spotify Connected App (opens in a new tab)"
					>
						Build a Spotify Connected
						<span className="inline-block ml-1">
							App
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="inline-block h-4 w-4 ml-1 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
									clipRule="evenodd"
								></path>
							</svg>
						</span>
					</a>
				</h3>
				<p className="mt-2 text-sm leading-normal">A comprehensive tutorial on building a web app with the Spotify API. The course covers authentication, fetching user data, and building an interactive user interface.</p>
				<ul
					className="mt-2 flex flex-wrap"
					aria-label="Technologies used"
				>
					{["React", "TypeScript", "Spotify API"].map((tech, index) => (
						<li
							key={index}
							className="mr-1.5 mt-2"
						>
							<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tech}</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	</li>
)

export { SectionHeader, Section, ExperienceItem, NavLink, SocialLink, ProjectItem }
