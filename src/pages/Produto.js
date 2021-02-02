import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Produto.module.css';

function Produto() {

  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  
  const {id} = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try{
        setLoading(true);
        const res = await fetch(url);
        const json = await res.json()
        setProduto(json)
      }catch(err){
        setError(err);
        console.log("Ouve um erro ", error)
      }finally{
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  }, [error, id])

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return(
    <section className={styles.produto + ' animeLeft'}>
      <div>
        {produto.fotos.map((foto) => (
          <img src={foto.src} key={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div>
        <h1 className={styles.nome}>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  )
}

export default Produto;
