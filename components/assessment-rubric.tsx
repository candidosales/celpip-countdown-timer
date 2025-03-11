"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"

export default function AssessmentRubric() {
	const [scores, setScores] = useState<number[]>(new Array(10).fill(0))
	const [estimatedLevel, setEstimatedLevel] = useState("")
	const [actualLevel, setActualLevel] = useState("")

	const criteria = [
		"The speaker addresses the task.",
		"The speaker speaks clearly with minimal pausing and hesitations.",
		"The speaker accurately uses a wide variety of words.",
		"The speaker uses time indicators to add depth and detail to response.",
		"The speaker avoids repeating ideas.",
		"The speaker's tone is appropriate for the social context of the task.",
		"The speaker uses appropriate rhythm, pronunciation, and intonation patterns.",
		"The speaker concludes with an appropriate closing remark.",
		"The response contains ideas that are well organized, easy to follow, and express precise and/or deeper levels of meaning.",
		"The response is long enough.",
	]

	const totalScore = scores.reduce((acc, curr) => acc + curr, 0)

	return (
		<>
			<div className="border border-gray-800">
				{/* Scoring levels header */}
				<div className="grid grid-cols-4 border-b border-gray-800">
					{["0 - no attempt", "1 - poor attempt", "2 - adequate", "3 - good"].map((level,) => (
						<div
							key={level}
							className="p-3 text-center bg-gray-200 border-r last:border-r-0 border-gray-800 font-medium"
						>
							{level}
						</div>
					))}
				</div>

				{/* Assessment Title */}
				<div className="p-3 text-center bg-gray-200 border-b border-gray-800">
					<h2 className="text-xl font-bold">Assessment of Performance</h2>
				</div>

				{/* Assessment Criteria */}
				{criteria.map((criterion, index) => (
					<div
						key={index}
						className={`grid grid-cols-[1fr_100px] border-b border-gray-800 ${index % 2 === 0 ? "bg-white" : "bg-gray-100"
							}`}
					>
						<div className="p-3 border-r border-gray-800">
							<div className="flex items-center">
								<span className="text-lg">•</span>
								<span className="ml-2">{criterion}</span>
							</div>
						</div>
						<div className="p-3 flex items-center justify-end">
							<Input
								type="number"
								min={0}
								max={3}
								value={scores[index] || ""}
								onChange={(e) => {
									const newScores = [...scores]
									newScores[index] = Number(e.target.value)
									setScores(newScores)
								}}
								className="w-12 text-right"
							/>
							<span className="ml-1">/3</span>
						</div>
					</div>
				))}

				{/* Total Score */}
				<div className="grid grid-cols-[1fr_100px] bg-gray-200 border-b border-gray-800">
					<div className="p-3 border-r border-gray-800 font-bold">Total</div>
					<div className="p-3 flex items-center justify-end">
						<span>{totalScore}</span>
						<span className="ml-1">/30</span>
					</div>
				</div>
			</div>

			{/* CELPIP Levels */}
			<div className="mt-6 space-y-4">
				<div className="flex items-center gap-4">
					<label htmlFor="estimated-level" className="text-lg">
						Estimated CELPIP Level:
					</label>
					<Input
						id="estimated-level"
						value={estimatedLevel}
						onChange={(e) => setEstimatedLevel(e.target.value)}
						className="w-32 border-b border-gray-400"
					/>
				</div>
				<div className="flex items-center gap-4">
					<label htmlFor="actual-level" className="text-lg">
						Actual CELPIP Level:
					</label>
					<Input
						id="actual-level"
						value={actualLevel}
						onChange={(e) => setActualLevel(e.target.value)}
						className="w-32 border-b border-gray-400"
					/>
				</div>
			</div>
		</>
	)
}

