import styled from '@emotion/styled';
import React from 'react';

export const NavigationMobile = ({ open, setOpen }) => {
	const handleClick = () => {
		setOpen(false);
	};

	return (
		<Navigation id="navigation" className={`${open ? 'active' : ''}`}>
			<ContainerNavItems>
				<li>
					<NavItems href="#" className="active" onClick={handleClick}>
						Home
					</NavItems>
				</li>
				<li>
					<NavItems href="#" onClick={handleClick}>
						Collection
					</NavItems>
				</li>
				<li>
					<NavItems href="#" onClick={handleClick}>
						About
					</NavItems>
				</li>
				<li>
					<NavItems href="#" onClick={handleClick}>
						Contact
					</NavItems>
				</li>
			</ContainerNavItems>
		</Navigation>
	);
};

const Navigation = styled.nav`
	position: absolute;
	z-index: 500;

	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	height: 100vh;
	background-color: #181719;
	transform: translate(-100%, 0);
	transition: transform 0.3s ease-in-out;
	display: flex;
	justify-content: center;
	align-items: center;

	&.active {
		transform: translate(0, 0);
	}
`;

const ContainerNavItems = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	min-height: 50vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	row-gap: 2rem;
`;
const NavItems = styled.a`
	color: #fff;
	text-decoration: none;
	font-weight: 500;
	font-size: 1.125rem;
	padding-top: 1rem;

	&.active {
		font-weight: 700;
		border-bottom: 2px solid #fff;
	}
`;
