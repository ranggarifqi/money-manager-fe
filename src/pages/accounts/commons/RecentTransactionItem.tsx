const RecentTransactionItem = () => {
  return (
    <li className="flex justify-between gap-x-5">
      <div className="flex-none w-8 h-8 font-semibold text-success text-lg self-center justify-self-center">
        IN
      </div>
      <div className="flex-1">
        <p className="font-semibold">Kebutuhan Hewan Piaraan</p>
        <p className="text-dark-accent">1 Januari 2023</p>
      </div>
      <div className="flex-1 self-center justify-self-end text-success text-right">
        +Rp 2.500,00
      </div>
    </li>
  );
};

export default RecentTransactionItem;
