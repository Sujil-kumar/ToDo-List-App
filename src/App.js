// import logo from './logo.svg';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItems from './AddItems';
import { useState } from 'react';
import SearchItem from './SearchItem';

function App() {
  const [items,setItems]=useState(JSON.parse(localStorage.getItem("To_do_list")) || []);
  const [search,setSearch]=useState("");
      const handleCheck=(id)=>
        {
          const listItem=items.map((item)=>
              (item.id===id)?{...item,checked:!item.checked}:item)
          setItems(listItem)
          localStorage.setItem("To_do_list",JSON.stringify(listItem))
        }
      const handleDelete=(id)=>
        {
          const listItem=items.filter((item)=>
            item.id!==id )
          setItems(listItem)
          localStorage.setItem("To_do_list",JSON.stringify(listItem))
        }

      const addItem=(item)=>
        {
          const id=items.length? items[items.length-1].id+1:1;
          console.log(id)
          const addNewitem={id,checked:false,item}
          const listItem=[...items,addNewitem]
          setItems(listItem)
          localStorage.setItem("To_do_list",JSON.stringify(listItem))
        }
      
      const [newItem,setNewItem]=useState("");
      const handleSubmit=(e)=>
        {
          e.preventDefault();
          if(!newItem) return;
          console.log(newItem)
          addItem(newItem);
          setNewItem("");
        }
  
  return (
    <div className='App'>
      <Header/>
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      
      <Content 
        items={items.filter(item=>((item.item.toLowerCase()).includes(search.toLocaleLowerCase())))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
        items={items}
      />
    </div>
  );
}

export default App;
