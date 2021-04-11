type Props = {
  className?: string;
};

const HeartIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      version="1.1"
      viewBox="0 0 32 32"
      aria-hidden="false"
      fill="white"
    >
      <path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path>
    </svg>
  );
};

export default HeartIcon;
