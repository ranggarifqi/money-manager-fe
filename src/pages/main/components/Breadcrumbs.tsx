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
            <div key={br.label}>
              <span>
                <Link to={br.link ?? "#"}>{br.label}</Link>
              </span>
              {!isLastItem && <span>&nbsp;{">"}&nbsp;</span>}
            </div>
          );
        }
        return (
          <div key={br.label}>
            <span>{br.label}</span>
            {!isLastItem && <span>&nbsp;{">"}&nbsp;</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
