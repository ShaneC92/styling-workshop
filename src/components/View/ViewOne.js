import React from 'react';
//Styled-Components
import styled from 'styled-components';

import Disc from '../../assets/disc.png';

const Resize = styled.img`
    width: 65vw;
    height: auto;
    display: block;
    margin: 0 auto;
`;

const ViewOne = (props) => {

    return(
        <div>
            <Resize src={Disc} alt='record' />
        </div>
    )
}

export default ViewOne;