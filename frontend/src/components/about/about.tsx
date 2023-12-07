import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Image } from "~/components/image/image";

export interface IAboutProps {
  image: string;
  description: string;
  className?: string;
  height: number;
  width: number;
  alt?: string;
}

export const About: FC<IAboutProps> = props => {
  const { description, image, className, alt, height, width } = props;

  return (
    <div className={twMerge("flex", className)}>
      <div>
        <Image width={width} height={height} src={image} alt={alt || ""} />
      </div>
      <p>{description}</p>
    </div>
  );
};
