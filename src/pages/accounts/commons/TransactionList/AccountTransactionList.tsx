import { styled } from "styled-components";
import Card from "../../../../commons/components/Card";

const AccountTransactionList = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <DayCard bgColor="white">
        <div className="flex border-b-2 py-2 px-4 gap-x-2 items-center">
          <span className="flex-1">
            <span className="text-lg">28</span>{" "}
            <span className="text-xs">/ 01 / 2023</span>
          </span>
          <span className="flex-1 text-success text-right">Rp 0</span>
          <span className="flex-1 text-danger text-right">Rp 0</span>
        </div>
        <div className="flex flex-col divide-y">
          <div className="px-4 py-2 flex w-full gap-x-4">
            <div className="flex-0">
              <p>Category</p>
              <p className="text-xs">Sub Category</p>
            </div>
            <div className="flex-0">
              <p>Transaction</p>
              <p className="text-xs">Account Name</p>
            </div>
            <div className="flex-1 text-right">Rp 0</div>
          </div>
          <div className="px-4 py-2 flex w-full gap-x-4">
            <div className="flex-0">
              <p>Category</p>
              <p className="text-xs">Sub Category</p>
            </div>
            <div className="flex-0">
              <p>Transaction</p>
              <p className="text-xs">Account Name</p>
            </div>
            <div className="flex-1 text-right">Rp 0</div>
          </div>
          <div className="px-4 py-2 flex w-full gap-x-4">
            <div className="flex-0">
              <p>Category</p>
              <p className="text-xs">Sub Category</p>
            </div>
            <div className="flex-0">
              <p>Transaction</p>
              <p className="text-xs">Account Name</p>
            </div>
            <div className="flex-1 text-right">Rp 0</div>
          </div>
        </div>
      </DayCard>
      <DayCard bgColor="white">
        <div className="flex border-b-2 py-2 px-4 gap-x-2 items-center">
          <span className="flex-1">
            <span className="text-lg">28</span>{" "}
            <span className="text-xs">/ 01 / 2023</span>
          </span>
          <span className="flex-1 text-success text-right">Rp 0</span>
          <span className="flex-1 text-danger text-right">Rp 0</span>
        </div>
        <div className="flex flex-col divide-y">
          <div className="px-4 py-2 flex w-full gap-x-4">
            <div className="flex-0">
              <p>Category</p>
              <p className="text-xs">Sub Category</p>
            </div>
            <div className="flex-0">
              <p>Transaction</p>
              <p className="text-xs">Account Name</p>
            </div>
            <div className="flex-1 text-right">Rp 0</div>
          </div>
          <div className="px-4 py-2 flex w-full gap-x-4">
            <div className="flex-0">
              <p>Category</p>
              <p className="text-xs">Sub Category</p>
            </div>
            <div className="flex-0">
              <p>Transaction</p>
              <p className="text-xs">Account Name</p>
            </div>
            <div className="flex-1 text-right">Rp 0</div>
          </div>
          <div className="px-4 py-2 flex w-full gap-x-4">
            <div className="flex-0">
              <p>Category</p>
              <p className="text-xs">Sub Category</p>
            </div>
            <div className="flex-0">
              <p>Transaction</p>
              <p className="text-xs">Account Name</p>
            </div>
            <div className="flex-1 text-right">Rp 0</div>
          </div>
        </div>
      </DayCard>
      <DayCard bgColor="white">
        <div className="flex border-b-2 py-2 px-4 gap-x-2 items-center">
          <span className="flex-1">
            <span className="text-lg">28</span>{" "}
            <span className="text-xs">/ 01 / 2023</span>
          </span>
          <span className="flex-1 text-success text-right">Rp 0</span>
          <span className="flex-1 text-danger text-right">Rp 0</span>
        </div>
        <div className="flex flex-col divide-y">
          <div className="px-4 py-2 flex w-full gap-x-4">
            <div className="flex-0">
              <p>Category</p>
              <p className="text-xs">Sub Category</p>
            </div>
            <div className="flex-0">
              <p>Transaction</p>
              <p className="text-xs">Account Name</p>
            </div>
            <div className="flex-1 text-right">Rp 0</div>
          </div>
          <div className="px-4 py-2 flex w-full gap-x-4">
            <div className="flex-0">
              <p>Category</p>
              <p className="text-xs">Sub Category</p>
            </div>
            <div className="flex-0">
              <p>Transaction</p>
              <p className="text-xs">Account Name</p>
            </div>
            <div className="flex-1 text-right">Rp 0</div>
          </div>
          <div className="px-4 py-2 flex w-full gap-x-4">
            <div className="flex-0">
              <p>Category</p>
              <p className="text-xs">Sub Category</p>
            </div>
            <div className="flex-0">
              <p>Transaction</p>
              <p className="text-xs">Account Name</p>
            </div>
            <div className="flex-1 text-right">Rp 0</div>
          </div>
        </div>
      </DayCard>
    </div>
  );
};

const DayCard = styled(Card)`
  padding: 0;
  border-ra
`;

export default AccountTransactionList;
