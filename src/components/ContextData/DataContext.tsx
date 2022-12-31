import {createContext} from 'react';
import { data } from './Data';

type ProjectsProviderProps = {
    children?: React.ReactNode;
}

export const DataContext = createContext(data)

export const DataContextProvider = ({children}:ProjectsProviderProps) => {
    return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}