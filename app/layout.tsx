import "./globals.css"

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="bg-emerald-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">{children}</body>
		</html>
	)
}
