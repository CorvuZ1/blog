import NextImage, { ImageProps } from "next/image";
import { FC } from "react";

export interface IImageProps extends Omit<ImageProps, "loading"> {
  isLazy?: boolean;
}

export const Image: FC<IImageProps> = props => {
  const { isLazy = true, ...rest } = props;

  return <NextImage {...rest} loading="eager" {...(isLazy && { "data-lazy-src": "" })} />;
};
