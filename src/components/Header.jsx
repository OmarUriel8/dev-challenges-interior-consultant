import styled from '@emotion/styled';
import 'hamburgers/dist/hamburgers.css';
import { useState } from 'react';
import { NavigationDestop } from './NavigationDestop';
import { NavigationMobile } from './NavigationMobile';

export const Header = () => {
	const [open, setOpen] = useState(false);

	const handleOpenMenu = () => {
		setOpen(!open);
		document.querySelector('#body').classList.toggle('overflow-hidden');
	};
	return (
		<ContainerHeader>
			<Logo>This Interior</Logo>

			<NavigationDestop />

			{/*More Buttons  https://jonsuh.com/hamburgers/ */}
			<ButttonHamburger
				className={`hamburger hamburger--elastic ${open ? 'is-active' : ''}`}
				tabindex="0"
				aria-label="Menu"
				role="button"
				aria-controls="navigation"
				onClick={handleOpenMenu}
			>
				<div className="hamburger-box">
					<div className="hamburger-inner"></div>
				</div>
			</ButttonHamburger>

			<NavigationMobile open={open} setOpen={setOpen} />
		</ContainerHeader>
	);
};

const ContainerHeader = styled.div`
	position: sticky;
	background-color: #181719;
	top: 0;
	left: 0;
	z-index: 90;
	max-width: 70rem;
	width: 95%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
`;

const Logo = styled.h2`
	font-family: 'Crimson Pro', serif;
	font-size: 0.875rem;
	text-transform: uppercase;
	padding: 0.5rem;
	border: 1px solid #fff;
	transition: border-color 0.3s ease-out;
	&:hover {
		cursor: pointer;
		border-color: transparent;
	}
`;

const ButttonHamburger = styled.div`
	cursor: pointer;
	z-index: 1000;
	.hamburger-inner,
	.hamburger-inner::after,
	.hamburger-inner::before {
		background-color: #fff !important;
	}

	@media (min-width: 768px) {
		display: none;
	}
`;
