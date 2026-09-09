import React from "react";
import { CheckIcon, MinusIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type TRowProps = {
  row: { label: string; propsoch: React.ReactNode; other: React.ReactNode };
  isLast: boolean;
};

const TRow = ({ row, isLast }: TRowProps) => {
  return (
    <tr className="border-lightborder group border-t transition-colors">
      <th
        scope="row"
        className="sticky left-0 z-10 bg-white px-4 py-4 text-left text-sm font-medium text-coolgrey-100 xl:px-6 xl:py-5 xl:text-[18px]"
      >
        {row.label}
      </th>
      <td className={cn("bg-primarylight px-4 py-4 xl:px-6 xl:py-5", isLast && "rounded-br-2xl")}>
        <span className="flex items-start gap-2 text-sm leading-snug text-coolgrey-100 xl:text-[18px]">
          <CheckIcon className="text-primary-ink mt-0.5 shrink-0" />
          <span className="sr-only">Propsoch: </span>
          {row.propsoch}
        </span>
      </td>
      <td className="px-4 py-4 xl:px-6 xl:py-5">
        <span className="text-muted flex items-start gap-2 text-sm leading-snug xl:text-[18px]">
          <MinusIcon className="text-muted-icon mt-0.5 shrink-0" />
          <span className="sr-only">Not offered: </span>
          {row.other}
        </span>
      </td>
    </tr>
  );
};

export default TRow;
