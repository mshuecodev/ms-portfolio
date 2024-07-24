"use client"
import React, { createContext, useContext, useState, ReactNode } from "react"

interface ActiveSectionContextProps {
	activeSection: string
	setActiveSection: (section: string) => void
}

const ActiveSectionContext = createContext<ActiveSectionContextProps | undefined>(undefined)

export const ActiveSectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [activeSection, setActiveSection] = useState<string>("")

	return <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>{children}</ActiveSectionContext.Provider>
}

export const useActiveSection = (): ActiveSectionContextProps => {
	const context = useContext(ActiveSectionContext)
	if (context === undefined) {
		throw new Error("useActiveSection must be used within a ActiveSectionProvider")
	}
	return context
}
