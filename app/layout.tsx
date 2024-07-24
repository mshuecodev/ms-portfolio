import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
// 	metadataBase: new URL("https://mshuecodev.io"),
// 	title: {
// 		default: "ms-dev",
// 		template: "%s | MS HUECODEV"
// 	},
// 	description: "Developer",
// 	openGraph: {
// 		title: "MS HUECODEV",
// 		description: "Developer",
// 		url: "https://mshuecodev.io",
// 		siteName: "MS HUECODEV",
// 		locale: "en_US",
// 		type: "website"
// 	},
// 	robots: {
// 		index: true,
// 		follow: true,
// 		googleBot: {
// 			index: true,
// 			follow: true,
// 			"max-video-preview": -1,
// 			"max-image-preview": "large",
// 			"max-snippet": -1
// 		}
// 	}
// 	// twitter: {
// 	// 	title: "Lee Robinson",
// 	// 	card: "summary_large_image"
// 	// },
// 	// verification: {
// 	// 	google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
// 	// 	yandex: "14d2e73487fa6c71"
// 	// }
// }

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
				{/* <main>{children}</main> */}
				{children}
			</body>
		</html>
	)
}
