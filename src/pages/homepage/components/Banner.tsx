import {ReactNode} from "react";
import Image from "./Image";

interface Props {
  children: ReactNode;
  url: string;
}

function Banner({children, url}: Props) {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-1">
        <Image className="object-cover" url={url} />
      </div>
      <div className="flex-1 text-white bg-[#242424] flex flex-col justify-center">{children}</div>
    </div>
  );
}

export default Banner;
