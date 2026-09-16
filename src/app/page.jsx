'use client';

import { useState, useEffect } from 'react';
import CardReceitas from '@/components/cardRecipes';

export default function Receitas() {

  const [listaReceitas, setListarReceitas] = useState([]);
  const [msgErro, setMsgErro] = useState("");

  useEffect(() => {
    fetch('https://dummyjson.com/recipes?limit=12')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setListarReceitas(data.recipes);
        setMsgErro("");
      })
      .catch(error => setMsgErro(error.message))
  }, [])

  return (
    <>
      <h2>Receitas</h2>
      <div className="card-conteiner">
        {listaReceitas.map((receitas, idx) => {
          return <CardReceitas
            key={idx}
            image={receitas.image}
            nome={receitas.name}
            ingredientes={receitas.ingredients}
            instrucoes={receitas.instructions}
            tags={receitas.tags}
          />
        })}
      </div>
    </>
  )
}