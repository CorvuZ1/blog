import NextImage, { ImageProps } from "next/image";
import { FC } from "react";

export type TImageProps = {
  isLazy?: boolean;
} & Omit<ImageProps, "loading">;

export const Image: FC<TImageProps> = props => {
  const { isLazy = true, ...rest } = props;

  return <NextImage {...rest} loading="eager" {...(isLazy && { "data-lazy-src": "" })} />;
};
