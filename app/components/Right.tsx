// components/Right.tsx
import React from "react"

const Right: React.FC = () => (
	<main
		id="content"
		className="pt-24 lg:w-1/2 lg:py-24"
	>
		<section
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			id="about"
		>
			<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
			</div>
			<div>
				<p className="mb-4">Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an .</p>
				<p className="mb-4">My main focus these days is building accessible user interfaces for our customers at that covers everything you need to know to build a web app with the Spotify API.</p>
				<p>When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for .</p>
			</div>
		</section>

		{/* EXPERIENCE SECTION */}
		<section
			id="experience"
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-label="Work experience"
		>
			<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
			</div>
			<div>
				<ol className="group/list">
					<li className="mb-12">
						<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
							<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
							<header
								className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
								aria-label="2024 to Present"
							>
								2024 — Present
							</header>
							<div className="z-10 sm:col-span-6">
								<h3 className="font-medium leading-snug text-slate-200">
									<div>
										<a
											className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
											href="https://www.klaviyo.com"
											target="_blank"
											rel="noreferrer noopener"
											aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
										>
											<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
											<span>
												Senior Frontend Engineer, Accessibility ·{" "}
												<span className="inline-block">
													Klaviyo
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
														aria-hidden="true"
													>
														<path
															fill-rule="evenodd"
															d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
															clip-rule="evenodd"
														></path>
													</svg>
												</span>
											</span>
										</a>
									</div>
								</h3>
								<p className="mt-2 text-sm leading-normal">Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
								<ul
									className="mt-2 flex flex-wrap"
									aria-label="Technologies used"
								>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">TypeScript</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Storybook</div>
									</li>
								</ul>
							</div>
						</div>
					</li>
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
										fill-rule="evenodd"
										d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
										clip-rule="evenodd"
									></path>
								</svg>
							</span>
						</span>
					</a>
				</div>
			</div>
		</section>

		{/* PROJECTS SECTION */}
		<section
			id="projects"
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-label="Selected projects"
		>
			<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
			</div>

			<div>
				<ul className="group/list">
					<li className="mb-12">
						<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
							<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

							<div className="z-10 sm:order-2 sm:col-span-6">
								<h3>
									<a
										className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
										href="https://www.newline.co/courses/build-a-spotify-connected-app"
										target="_blank"
										rel="noreferrer noopener"
										aria-label="Build a Spotify Connected App (opens in a new tab)"
									>
										<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
										<span>
											Build a Spotify Connected{" "}
											<span className="inline-block">
												App
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
													aria-hidden="true"
												>
													<path
														fill-rule="evenodd"
														d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
														clip-rule="evenodd"
													></path>
												</svg>
											</span>
										</span>
									</a>
								</h3>
								<p className="mt-2 text-sm leading-normal">Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.</p>

								<ul
									className="mt-2 flex flex-wrap"
									aria-label="Technologies used:"
								>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Express</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Spotify API</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Heroku</div>
									</li>
								</ul>
							</div>

							<img
								alt="Build a Spotify Connected App Newline course marketing card"
								loading="lazy"
								width="200"
								height="48"
								decoding="async"
								data-nimg="1"
								className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
								// style="color:transparent"
								srcSet="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75 2x"
								src="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75"
							></img>
						</div>
					</li>
				</ul>
			</div>

			<div className="mt-12">
				<a
					className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
					aria-label="View Full Project Archive"
					href="/archive"
				>
					<span>
						<span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View Full Project </span>
						<span className="whitespace-nowrap">
							<span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Archive</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
									clip-rule="evenodd"
								></path>
							</svg>
						</span>
					</span>
				</a>
			</div>
		</section>
	</main>
)

export default Right
