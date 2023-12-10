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
    <div className={twMerge("xs:flex-col flex", className)}>
      <div className="xs:mr-[0px] xs:mb-[20px] xs:before:pt-[80%] relative mr-[20px] h-fit flex-1 overflow-hidden before:relative before:block before:pt-[119.17%] md:mr-[10px]">
        <Image
          className="absolute left-0 top-0 h-full w-full rounded-[42px] object-cover md:rounded-[25px]"
          width={width}
          height={height}
          src={image}
          alt={alt || ""}
        />
      </div>
      <div className="flex-1">{HTMLReactParser(description)}</div>
    </div>
  );
};
