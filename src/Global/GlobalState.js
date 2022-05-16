import React, { useState } from 'react';
import { GlobalContext} from './GlobalContext';

export const GlobalState = (props) => {
    return (
        <GlobalContext.provider>
            {props.children}
        </GlobalContext.provider>
    )
}