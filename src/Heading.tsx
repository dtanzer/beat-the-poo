import React from "react"

export interface HeadingProps {
	text: string,
	children: React.ReactNode,
}
export function Heading({ text, children }: HeadingProps) {
	return <h1>{text} {children}</h1>
}
