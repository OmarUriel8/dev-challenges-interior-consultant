import { useEffect } from 'react';
import { ContainerInterior } from './components/ContainerInterior';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const App = () => {
	return (
		<>
			<Header />
			<ContainerInterior />
			<Footer />
		</>
	);
};
