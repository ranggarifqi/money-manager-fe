import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Card from "../../../commons/components/Card";
import { useNavigate } from "react-router-dom";

const AddAccountCard = () => {
  const navigate = useNavigate();

  return (
    <Card
      className="border-4 border-dark-accent border-dotted text-dark-accent hover:text-light-accent flex flex-col items-center justify-center hover:border-light-accent cursor-pointer"
      onClick={() => navigate("/accounts/new")}
      bgColor="rgb(0,0,0,0)"
    >
      <PlusCircleIcon className="w-[6rem] h-[6rem] " />
      <p className="text-lg">Add new account</p>
    </Card>
  );
};

export default AddAccountCard;
