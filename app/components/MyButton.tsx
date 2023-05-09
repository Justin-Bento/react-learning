interface MyButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary";
}

export default function MyButton({children, className = "", variant = "primary"}: MyButtonProps) {
  const variantStyles = {
    netural: 'bg-slate-200 hover:bg-slate-200/80 text-slate-950 dark:bg-slate-800 dark:hover:bg-slate-800/80 dark:text-slate-50',
    primary: 'bg-blue-200 hover:bg-blue-200/80 text-blue-950 dark:bg-blue-600 dark:hover:bg-blue-600/80 dark:text-blue-50',
    error: 'bg-red-200 hover:bg-red-200/80 text-red-950 dark:bg-red-600 dark:hover:bg-red-600/80 dark:text-red-50',
  };
  return (
    <button className={`p-2.5 px-4 w-full lg:w-auto transition-all font-medium rounded-sm text-xs uppercase tracking-wide ${variantStyles[variant]} ${className}`}>
      {children}
    </button>
  )
}
