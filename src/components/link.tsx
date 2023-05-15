import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import styled from "styled-components";

interface LinkProps {
    name: string;
    icon: IconDefinition;
    url: string;
}

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem 0rem;
`;


const Anchor = styled.a`
    color: #45644a;
`

const Link = (props: LinkProps) => {
    return (
        <Box>
            <Anchor href={props.url}>
                <FontAwesomeIcon icon={props.icon} /> {props.name}
            </Anchor>
        </Box>
    )
}

export default Link;