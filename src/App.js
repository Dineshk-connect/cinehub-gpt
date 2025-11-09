
import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';

function App() {
  return (
   <Provider store={appStore}>
    <div className="w-full h-full overflow-x-hidden overflow-y-auto hide-scrollbar bg-black">
      <Body/>
    </div>
    </Provider> 
  );
}

export default App;
