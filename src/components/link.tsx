import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import styled from "styled-components";

interface LinkProps {
    name: string;
    icon: IconDefinition
}

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem 0rem;
`;

const Line = styled.div`
    color: #45644a;
`

const Link = (props: LinkProps) => {
    return (
        <>
            <Box>
                <Line>
                    <FontAwesomeIcon icon={props.icon} /> {props.name}
                </Line>
            </Box>
        </>
    )
}

export default Link;