import React from 'react';
import {Container} from "reactstrap";


import "./common-section.css"
const CommonSection = ({title}) => {
    return (
        <section className="common_section">
            <Container>
                <h1 className="text-center">{title}</h1>
            </Container>
        </section>
    )
}

export default CommonSection;