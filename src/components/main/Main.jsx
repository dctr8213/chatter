import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";
const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);
	return (
		<div className="main">
			<div className="nav">
				<p>Chatter</p>
			</div>
			<div className="main-container">
				{!showResults ? (
					<>
						<div className="greet">
							<p>
								<span>Hello , Dev </span>
							</p>
							<p>How Can i Help You Today?</p>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							onChange={(e) => {
								setInput(e.target.value);
							}}
							value={input}
							type="text"
							placeholder="Enter the Prompt Here"
						/>
						<div>
							<img
								src={assets.send_icon}
								alt=""
								onClick={() => {
									onSent();
								}}
							/>
						</div>
					</div>
					<div className="bottom-info">
						<p>
							Say Hai to he AI 
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
