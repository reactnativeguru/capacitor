import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PayslipsScreen from './routes/Payslips';
import PayslipDetailScreen from './routes/PayslipDetail';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				{/* <Route path="/" element={<App />}> */}
				  <Route path="/" element={<PayslipsScreen />} />
				  <Route path="/payslipDetail/:id" element={<PayslipDetailScreen/>} />
					<Route
						path="*"
						element={
							<main style={{ padding: '1rem' }}>
								<p>There's nothing here!</p>
								<Link to="/">Back home!</Link>
							</main>
						}
					/>
				{/* </Route> */}
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);