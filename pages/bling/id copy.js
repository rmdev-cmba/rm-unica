
// para capturar algo dinamico e tornar estático, usa-se 'getServerSideProps()'
// função assíncrona que roda no servidor
// o 'getServerSideProps()' acontece em tempo de produção
export async function getServerSideProps(context) {
    const id = context.query.id;

    return {
        props: { id: id }
    }
}

function Estatico(props) {
    return <div>Id estatico: {props.id}</div>
}

export default Estatico;

// a url '/produtos/[id]' mostra uma página dinâmica
// a url 'estatica/[id]' mostra uma página estática, mas não há garantia de ser uma página distribuida globalmente, pode haver falhas de captura do SEO
// usa- se o 'getStaticPaths' para corrigir essas falhas

//https://www.youtube.com/watch?v=V2T_bkOs0xA (09:59)