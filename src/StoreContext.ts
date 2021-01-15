import React from 'react';
import {IMobxStore} from './types'
import {storeInstance} from './StoreProvider'

export const StoreContext = React.createContext<IMobxStore>(storeInstance);