import styled from '@emotion/styled';
import React from 'react';

export const NavigationDestop = () => {
	return (
		<Navigation>
			<NavItems href="#" className="active">
				Home
			</NavItems>
			<NavItems href="#">Collection</NavItems>
			<NavItems href="#">About</NavItems>
			<NavItems href="#">Contact</NavItems>
		</Navigation>
	);
};

const Navigation = styled.nav`
	display: none;

	@media (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		column-gap: 4rem;
	}
`;

const NavItems = styled.a`
	color: #fff;
	text-decoration: none;
	font-weight: 500;
	font-size: 1.125rem;

	&.active {
		font-weight: 700;
		border-bottom: 2px solid #fff;
	}
`;
