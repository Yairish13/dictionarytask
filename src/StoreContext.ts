import React from 'react';
import {storeInstance} from './StoreProvider'
import {IMobxStore} from './types'
export const StoreContext = React.createContext<IMobxStore>(storeInstance);