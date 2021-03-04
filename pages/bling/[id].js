
// para capturar algo dinamico e tornar estático, usa-se 'getServerSideProps()'
// função assíncrona que roda no servidor
// o 'getServerSideProps()' acontece em tempo de produção
// export async function getServerSideProps(context) {
//     const id = context.query.id;

//     return {
//         props: { id: id }
//     }
// }

async function bling(request, response) {
    const id = request.query.id;

    const dynamicDate = new Date();

    // codigo do produto
    const codigo = id
    const apikey = process.env.BLING_APIKEY;
    const responseBling = await fetch(`https://bling.com.br/Api/v2/produto/${codigo}/json&apikey=${apikey}`);

    const retorno = await responseBling.json();

    // para a vercel transformar a pagina chamada em uma 'cdn'
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
    

    response.json({
        date: dynamicDate.toGMTString(),
        retorno: retorno.retorno
    });
}

export default bling;