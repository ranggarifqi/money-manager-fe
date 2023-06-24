import Card from "../../../commons/components/Card";
import { Popover2 } from "@blueprintjs/popover2";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import AccountMenu from "./AccountMenu";
import { useCurrencyFormatter } from "../../../commons/hooks/useCurrencyFormatter";
import { useAppSelector } from "../../../commons/hooks/useAppSelector";
import { sltAccountById } from "../../../store/account/selectors";
import { styled, useTheme } from "styled-components";

interface Props {
  accountId: string;
}

const AccountBalance = ({ accountId }: Props) => {
  const theme = useTheme();
  const account = useAppSelector((state) => sltAccountById(state, accountId));

  const { formatBalance } = useCurrencyFormatter();

  return (
    <Card className="text-white flex" bgColor={theme?.colors.main[800]}>
      <div className="flex-1">
        <p>Balance</p>
        <BalanceText $isNegative={(account?.balance ?? 0) < 0}>
          {formatBalance(account?.balance)}
        </BalanceText>
      </div>
      <div className="flex-none relative top-[-0.3rem]">
        <Popover2 content={<AccountMenu accountId={accountId} />}>
          <EllipsisHorizontalIcon className="w-8 h-8 text-white cursor-pointer" />
        </Popover2>
      </div>
    </Card>
  );
};

const BalanceText = styled.h3<{ $isNegative?: boolean }>`
  color: ${(props) =>
    props.$isNegative
      ? props.theme.colors.danger
      : props.theme.colors["light-shades"]};
`;

export default AccountBalance;
