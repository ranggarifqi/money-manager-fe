import Card from "../../../commons/components/Card";

interface Props {
  title: string;
}

const AccountCard = ({ title }: Props) => {
  return (
    <Card>
      <div className="flex flex-col items-center relative h-36">
        <div className="relative top-[-2rem] w-3/4 h-6">
          <div className="h-12 bg-main rounded-lg flex items-center justify-center px-3">
            <h2 className="text-light-shades truncate">{title}</h2>
          </div>
        </div>
        <div className="">
          <p>zzzz</p>
        </div>
      </div>
    </Card>
  );
};

export default AccountCard;
