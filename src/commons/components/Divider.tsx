interface Props {
  text?: string;
}

const Divider = ({ text }: Props) => {
  return (
    <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
      {text && (
        <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
          {text}
        </p>
      )}
    </div>
  );
};

export default Divider;
