import { Checkbox } from "@/components/ui/checkbox"

export default function Task1() {
	return (
		<>
			<h1 className="text-2xl italic mb-6">Assess your partner's Speaking response.</h1>

			<div className="border border-gray-800">
				<div className="grid grid-cols-[100px_1fr]">
					{/* Header row */}
					<div className="bg-gray-300 border-b border-gray-800 p-3 flex items-center justify-center">
						<span className="font-medium">✓ or ✗</span>
					</div>
					<div className="bg-gray-300 border-b border-gray-800 p-3">
						<h2 className="text-xl font-bold">Checklist for Speaking Task 1–Partner Assessment</h2>
					</div>

					{/* Question 1 */}
					<div className="border-b border-r border-gray-800 flex items-center justify-center">
						<Checkbox id="q1" className="h-5 w-5" />
					</div>
					<div className="border-b border-gray-800 p-3">
						<p className="text-lg">1. Did your partner speak for 90 seconds?</p>
					</div>

					{/* Question 2 */}
					<div className="border-b border-r border-gray-800 flex items-center justify-center">
						<Checkbox id="q2" className="h-5 w-5" />
					</div>
					<div className="border-b border-gray-800 p-3">
						<p className="text-lg">2. Did your partner speak directly to Mary?</p>
					</div>

					{/* Question 3 */}
					<div className="border-b border-r border-gray-800 flex items-center justify-center">
						<Checkbox id="q3" className="h-5 w-5" />
					</div>
					<div className="border-b border-gray-800 p-3">
						<p className="text-lg">3. Was your partner's advice clear and polite?</p>
					</div>

					{/* Question 4 */}
					<div className="border-b border-r border-gray-800 flex items-center justify-center">
						<Checkbox id="q4" className="h-5 w-5" />
					</div>
					<div className="border-b border-gray-800 p-3">
						<p className="text-lg">4. Was it easy to follow? Were both pros and cons presented?</p>
					</div>

					{/* Question 5 */}
					<div className="border-b border-r border-gray-800 flex items-center justify-center">
						<Checkbox id="q5" className="h-5 w-5" />
					</div>
					<div className="border-b border-gray-800 p-3">
						<p className="text-lg">5. Did your partner conclude with an appropriate closing remark?</p>
					</div>

					{/* Question 6 - spans full width */}
					<div className="col-span-2 p-3">
						<p className="text-lg">6. What can your partner do to improve his or her answer?</p>
						<div className="h-24"></div> {/* Space for writing answer */}
					</div>
				</div>
			</div>
		</>
	)
}