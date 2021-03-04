async function tempo(request, response) {
    const dynamicDate = new Date();

    // codigo do produto
    const codigo = 4838
    const apikey = process.env.BLING_APIKEY;
    const responseBling = await fetch(`https://bling.com.br/Api/v2/produtos/${codigo}/json&apikey=${apikey}`);

    const retorno = await responseBling.json();

    // para a vercel transformar a pagina chamada em uma 'cdn'
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
    

    response.json({
        date: dynamicDate.toGMTString(),
        retorno: retorno.retorno
    });
}

export default tempo;