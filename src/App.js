import "./App.scss";
import Navbar from "./component/navbar/Navbar";
import ProductCard from "./component/cardComponent/cardwithprice/ProductCard";
import Card from "./component/cardComponent/cardinfo/CardInfo";
import CardImg from "./asset/com.png";
import Trophy from "./asset/cardinfosvg/Trophy";

const servicesBtn = [
	{
		name: "Tool",
		href: "/",
	},
	{
		name: "AWS Builder",
		href: "/",
	},
	{
		name: "Start Build",
		href: "/",
	},
	{
		name: "Build Supplies",
		href: "/",
	},
	{
		name: "Tooling",
		href: "/",
	},
	{
		name: "BlueHosting",
		href: "/",
	},
];

const pageHistory = [
	{ name: "Home", svg: `>` },
	{ name: "Hosting for all", svg: `>` },
	{ name: "Hosting", svg: `>` },
	{ name: "Hosting6", svg: `>` },
	{ name: "Hosting5", svg: "" },
];

const CardInfoDetail = [
	{
		imgSrc: CardImg,
		imgName: "Builder1",
		heading: "WixPro 72-Inch Responsive Website Builder-",
		headingPara:
			" Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
		mainHighlights: "Main highlights",
		mainHighlightsPara:
			"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
		buttonText: "View",
		badge: Trophy,
		badgeTitle: "Best Choice",
		count: "1",
		visiblity: "hidden",
		showmore: "Show more",
		rating: "9.8",
		ratingComment: "Exceptional",
	},
	{
		imgSrc: CardImg,
		imgName: "Builder",
		heading: "SiteCraft 68-Inch Ultimate Web Design Studio-",
		headingPara:
			" Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
		mainHighlights: "Main highlights",
		mainHighlightsPara:
			"[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
		buttonText: "View",
		badge: Trophy,
		badgeTitle: "Best Value",
		count: "2",
		showmore: "Show more",
		rating: "9.5",
		ratingComment: "Excellent",
	},
	{
		imgSrc: CardImg,
		imgName: "Builder1",
		heading: "WixPro 72-Inch Responsive Website Builder-",
		headingPara:
			" Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
		mainHighlights: "Main highlights",
		mainHighlightsPara:
			"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
		buttonText: "View",
		badge: Trophy,
		badgeTitle: "",
		visiblity: "hidden",
		count: "3",
		showmore: "Show more",
		rating: "9.3",
		ratingComment: "Exceptional",
	},
];

