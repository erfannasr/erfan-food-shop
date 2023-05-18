import React from 'react';

import { Container, Row  } from 'reactstrap';
import '../../../Styles/Common-section.css'
const CommonSection = (props) => {
    return (
        <section className='Common_section'>
             <Container>
                  <h1 className='text-white'>{props.title}</h1>
             </Container>
        </section>
    );
};

export default CommonSection;