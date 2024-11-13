import { useState, useEffect } from 'react';
import { Play, RotateCcw, Eye, EyeClosed } from 'lucide-react';

function App() {
	const [duration, setDuration] = useState<60 | 90>(60);
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
		<div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center p-4">
			<div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg">
				{!hideOptions &&
					<h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
						CELPIP Speaking Countdown
					</h1>
				}

				<div className="space-y-6">
					{/* Duration Selection */}
					{!hideOptions && (
						<div className="flex justify-center gap-6">
							<label className="flex items-center cursor-pointer">
								<input
									type="radio"
									className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-indigo-500"
									checked={duration === 60}
									onChange={() => {
										setDuration(60);
										setTimeLeft(60);
									}}
									disabled={isRunning}
								/>
								<span className="ml-2 text-gray-700">1 minute</span>
							</label>
							<label className="flex items-center cursor-pointer">
								<input
									type="radio"
									className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-indigo-500"
									checked={duration === 90}
									onChange={() => {
										setDuration(90);
										setTimeLeft(90);
									}}
									disabled={isRunning}
								/>
								<span className="ml-2 text-gray-700">1.5 minutes</span>
							</label>
						</div>
					)}


					{/* Timer Display */}
					{!hideOptions && (<div className="text-5xl font-bold text-center text-gray-800">
						{formatTime(timeLeft)}
					</div>)}

					{/* Progress Bar */}
					<div className="h-4 bg-gray-200 rounded-none overflow-hidden">
						<div
							className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ease-linear"
							style={{ width: `${progress}%`, background: "#04c9fa" }}
						/>
					</div>

					{/* Controls */}
					<div className="flex justify-center gap-4">


						<button
							onClick={toggleHideOptions}
							className="flex items-center gap-2 px-6 py-3 text-slate-500 rounded-lg hover:bg-slate-100 transition-colors"
						>
							{hideOptions ? <Eye size={20} /> : <EyeClosed size={20} />}
							<span>
								{hideOptions ? 'Show' : 'Hide'} options
							</span>
						</button>
						<button
							onClick={handleReset}
							className="flex items-center gap-2 px-6 py-3  text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
						>
							<RotateCcw size={20} />
							<span>Reset</span>
						</button>
						<button
							onClick={handlePlay}
							disabled={isRunning || timeLeft === 0}
							className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
						>
							<Play size={20} />
							<span>Play</span>
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

export default App;