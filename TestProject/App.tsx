import React from 'react';
import { RecoilRoot } from 'recoil'

import TabNavigation from './src/navigations/TabNavigation'

const App = () => {
  return (
    <>
      <RecoilRoot>
        <TabNavigation />
      </RecoilRoot>
    </>
  )
}

export default App;
