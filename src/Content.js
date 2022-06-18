import React from "react";
import ItemsList from "./itemsList";

const Content = ({items, handleChecked, handleDelete}) => {
 
  return (
    <main>
      {items.length ? (
        <ItemsList  
        items={items}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
        />
      ) : (
        <p>No Items Found.</p>
      )}
    </main>
  );
};

export default Content;
