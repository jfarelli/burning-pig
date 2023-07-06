import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Header from './components/Header/Header';
import * as React from 'react';
import BP_Memories from './components/BP_Memories/BP_Memories';

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/bp-memories" element={<><Header /><BP_Memories /></>} />
		</Routes>
	);
};

export default App;

// const [screenWidth, setScreenWidth] = React.useState<number>(
//     window.innerWidth
// );
// const [screenHeight, setScreenHeight] = React.useState<number>(
//     window.innerHeight
// );

// React.useEffect(() => {
//     const handleResize = () => {
//         setScreenWidth(window.innerWidth);
//         setScreenHeight(window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//         window.removeEventListener('resize', handleResize);
//     };
// }, []);

{
	/* <div>
	<p>Screen Width: {screenWidth}px</p>
	<p>Screen Height: {screenHeight}px</p>
</div>; */
}
