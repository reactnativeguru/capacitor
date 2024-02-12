import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div style={{ margin: '0 1rem 0 1rem', paddingTop: 'env(safe-area-inset-top)' }}>
			{/* <h1>Deel Task App</h1> */}
			<Outlet />
		</div>
	);
}

export default App;