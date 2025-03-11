"use client"

import { useState, useEffect } from 'react';
import { Play, RotateCcw, Eye, EyeClosed } from 'lucide-react';

const durationOptions = [{
	label: "30 sec",
	value: 30
}, {
	label: "1 min",
	value: 60
}, {
	label: "1.5 min",
	value: 90
}];


export default function Home() {

	const [duration, setDuration] = useState<30 | 60 | 90>(60);
	const [timeLeft, setTimeLeft] = useState<number>(duration);
	const [isRunning, setIsRunning] = useState(false);
	const [hideOptions, setHideOptions] = useState(false);
	const progress = ((duration - timeLeft) / duration) * 100;

	useEffect(() => {
		let timer: number;

		if (isRunning && timeLeft > 0) {
			timer = window.setInterval(() => {
				setTimeLeft((prev) => prev - 1);
			}, 1000);
		} else if (timeLeft === 0) {
			setIsRunning(false);
		}

		return () => clearInterval(timer);
	}, [isRunning, timeLeft]);

	const handlePlay = () => {
		setIsRunning(true);
	};

	const handleReset = () => {
		setIsRunning(false);
		setTimeLeft(duration);
	};

	const toggleHideOptions = () => {
		setHideOptions(!hideOptions);
	};

	const formatTime = (seconds: number) => {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${mins}:${secs.toString().padStart(2, '0')}`;
	};

	return (
		<div className="min-h-screen bg-linear-to-br from-indigo-100 to-blue-100 flex items-center justify-center p-4">
			<div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg transition-all">
				{!hideOptions &&
					<h1 className="text-lg md:text-3xl font-bold text-gray-800 mb-6 text-center">
						CELPIP Speaking Countdown
					</h1>
				}

				<div className="space-y-6">
					{/* Duration Selection */}
					{!hideOptions && (
						<div className="grid grid-cols-3 gap-6">
							{durationOptions.map(({ value, label }, index) => (
								<label className="flex items-center cursor-pointer" key={index}>
									<input
										type="radio"
										className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-indigo-500"
										checked={duration === value}
										onChange={() => {
											setDuration(value);
											setTimeLeft(value);
										}}
										disabled={isRunning}
									/>
									<span className="ml-2 text-gray-700">{label}</span>
								</label>
							))
							}
						</div>
					)}


					{/* Timer Display */}
					{!hideOptions && (<div className="text-5xl font-bold text-center text-gray-800">
						{formatTime(timeLeft)}
					</div>)}

					{/* Progress Bar */}
					<div className="h-5 bg-gray-200 overflow-hidden flex items-center">
						<div className='text-xs ml-1 opacity-30 absolute'>{formatTime(duration)}</div>
						<div
							className="h-full bg-linear-to-r from-indigo-500 to-purple-500 transition-all duration-300 ease-linear"
							style={{ width: `${progress}%`, background: "#04c9fa" }}
						/>
					</div>

					{/* Controls */}
					<div className="grid grid-cols-3 gap-4 align-middle">


						<button
							type='button'
							onClick={toggleHideOptions}
							className="flex justify-center items-center gap-2 px-6 py-3 text-slate-500 rounded-lg hover:bg-slate-100 transition-colors"
						>
							{hideOptions ? <Eye size={20} /> : <EyeClosed size={20} />}
							<span className='hidden md:block'>
								{hideOptions ? 'Show' : 'Hide'}
							</span>
						</button>
						<button
							type='button'
							onClick={handleReset}
							className="flex justify-center items-center gap-2 px-6 py-3  text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
						>
							<RotateCcw size={20} />
							<span className='hidden md:block'>Reset</span>
						</button>
						<button
							type='button'
							onClick={handlePlay}
							disabled={isRunning || timeLeft === 0}
							className="flex justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
						>
							<Play size={20} />
							<span className='hidden md:block'>Play</span>
						</button>
					</div>
				</div>
			</div>
			<div className="absolute bottom-0  mb-4 text-blue-600">
				<a href="https://candidosales.me/" target="_blank" rel="noreferrer">Made with ❤️</a>
			</div>
		</div>
	);
}