function App() {
	return (
		<div className="App">
			<Navbar />

			<main className="mainContainer">
				<div className="headerContainer">
					<div className="container">
						<span className="heading">Best Website builders in the US</span>

						<div className="divider"></div>

						<div className="info">
							<div className="infoSection">
								<div className="infoContainer">
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M3.66534 3.99892C5.28581 2.46375 7.52625 1.51318 9.99984 1.51318C12.4734 1.51318 14.7138 2.46375 16.3343 3.99892C17.9547 5.53411 18.9582 7.65663 18.9582 10C18.9582 12.3434 17.9547 14.4659 16.3343 16.0011C14.7138 17.5362 12.4734 18.4869 9.99984 18.4869C7.52625 18.4869 5.28581 17.5362 3.66534 16.0011C2.04488 14.4659 1.0415 12.3434 1.0415 10C1.0415 7.65663 2.04488 5.53411 3.66534 3.99892ZM9.99984 2.69739C7.87109 2.69739 5.94486 3.51412 4.54921 4.83629C3.15359 6.15848 2.2915 7.98332 2.2915 10C2.2915 12.0168 3.1536 13.8416 4.54923 15.1637C5.94486 16.4859 7.87109 17.3027 9.99984 17.3027C12.1286 17.3027 14.0548 16.4859 15.4504 15.1637C16.8461 13.8416 17.7082 12.0168 17.7082 10C17.7082 7.98332 16.8461 6.15847 15.4504 4.83629C14.0548 3.51412 12.1286 2.69739 9.99984 2.69739Z"
											fill="#626E79"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M14.6084 7.21285C14.8525 7.44408 14.8525 7.81899 14.6084 8.05022L9.60845 12.787C9.36437 13.0183 8.96864 13.0183 8.72456 12.787L6.22456 10.4186C5.98048 10.1874 5.98048 9.81251 6.22456 9.58127C6.46864 9.35004 6.86437 9.35004 7.10845 9.58127L9.16651 11.531L13.7246 7.21285C13.9686 6.98162 14.3644 6.98162 14.6084 7.21285Z"
											fill="#626E79"
										/>
									</svg>

									<p>Last Updated</p>
									<p>-</p>
									<p>February 22, 2020</p>
								</div>
								<div className="infoContainer">
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M3.91878 3.66546C5.47444 2.04501 7.62526 1.04163 9.9999 1.04163C12.3745 1.04163 14.5253 2.04501 16.081 3.66546C17.6366 5.28593 18.5999 7.52638 18.5999 9.99996C18.5999 12.4735 17.6366 14.714 16.081 16.3345C14.5253 17.9549 12.3745 18.9583 9.9999 18.9583C7.62526 18.9583 5.47444 17.9549 3.91878 16.3345C2.36315 14.714 1.3999 12.4735 1.3999 9.99996C1.3999 7.52638 2.36315 5.28593 3.91878 3.66546ZM9.9999 2.29163C7.9563 2.29163 6.10713 3.15373 4.76731 4.54934C3.42751 5.94499 2.5999 7.87121 2.5999 9.99996C2.5999 12.1287 3.42752 14.055 4.76731 15.4505C6.10713 16.8462 7.9563 17.7083 9.9999 17.7083C12.0435 17.7083 13.8927 16.8462 15.2325 15.4505C16.5723 14.055 17.3999 12.1287 17.3999 9.99996C17.3999 7.87121 16.5723 5.94498 15.2325 4.54934C13.8927 3.15373 12.0435 2.29163 9.9999 2.29163Z"
											fill="#626E79"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M10 4.58337C10.5523 4.58337 11 5.04975 11 5.62504C11 6.20033 10.5523 6.66671 10 6.66671C9.44776 6.66671 9 6.20033 9 5.62504C9 5.04975 9.44776 4.58337 10 4.58337Z"
											fill="#626E79"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M8.7998 8.33325C8.7998 7.98807 9.06844 7.70825 9.3998 7.70825H10.1998C10.5312 7.70825 10.7998 7.98807 10.7998 8.33325V14.1666C10.7998 14.5118 10.5312 14.7916 10.1998 14.7916C9.86844 14.7916 9.5998 14.5118 9.5998 14.1666V8.95827H9.3998C9.06844 8.95827 8.7998 8.67844 8.7998 8.33325Z"
											fill="#626E79"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M8.2002 14.1666C8.2002 13.8215 8.46884 13.5416 8.8002 13.5416H11.6002C11.9316 13.5416 12.2002 13.8215 12.2002 14.1666C12.2002 14.5118 11.9316 14.7916 11.6002 14.7916H8.8002C8.46884 14.7916 8.2002 14.5118 8.2002 14.1666Z"
											fill="#626E79"
										/>
									</svg>

									<p>February 22, 2020</p>
								</div>
							</div>
							<div className="topContainer">
								<p>Top Relevant</p>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M5.96967 8.61091C6.26256 8.32973 6.73744 8.32973 7.03033 8.61091L12.5 13.8617L17.9697 8.61091C18.2626 8.32973 18.7374 8.32973 19.0303 8.61091C19.3232 8.89208 19.3232 9.34796 19.0303 9.62911L13.0303 15.3891C12.7374 15.6703 12.2626 15.6703 11.9697 15.3891L5.96967 9.62911C5.67678 9.34796 5.67678 8.89208 5.96967 8.61091Z"
										fill="#626E79"
									/>
								</svg>
							</div>
						</div>

						<div className="divider"></div>
					</div>
				</div>

				<section>
					<div className="serviceSection">
						{servicesBtn.map((props) => {
							return (
								<a className="servicesBtn" href={props.href}>
									<span>{props.name}</span>
								</a>
							);
						})}
					</div>
				</section>

				<section>
					<div className="pageSection">
						{pageHistory.map((props) => {
							return (
								<a className="previousPage" href={props.href}>
									<span>{props.name}</span>

									<span>{props.svg}</span>
								</a>
							);
						})}
					</div>
				</section>

				<section className="cardinfo ">
					{CardInfoDetail.map((props) => (
						<Card
							imgSrc={props.imgSrc}
							heading={props.heading}
							buttonText={props.buttonText}
							visibility={props.visiblity}
							badge={props.badge}
							badgeTitle={props.badgeTitle}
							count={props.count}
							imgName={props.imgName}
							headingPara={props.headingPara}
							mainHighlightsPara={props.mainHighlightsPara}
							mainHighlights={props.mainHighlights}
							showsvg={props.showsvg}
							showmore={props.showmore}
							rating={props.rating}
							ratingComment={props.ratingComment}
						/>
					))}
					<div className="card" style={{ height: "436px" }}>
						<div className="count">4</div>
						<div className="cardMain">
							<div className="imgSection">
								<div
									className="imgContainer"
									style={{
										marginTop: "100px",
									}}
								>
									<img src={CardImg} alt="imgtitle" />
									<p>CDK</p>
								</div>
							</div>

							<div className="mainSection">
								<div className="details">
									<p className="heading">
										<span className="strong">CDK Resposive Builder:</span>
										An extensive library of widgets and apps, and detailed
										step-by-step guides
									</p>
									<p className="off">25% off</p>
									<p className="mainHighlights">
										<p className="mainHeading">
											Main highlights
											<p className="highlight2">
												<div className="hflex">
													<span className="timeStamp">9.9</span>
													<span className="h-text">building responsive</span>
												</div>
												<div className="hflex">
													<span className="timeStamp">8.9</span>
													<span className="h-text">Cool</span>
												</div>
												<div className="hflex">
													<span className="timeStamp">9.9</span>
													<span className="h-text">Docs</span>
												</div>
											</p>
										</p>
									</p>
									<div
										className="cardcheck"
										style={{
											display: "flex",
											flexDirection: "column",
											gap: "10px",
											marginTop: "10px",
											marginBottom: "10px",
										}}
									>
										<span>Why we love it</span>
										<span
											style={{
												display: "flex",
												alignItems: "center",
												gap: "8px",
											}}
										>
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M12 1.25C9.03169 1.25 6.34318 2.45406 4.3986 4.3986C3.40884 5.38837 2.61093 6.57088 2.06597 7.88493C1.38329 9.27784 1 10.8442 1 12.5C1 18.2989 5.70101 23 11.5 23C13.1558 23 14.7222 22.6166 16.1151 21.934C17.4291 21.389 18.6116 20.5912 19.6014 19.6014C21.546 17.6568 22.7501 14.9683 22.7501 12C22.7501 9.03169 21.546 6.34317 19.6014 4.3986C17.6568 2.45406 14.9683 1.25 12 1.25Z"
													fill="#EBF5FF"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M17.5303 8.46967C17.8233 8.76257 17.8233 9.23743 17.5303 9.53033L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.17678 12.2375 7.17678 11.7626 7.46967 11.4697C7.76256 11.1768 8.23743 11.1768 8.53033 11.4697L11 13.9393L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967Z"
													fill="#0855A1"
												/>
											</svg>
											<span>Documentation</span>
										</span>
										<span
											style={{
												display: "flex",
												alignItems: "center",
												gap: "8px",
											}}
										>
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M12 1.25C9.03169 1.25 6.34318 2.45406 4.3986 4.3986C3.40884 5.38837 2.61093 6.57088 2.06597 7.88493C1.38329 9.27784 1 10.8442 1 12.5C1 18.2989 5.70101 23 11.5 23C13.1558 23 14.7222 22.6166 16.1151 21.934C17.4291 21.389 18.6116 20.5912 19.6014 19.6014C21.546 17.6568 22.7501 14.9683 22.7501 12C22.7501 9.03169 21.546 6.34317 19.6014 4.3986C17.6568 2.45406 14.9683 1.25 12 1.25Z"
													fill="#EBF5FF"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M17.5303 8.46967C17.8233 8.76257 17.8233 9.23743 17.5303 9.53033L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.17678 12.2375 7.17678 11.7626 7.46967 11.4697C7.76256 11.1768 8.23743 11.1768 8.53033 11.4697L11 13.9393L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967Z"
													fill="#0855A1"
												/>
											</svg>
											<span>Easy USe</span>
										</span>
										<span
											style={{
												display: "flex",
												alignItems: "center",
												gap: "8px",
											}}
										>
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M12 1.25C9.03169 1.25 6.34318 2.45406 4.3986 4.3986C3.40884 5.38837 2.61093 6.57088 2.06597 7.88493C1.38329 9.27784 1 10.8442 1 12.5C1 18.2989 5.70101 23 11.5 23C13.1558 23 14.7222 22.6166 16.1151 21.934C17.4291 21.389 18.6116 20.5912 19.6014 19.6014C21.546 17.6568 22.7501 14.9683 22.7501 12C22.7501 9.03169 21.546 6.34317 19.6014 4.3986C17.6568 2.45406 14.9683 1.25 12 1.25Z"
													fill="#EBF5FF"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M17.5303 8.46967C17.8233 8.76257 17.8233 9.23743 17.5303 9.53033L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.17678 12.2375 7.17678 11.7626 7.46967 11.4697C7.76256 11.1768 8.23743 11.1768 8.53033 11.4697L11 13.9393L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967Z"
													fill="#0855A1"
												/>
											</svg>
											<span>Out Of Box</span>
										</span>
									</div>
									<span className="showMore">
										<span>Show more </span>
										<span>
											<svg
												className="svg"
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M3.98043 5.64645C4.17569 5.45118 4.49228 5.45118 4.68754 5.64645L8.33398 9.29289L11.9804 5.64645C12.1757 5.45118 12.4923 5.45118 12.6875 5.64645C12.8828 5.84171 12.8828 6.15829 12.6875 6.35355L8.68754 10.3536C8.49228 10.5488 8.17569 10.5488 7.98043 10.3536L3.98043 6.35355C3.78517 6.15829 3.78517 5.84171 3.98043 5.64645Z"
													fill="#1B88F4"
												/>
											</svg>
										</span>{" "}
									</span>
								</div>
							</div>

							<div className="rateBtn">
								<div className="rateSection">
									<p className="rating">9.1</p>
									<p className="ratingComment">Very Good</p>
									<p className="star">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
								</div>

								<button
									className="btn"
									style={{
										top: "340px",
									}}
								>
									View
								</button>
							</div>
						</div>
					</div>
				</section>

				<section className="productsection">
					<h1>Related deals you might like for</h1>

					<div className="cards">
						<ProductCard />
						<ProductCard />
						<ProductCard />
					</div>
				</section>

				<section className="newsletter">
					<div className="newsContainer">
						<span>Sign up and get exclusive special deals</span>
						<div className="newsMail">
							<input type="text" />
							<button>Sign Up</button>
						</div>
					</div>
				</section>
			</main>

			<footer>
				<div className="footerConatiner">
					
					<div className="footerLinkSection">
						<span className="footerHeading">CATEGORIES</span>
						<div className="footerLinkSection2">
						<a href="#link" className="footerLinks">Web Builder</a>
						<a href="#link" className="footerLinks">Hosting</a>
						<a href="#link" className="footerLinks">Data Center</a>
						<a href="#link" className="footerLinks">Robotic-Automation</a></div>
					</div>
					<div className="footerLinkSection">
						<span className="footerHeading">CONTACT</span>
						<div className="footerLinkSection2">
						<a href="#link" className="footerLinks">Web Builder</a>
						<a href="#link" className="footerLinks">Hosting</a>
						<a href="#link" className="footerLinks">Data Center</a>
						<a href="#link" className="footerLinks">Robotic-Automation</a></div>
					</div>
				</div>
				<div className="footerCountry">
				<span>United States</span>
				<span><svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_601_377)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.96967 0.98383C1.26256 0.690937 1.73744 0.690937 2.03033 0.98383L7.5 6.4535L12.9697 0.98383C13.2626 0.690937 13.7374 0.690937 14.0303 0.98383C14.3232 1.27672 14.3232 1.7516 14.0303 2.04449L8.03033 8.04449C7.73744 8.33738 7.26256 8.33738 6.96967 8.04449L0.96967 2.04449C0.676777 1.7516 0.676777 1.27672 0.96967 0.98383Z" fill="#E1E4E6"/>
</g>
<defs>
<clipPath id="clip0_601_377">
<rect width="15" height="9" fill="white"/>
</clipPath>
</defs>
</svg>
</span>
				</div>
			</footer>
		</div>
	);
}

export default App;
