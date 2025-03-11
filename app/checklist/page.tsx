"use client"

import AssessmentRubric from "@/components/assessment-rubric"
import TableChecklist from "@/components/table-checklist"

export default function Checklist() {

	const task1Items = [
		"Did your partner speak for 90 seconds?",
		"Did your partner speak directly?",
		"Was your partners advice clear and polite?",
		"Was it easy to follow? Were both pros and cons presented?",
		"Did your partner conclude with an appropriate closing remark?"
	]

	const task2Items = [
		"Did your partner speak for 60 seconds?",
		"Did your partner speak directly?",
		"Was your partners advice clear and polite?",
		"Was it easy to follow? Were both pros and cons presented?",
		"Did your partner conclude with an appropriate closing remark?"
	]

	const task3Items = [
		"Your partner set the scene.",
		"Your partner described items in relation to each other using prepositions of location.",
		"For each idea discussed, specific details were included.",
		"Your partner's description gave you a clear mental image of the picture.",
		"The description was concluded with a sentence that summarized a key feature about the picture."
	]

	const task4Items = [
		"Your partner set the scene.",
		"Your partner described items in relation to each other using prepo- sitions of location.",
		"Your partner provided some reasons for what he or she thought would happen based on the evidence in the picture.",
		"A range of vocabulary was used to give as much information as pos- sible about the predictions.",
		"The description was concluded with a sentence that summarized a key feature about the picture."
	]

	const task5Items = [
		"Your partner spoke directly to you as if you were the individual identified in the task.",
		"Your partner provided at least 3 ways that his or her choice was better.",
		"Your partner gave reasons why his or her choice was better (supporting details).",
		"Your partner rephrased information using his or her own words, and did not simply repeat information from the question.",
		"Your partner had a concluding sentence to complete the response.",
		"Your partner avoided repetition.",
	]

	const task6Items = [
		"Your partner spoke directly to you as if you were the individual identified in the task.",
		"Your partner provided details about the situation.",
		"Your partner expressed the difficulty of this decision.",
		"Your partner showed regret.",
		"Your partner offered consolation.",
		"Your partner concluded on a positive note.",
		"Your partner avoided repetition.",
	]

	const task7Items = [
		"Your partner clearly stated his or her opinion.",
		"Your partner provided three or four reasons for that opinion.",
		"Your partner presented developed and convincing.",
		"Your partner used transitions and his or her reasons were easy to follow.",
		"Your partner had a concluding sentence to complete the response.",
	]
	return (
		<div className="w-full">
			<div className="max-w-4xl mx-auto p-6  space-y-8">
				<TableChecklist title={"1 - Giving Advice"} taskNumber={1} items={task1Items} />
				<TableChecklist title={"2 - Talking about a Personal experience"} taskNumber={2} items={task2Items} />
				<TableChecklist title={"3 - Describing a Scene"} taskNumber={3} items={task3Items} />
				<TableChecklist title={"4 - Making predictions"} taskNumber={4} items={task4Items} />
				<TableChecklist title={"5 - Comparing and Persuading"} taskNumber={5} items={task5Items} />
				<TableChecklist title={"6 - Dealing with a Difficult Situation"} taskNumber={6} items={task6Items} />
				<TableChecklist title={"7 - Expressing Opinions"} taskNumber={7} items={task7Items} />
				<AssessmentRubric />
				<p className="text-center text-sm py-8">Based on CELPIP Speaking Workbook - Third Edition</p>
			</div>
		</div>
	)
}