import { Link } from "react-router-dom";
import { Breadcrumb } from "../../../commons/hooks/usePageTitle";

interface Props {
  data: Breadcrumb[];
}

const Breadcrumbs = ({ data }: Props) => {
  return (
    <div className="flex">
      {data.map((br, index, arr) => {
        const isLastItem = index === arr.length - 1;
        if (br.link) {
          return (
            <>
              <span>
                <Link to={br.link ?? "#"}>{br.label}</Link>
              </span>
              {!isLastItem && <span>&nbsp;{">"}&nbsp;</span>}
            </>
          );
        }
        return (
          <>
            <span>{br.label}</span>
            {!isLastItem && <span>&nbsp;{">"}&nbsp;</span>}
          </>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
