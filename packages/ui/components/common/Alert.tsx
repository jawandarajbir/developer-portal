import SvgIcon, { IconNames } from './SvgIcon';

type AlertProps = {
  icon: IconNames;
  children: React.ReactNode | React.ReactNode[];
};

export const Alert = ({ children, icon }: AlertProps) => {
  return (
    <div role="alert" className={`text-theme-text mt-8 inline-flex w-full rounded-lg bg-blue-100 px-4 py-3 text-xs dark:bg-blue-900`}>
      <SvgIcon icon={icon} className="relative top-0.5 mr-4 h-12 w-12 text-blue-500 dark:text-blue-100 md:mr-2 md:h-5 md:w-5" width={24} height={24} />
      {children}
    </div>
  );
};