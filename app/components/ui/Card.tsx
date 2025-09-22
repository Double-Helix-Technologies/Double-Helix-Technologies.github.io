import React from "react";
import { cn } from "../../utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    key?: React.Key;
}
export const Card: React.FC<CardProps> = ({ key, className, ...props }) => (
  <div key={key} className={cn("p-8 rounded-2xl transition-all hover:shadow-lg", className)} {...props} />
);

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export const CardHeader: React.FC<CardHeaderProps> = ({ className, ...props }) => (
  <div className={cn("flex items-center mb-2", className)} {...props} />
);

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
export const CardTitle: React.FC<CardTitleProps> = ({ className, ...props }) => (
  <h3 className={cn("text-xl font-semibold text-text-primary", className)} {...props} />
);

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export const CardContent: React.FC<CardContentProps> = ({ className, ...props }) => (
  <div className={cn("text-text-secondary pl-4", className)} {...props} />
);

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
}
export const Icon: React.FC<IconProps> = ({ className, children, ...props }) => (
  <div
    className={cn("h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary", className)}
    {...props}
  >
    {children}
  </div>
);
