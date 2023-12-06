import { FC } from "react";

export interface IAboutProps {
  image: string;
  description: string;
}

export const About: FC<IAboutProps> = props => {
  const { description, image } = props;

  return <div></div>;
};
