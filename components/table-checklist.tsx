import React from "react"

import { Checkbox } from "@/components/ui/checkbox"

interface ChecklistProps {
	taskNumber: number
	items: string[]
	title?: string
}

export default function TableChecklist({ taskNumber, items, title }: ChecklistProps) {
	return (
		<>
			<div className="border border-gray-800">
				<div className="grid grid-cols-[100px_1fr]">
					{/* Header row */}
					<div className="bg-gray-300 border-b border-gray-800 p-3 flex items-center justify-center">
						<span className="font-medium">✓ or ✗</span>
					</div>
					<div className="bg-gray-300 border-b border-gray-800 p-3">
						<h2 className="text-xl font-bold">{title}</h2>
					</div>

					{/* Checklist Items */}
					{items.map((text, index) => (
						<React.Fragment key={`task${taskNumber}-${index}`}>
							<div className="border-b border-r border-gray-800 flex items-center justify-center bg-white">
								<Checkbox id={`task${taskNumber}-${index}`} className="h-5 w-5" />
							</div>
							<div className="border-b border-gray-800 p-3 bg-white">
								<p className="text-lg">{`${index + 1}. ${text}`}</p>
							</div>
						</React.Fragment>
					))}
				</div>
			</div>
		</>
	)
}