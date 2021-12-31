import styled from '@emotion/styled';
import imgOffice from '../images/photo1.png';
import { CardProfile } from './CardProfile';
import { ContainerText } from './ContainerText';
export const ContainerInterior = () => {
	return (
		<Container>
			<ContainerText />

			<ContainerImage>
				<img src={imgOffice} alt="Image of office" />
				<CardProfile />
			</ContainerImage>
		</Container>
	);
};

const Container = styled.main`
	max-width: 70rem;
	width: 95%;
	margin: 6rem auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

const ContainerImage = styled.div`
	position: relative;
	flex-basis: 60%;
`;
