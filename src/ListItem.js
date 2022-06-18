import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const ListItem = ({item, handleChecked, handleDelete}) => {
  return (
    <li>
        <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleChecked(item.id)}
        />

        <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        >
        {item.label}
        </label>
        <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.label}`}
        />
  </li>
  )
}

export default ListItem