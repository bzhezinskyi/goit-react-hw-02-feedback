import { Title, Btn } from './Feedback.styled';

export const Feedback = () => {
  return (
    <>
      <Title>Please leave feedback</Title>
      <Btn type="button">Good</Btn>
      <Btn type="button">Neutral</Btn>
      <Btn type="button">Bad</Btn>
    </>
  );
};
