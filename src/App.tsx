import { BaseLayout, Notes } from './components';

function App(): JSX.Element {
  return (
    <div className='App'>
      <BaseLayout>
        <Notes />
      </BaseLayout>
    </div>
  );
}

export default App;
