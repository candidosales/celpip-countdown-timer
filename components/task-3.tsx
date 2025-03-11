"use client"

import React from "react"

import { Checkbox } from "@/components/ui/checkbox"

export default function Task3() {
	return (
		<div className="max-w-4xl mx-auto p-6  space-y-8">
			{/* Task 3 */}
			<div>
				<h1 className="text-2xl font-bold mb-4">Task 3–Describing a Scene</h1>
				<div className="border border-gray-800">
					<div className="grid grid-cols-[100px_1fr]">
						{/* Header row */}
						<div className="bg-gray-300 border-b border-gray-800 p-3 flex items-center justify-center">
							<span className="font-medium">✓ or ✗</span>
						</div>
						<div className="bg-emerald-700 text-white border-b border-gray-800 p-3">
							<h2 className="text-xl font-bold">Checklist for Speaking Task 3</h2>
						</div>

						{/* Task 3 Checklist Items */}
						{[
							"Your partner set the scene.",
							"Your partner described items in relation to each other using prepo-\nsitions of location.",
							"For each idea discussed, specific details were included.",
							"Your partner's description gave you a clear mental image of the\npicture.",
							"The description was concluded with a sentence that summarized a\nkey feature about the picture.",
						].map((text, index) => (
							<React.Fragment key={`task3-${index}`}>
								<div className="border-b border-r border-gray-800 flex items-center justify-center">
									<Checkbox id={`task3-${index}`} className="h-5 w-5" />
								</div>
								<div className="border-b border-gray-800 p-3">
									<p className="text-lg">{`${index + 1}. ${text}`}</p>
								</div>
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

