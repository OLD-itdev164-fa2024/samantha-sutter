import React from "react";
import { Heading } from "rebass";

const BaseHeading = ({ children, ...rest }) =>
    <Heading {...rest}>
        { children }
    </Heading>

    BaseHeading.propTypes = {
        children: propTypes.node.isRequired
    }

    export { BaseHeading }