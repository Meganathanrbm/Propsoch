import type { ComponentType } from "react";

export type IconComponent = ComponentType<{ className?: string }>;

export type City = "Bangalore" | "Mumbai";

export type FilterKey = "city" | "propertyType" | "budget";

export type BudgetOption = {
  label: string;
  emi: string;
};

export type BadgeItem = {
  icon: IconComponent;
  title: string;
  subtitle: string;
};

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  external?: boolean;
};

export type NavSection = {
  heading: string;
  links: NavLink[];
};
