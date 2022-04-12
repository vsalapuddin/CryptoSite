import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HomeStyles';

const Homes = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Group 32's Database Project
        </SectionTitle>
        <SectionText>
        Created By Vince Salapuddin, Kieran Ford, Isaiah Hernandez, and Conall O'Toole
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Homes;