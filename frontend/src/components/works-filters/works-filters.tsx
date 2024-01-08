import { NextRouter, useRouter } from "next/router";
import { ChangeEvent, Dispatch, FC, SetStateAction, useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IGetAllWorksByFiltersValues } from "~/lib/api/get/works";
import { withAnimation } from "~/lib/hocs/with-animation";
import { Search } from "~/components/search/search";
import { Select } from "~/components/select/select";
import { Button } from "~/components/button/button";
import { debounce } from "lodash";
import { DisplayTypeButton } from "../display-type-button/display-type-button";

export interface IWorksFiltersProps {
  className?: string;
  types: string[];
  setIsGridDisplay: Dispatch<SetStateAction<boolean>>;
  resultsCount: number;
  isGridDisplay: boolean;
}

interface IDebouncedPushValues {
  value: string;
  currentQuery: IGetAllWorksByFiltersValues;
}

const _WorksFilters: FC<IWorksFiltersProps> = props => {
  const { setIsGridDisplay, types, className, resultsCount, isGridDisplay } = props;

  const { query, push }: { query: IGetAllWorksByFiltersValues } & NextRouter = useRouter();
  const [params, setParams] = useState<IGetAllWorksByFiltersValues>({
    date: query.date || "desc",
    search: query.search || "",
    type: query.type || ""
  });

  useEffect(() => {
    push({
      query: {
        ...query,
        date: params.date,
        type: params.type
      }
    });
  }, [params.date, params.type]);

  const debouncedPush = useCallback(
    debounce(({ value, currentQuery }: IDebouncedPushValues) => {
      push({
        query: {
          ...currentQuery,
          search: value
        }
      });
    }, 600),
    []
  );

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setParams(prev => ({ ...prev, search: value }));
    debouncedPush({ value, currentQuery: query });
  };

  return (
    <div className={twMerge("", className)}>
      <form method="GET" className="grid grid-cols-10 gap-[16px]">
        <Search
          className="col-span-8"
          placeholder="Поиск"
          autoComplete="off"
          name="search"
          value={params.search}
          onChange={onSearchChange}
        />
        <DisplayTypeButton
          isActive={!isGridDisplay}
          type="row"
          onClick={() => setIsGridDisplay(false)}
        />
        <DisplayTypeButton
          isActive={isGridDisplay}
          type="grid"
          onClick={() => setIsGridDisplay(true)}
        />
        <Select
          className="col-span-4"
          value={params.date}
          name="date"
          onChange={e => {
            setParams(prev => ({ ...prev, date: e.target.value }));
          }}
        >
          <option value="asc">От старого</option>
          <option value="desc">От нового</option>
        </Select>
        <Select
          className="col-span-4"
          value={params.type}
          name="type"
          onChange={e => {
            setParams(prev => ({ ...prev, type: e.target.value }));
          }}
        >
          <option value="">Все</option>
          {types?.map((type, index) => {
            return (
              <option key={index} value={type}>
                {type}
              </option>
            );
          })}
        </Select>
        <Button
          className="col-span-2 rounded-[5px]"
          onClick={() => {
            setParams({
              date: "desc",
              search: "",
              type: ""
            });
          }}
          href="/blog"
        >
          Очистить
        </Button>
      </form>
      {resultsCount}
    </div>
  );
};

export const WorksFilters = withAnimation(_WorksFilters);
