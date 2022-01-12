import React from 'react';
import { useState } from 'react';
import Header from './componentes/Header'
import {GifGrid} from './componentes/GifGrid'
import './styles/App.css'

function App() {

  const [categories, setCategories] = useState(['hola'])

  return (
    <div className="body">
      <div>
      <Header setCategoriesp={setCategories}/>
      <ol>
        {
          categories.map( category  => 
            <GifGrid  key={category}  categoryp={category}/> 
          )
        }
      </ol>
    </div>
    </div>
  );
}

export default App;
