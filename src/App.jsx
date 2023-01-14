import { useState } from 'react';
import { CategoryForm, ResultList, Sidebar } from './components';

const App = () => {
  const [category, setCategory] = useState('')

  const onAddCategory = (category) => {
    setCategory(category);
    // console.log(categories) // imprime la lista anterior, imagino que habra un metodo tick como en vue
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <Sidebar category={category} />
          </div>
          <div className="col-12 col-md-7">
            <CategoryForm onNewCategory={(category) => onAddCategory(category)} />
            <ResultList category={category} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
