import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className='titleBar'>
				<h1 className='title'>Kelly Weddle | Web Developer</h1>
			</div>
			<div className='titleDivider'></div>
			<nav className='nav'>
				<ul className='navList'>
					<li className='navLink'>
						<a className='navLink' href='#about'>
							About
						</a>
					</li>
					<li className='navLink'>
						<a className='navLink' href='#projects'>
							Projects
						</a>
					</li>
					<li className='navLink'>
						<a className='navLink' href='#contact'>
							Contact
						</a>
					</li>
					<li className='navLink'>
						<a className='navLink' href='#resume'>
							Resume
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default App;
