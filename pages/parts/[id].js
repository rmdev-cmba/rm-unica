// rota '/parts/[id]'

// o 'getStaticPaths' define quais camninhos serão antecipadamente criados no 'build' para então o setor responsável gerar a página estática, que não é função do 'getStaticPaths'

// o 'getStaticProps' é quem gera as páginas estáticas

export async function getStaticPaths() {
    return {
        paths:[{
            params: {id: '1'}
        },{
            params: {id: '2'}
        }],
        fallback: 'blocking'
        // o fallback 'false' emite uma página 404 caso o params recebido não esteja listado em 'paths'
        // o fallback 'true' permite gerar páginas que não esteja listada acima mesmo com erro
        // o fallback "blocking" só emite a página buscada se a mesma já estiver pronta, enquanto não estiver pronta fica mostrando página atual que está no client-side
        //https://www.youtube.com/watch?v=V2T_bkOs0xA (20:12)
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;

    return {
        props: { id: id }
    }

}

function Parts(props) {
    return <div>Id produto: {props.id}</div>
}

export default Parts;