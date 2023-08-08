import { ReactNode } from "react";

type HeadingProps = {
    children: ReactNode;
}


const Heading = ({ children }) => {
    return <h2>{children}</h2>
};

export default Heading;
