import React from 'react';
import { LucideProps } from 'lucide-react';

export type User = {
  id: string;
  name: string;
};

export type Icon = {
  placeholder: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  onClick: () => void;
  iconType?: 'danger' | 'default';
};
