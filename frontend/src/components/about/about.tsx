import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Image } from "~/components/image/image";
import HTMLReactParser from "html-react-parser";

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
        <Image className="w-full" width={width} height={height} src={image} alt={alt || ""} />
      </div>
      <div>{HTMLReactParser(description)}</div>
    </div>
  );
};
