import React from 'react';
import {createSchopListsStore} from '../stores/schopListsStore';
import {useLocalObservable} from 'mobx-react';

const SchopListsContext = React.createContext(null);

export const SchopProvider = ({children}) => {
  const schopListsStore = useLocalObservable(createSchopListsStore);

  return (
    <SchopListsContext.Provider value={schopListsStore}>
      {children}
    </SchopListsContext.Provider>
  );
};

export const useSchopListsStore = () => React.useContext(SchopListsContext);

// createSchopListsStore;
// import React from 'react';
// import {createWorkerStore} from '../stores/workerStore';
// import {useLocalObservable} from 'mobx-react';

// const WorkerContext = React.createContext(null);

// export const WorkerProvider = ({children}) => {
//   const workerStore = useLocalObservable(createWorkerStore);

//   return (
//     <WorkerContext.Provider value={workerStore}>
//       {children}
//     </WorkerContext.Provider>
//   );
// };

// export const useWorkerStore = () => React.useContext(WorkerContext);
