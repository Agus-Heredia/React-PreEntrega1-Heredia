import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

import { getDoc, getFirestore, collection, doc } from "firebase/firestore";

const ShoesSection = () => {

//   const [getShoes, setGetShoes] = useState([]);
//   const { categoryId } = useParams();

// useEffect(() => {
//   const db = getFirestore();
//   const itemsRef = collection(db, 'items');
//   const query = itemsRef.where('categoryId', '==', 'zapatillas');

//   query.get().then((querySnapshot) => {
//     const FilteredItems = [];
//     querySnapshot.forEach((doc) => {
//       FilteredItems.push(id=FilteredItems.id ,...doc.data());
//     });
//     setGetShoes(FilteredItems);
//   });
// }, []);

// // {console.log(FilteredItems)}

  return (
    <div style={{fontSize:"20px", padding:"10px"}}>
      <h2>¡Acá vas a poder ver todas las zapatillas que tenemos disponibles para vos!</h2>

      <ul>
        <div key={FilteredItems.id}>
        {
          FilteredItems.map((a) => {
            <li>{a.name}</li>
          })
        }
        </div>
      </ul>
      
    </div>
  )
}

export default ShoesSection