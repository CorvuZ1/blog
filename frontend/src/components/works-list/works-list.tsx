import { FC } from "react";
import { IWorkCardProps, WorkCard } from "~/components/word-card/word-card";

export interface IWorksListProps {
  className?: string;
  items: IWorkCardProps[];
  isGridDisplay?: boolean;
}

export const WorksList: FC<IWorksListProps> = props => {
  const { items, className, isGridDisplay } = props;

  return (
    <div className="">
      {items.map((item, index) => (
        <div className="" key={item.id || index}>
          <WorkCard
            animationSide={index % 2 === 0 ? "left" : "right"}
            isSimpleVariant={isGridDisplay}
            date={item.date}
            description={item.description}
            href={item.href}
            image={item.image}
            label={item.label}
            alt={item.alt}
          />
        </div>
      ))}
    </div>
  );
};
