import styled from '@emotion/styled';

export const ContainerText = () => {
	return (
		<div>
			<Heading1>Modern interior</Heading1>

			<TextInfo>
				<p>
					A full-Service residential & commercial interior design and staging company
					offering professional organizing & eco-services.
				</p>

				<Button>
					Read more <span className="material-icons-outlined">arrow_right_alt</span>
				</Button>
			</TextInfo>
		</div>
	);
};

const Heading1 = styled.h1`
	font-size: 2.25rem;
	font-weight: 500;
	font-family: 'Lora', serif;
	@media (min-width: 768px) {
		font-size: 3rem;
	}
`;

const TextInfo = styled.div`
	max-width: 25rem;
	margin-bottom: 2rem;
	font-size: 0.875rem;
	font-weight: 400;
	padding-right: 2.5rem;
	@media (min-width: 768px) {
		font-size: 1.5rem;
	}
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 1rem;
	font-size: 0.875rem;
	font-weight: 700;
	background-color: transparent;
	color: #fff;
	border: 1px solid transparent;
	transition: border-color 0.3s ease-out;
	@media (min-width: 768px) {
		font-size: 1.5rem;
	}
	&:hover {
		cursor: pointer;
		border-color: #fff;
	}
`;
