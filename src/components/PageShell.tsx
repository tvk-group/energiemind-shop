import type { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
  narrow?: boolean;
}

export function PageShell({ children, narrow = false }: PageShellProps) {
  return (
    <div className={`${narrow ? "max-w-3xl" : "max-w-7xl"} mx-auto px-4 sm:px-6 lg:px-8 py-10`}>
      <div className="site-card border rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
        {children}
      </div>
    </div>
  );
}
