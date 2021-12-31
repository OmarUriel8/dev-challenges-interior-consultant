import styled from '@emotion/styled';
import imgAuthor from '../images/photo2.png';
export const CardProfile = () => {
	const date = new Date().getFullYear();

	return (
		<Card>
			<Profile>
				<Image src={imgAuthor} alt="Photo of Aliza Webber" />
				<div>
					<Heading3>Aliza Webber</Heading3>
					<Position>Interior Designer</Position>
				</div>
			</Profile>
			<Heading2>Designed in {date} by Aliza Webber</Heading2>
		</Card>
	);
};

const Card = styled.section`
	position: absolute;
	right: 1.5rem;
	bottom: -7rem;
	padding: 1rem 2rem;
	max-width: 70%;
	background: #181719;
	@media (min-width: 768px) {
		bottom: -10rem;
		max-width: 60%;
	}
`;

const Profile = styled.div`
	display: flex;
	align-items: center;
`;

const Image = styled.img`
	width: 3.875rem;
	border-radius: 50%;
	padding: 0.5rem;

	@media (min-width: 768px) {
		width: 5.313rem;
	}
`;

const Heading3 = styled.h3`
	font-size: 0.75rem;
	font-weight: 500;
	margin-bottom: 0;
	@media (min-width: 768px) {
		font-size: 0.875rem;
	}
`;

const Position = styled.p`
	color: #828282;
	font-size: 0.625rem;

	@media (min-width: 768px) {
		font-size: 0.75rem;
	}
`;

const Heading2 = styled.h2`
	font-family: 'Lora', serif;
	font-weight: 700;
	font-size: 1.125rem;
	width: 70%;
	@media (min-width: 768px) {
		font-size: 1.5rem;
	}
`;
