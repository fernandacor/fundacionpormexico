import { ReactNode, useRef } from "react";

interface TooltipProps {
  children: ReactNode;
  tooltip?: string;
  noWrap?: boolean;
}

const Tooltip = ({ children, tooltip, noWrap = false }: TooltipProps) => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const container = useRef<HTMLSpanElement>(null);

  return tooltip ? (
    <div
      className="group relative inline-block"
      onMouseEnter={({ clientX }) => {
        if (!tooltipRef.current || container.current) return;
        tooltipRef.current.style.left = clientX + "px";
      }}
    >
      {children}
      <span
        className={`invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-neutral-50 dark:bg-neutral-800 p-2 px-4 rounded-xl absolute top-full mt-2 mr-2 shadow-md outline-4 z-50 ${
          noWrap && "whitespace-nowrap"
        }`}
      >
        {tooltip}
      </span>
    </div>
  ) : null;
};

export default Tooltip;
