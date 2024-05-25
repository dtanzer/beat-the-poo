export interface VisualStatusProps {
	failedGuesses: number,
}
export function VisualStatus({failedGuesses}: VisualStatusProps) {
	const pathStyle = { fill: "none", stroke: "black", strokeWidth: "0.83px", }

	const paths = [
		<g key="0" transform="matrix(1,0,0,1,3,-5)">
			<path d="M124.196,233.84C150.97,238.906 197.354,243.682 224.248,239.297C233.367,237.811 239.506,226.518 237.643,217.468C235.26,205.885 225.68,199.37 215.152,193.984" style={pathStyle}/>
		</g>,
		<g key="1" transform="matrix(1,0,0,1,3,-5)">
			<path d="M213.829,193.654C191.356,209.212 150.42,224.971 124.196,232.682C100.958,239.515 53.012,240.393 29.437,234.832C17.934,232.119 12.903,221.33 13.561,209.53C14.236,197.412 26.888,191.211 37.871,186.047" style={pathStyle}/>
		</g>,
		<g key="2" transform="matrix(1,0,0,1,3,-5)">
			<path d="M213.003,193.158C218.538,186.823 224.147,177.639 221.437,169.674C217.541,158.226 202.955,153.419 192.496,147.349" style={pathStyle}/>
		</g>,
		<g key="3" transform="matrix(1,0,0,1,3,-5)">
			<path d="M192.165,146.687C173.139,158.005 140.534,168.869 119.401,175.463C98.667,181.931 59.842,189.916 38.532,185.716C28.969,183.831 26.865,174.357 28.279,164.713C29.939,153.389 43.828,137.638 53.251,131.142" style={pathStyle}/>
		</g>,
		<g key="4" transform="matrix(1,0,0,1,3,-5)">
			<path d="M191.835,146.191C196.077,138.33 197.269,126.006 193.488,117.912C188.463,107.154 167.857,102.448 157.106,97.406" style={pathStyle}/>
		</g>,
		<g key="5" transform="matrix(1,0,0,1,3,-5)">
			<path d="M156.61,97.406C142.837,108.242 128.65,119.405 112.289,125.685C96.662,131.683 69.854,136.522 54.243,130.481C44.385,126.665 48.755,110.862 53.416,101.375C58.263,91.509 73.94,84.473 83.349,78.057" style={pathStyle}/>
		</g>,
		<g key="6" transform="matrix(1,0,0,1,3,-5)">
			<path d="M156.941,97.406C162.2,85.161 169.266,68.711 161.736,57.716C149.675,40.103 127.043,31.816 106.997,24.475" style={pathStyle}/>
		</g>,
		<g key="7" transform="matrix(1,0,0,1,3,-5)">
			<path d="M116.258,67.473C110.868,71.172 111.43,73.663 105.178,75.576C100.326,77.062 87.12,81.271 83.845,77.395C77.258,69.601 78.665,63.04 78.894,59.068C79.499,48.585 93.595,44.758 102.036,36.548C104.685,33.972 102.489,32.237 103.194,28.61C103.617,26.432 105.093,25.817 106.336,23.979" style={pathStyle}/>
		</g>,
		<g key="8">
			<g transform="matrix(1,0,0,1,8,-5)">
				<ellipse cx="92.61" cy="140.734" rx="14.553" ry="20.837" style={{fill:"white", stroke:"black", strokeWidth:"0.83px", }}/>
			</g>
			<g transform="matrix(1,0,0,1,10.8114,-1.52713)">
				<circle cx="91.576" cy="139.535" r="5.416" style={{stroke:"black", strokeWidth:"0.83px", }}/>
			</g>
		</g>,
		<g key="9">
			<g transform="matrix(1,0,0,1,48,-5)">
				<ellipse cx="92.61" cy="140.734" rx="14.553" ry="20.837" style={{fill:"white", stroke:"black", strokeWidth:"0.83px", }}/>
			</g>
			<g transform="matrix(1,0,0,1,50.8114,-1.52713)">
				<circle cx="91.576" cy="139.535" r="5.416" style={{stroke:"black", strokeWidth:"0.83px", }}/>
			</g>
		</g>,
		<g key="10" transform="matrix(1,0,0,1,3,-5)">
			<path d="M84.672,179.432C95.889,182.709 107.384,186.068 119.07,186.212C130.108,186.348 151.351,179.949 151.649,180.258C151.962,180.584 137.858,194.47 130.15,197.457C122.49,200.426 115.542,200.769 107.824,197.953C98.469,194.54 91.954,186.224 84.672,179.432Z" style={{fill:"white", stroke:"black", strokeWidth: "0.83px", }} />
		</g>
	]

	
	return <div><svg width="256px" height="256px" viewBox="0 0 256 256" version="1.1" style={{fillRule:"evenodd", clipRule:"evenodd", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:1.5, }}>
		{ failedGuesses < 11? [] : paths }
	</svg></div>
}
