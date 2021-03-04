// este codigo busca algo pela rota '/produtos/[id]' e entrega uma página de html dinâmico.
// veja em '/estatico/[id]' um formato estático

import { useRouter } from 'next/router';

// gerando componente 'Produtos' para o next
function Produtos(props) {// props recebe dados de fora
    // useRouter serve para capturar um parametro na url
    const router = useRouter();
    // capturando o parametro: '/produtos/[id]'
    const id = router.query.id;
    // mostrando o parametro capturado
    return <div>Id do produto: {id}</div>

}
// exportando o componente 'Produtos' para o next
export default Produtos;

