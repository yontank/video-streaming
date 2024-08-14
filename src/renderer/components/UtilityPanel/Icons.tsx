import React from 'react';
import { LucideAirplay } from 'lucide-react';
import { Icon as IconProps } from '../../types';

function Icons({ placeholder, onClick, Icon, iconType }: IconProps) {
  const UtilityIcon = Icon || LucideAirplay;
  const iconDefaultColor = iconType === 'danger' ? 'text-[red]' : 'text-white';

  return (
    <div className="tooltip" data-tip={placeholder}>
      <div
        aria-label={placeholder}
        tabIndex={0}
        data-tooltip-target="tooltip-dark"
        role="button"
        className={`w-14 h-14 bg-primary rounded-full flex justify-center items-center cursor-pointer hover:bg-slate-700 hover:${iconDefaultColor} transition-all duration-150 `}
        onClick={onClick}
        onKeyDown={onClick}
      >
        <UtilityIcon size="60%" />
      </div>
    </div>
  );
}

export default Icons;
