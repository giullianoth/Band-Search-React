const Search = async (url) => {
    const response = await fetch(url)
        .then((resp) => resp.json())
        .then((data) => data)
        .catch((err) => err)

    return response;
}

const TicketMasterSearch = async (search) => {
    const ApiKey = "q2GNlCrgGo6c8uej3Ib4MsbAC2KIr5nG";
    const url = `https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${search}&apikey=${ApiKey}`;

    try {

        let rawData = await Search(url).then((data) => data._embedded.attractions);

        let isMusic = rawData.some((itemData) =>
            itemData.classifications.some((itemClassification) =>
                itemClassification.segment.name === "Music"
            )
        );

        if (!isMusic) {
            return `Sua pesquisa por "${search}" é inválida. Apenas bandas ou artistas (cantores).`;
        }

        let socialInfo = rawData.find((itemData) =>
            itemData.classifications.find((itemClassification) =>
                itemClassification.segment.name === "Music"
            )
        ).externalLinks;

        let mainTitle = rawData.find((itemData) =>
            itemData.classifications.find((itemClassification) =>
                itemClassification.segment.name === "Music"
            )
        ).name;

        return { socialInfo, mainTitle };

    } catch (error) {
        return `Sua pesquisa por "${search}" não retornou resultados. Tente de novo.`
    }
}

const YouTubeSearch = async (search) => {
    const ApiKey = "AIzaSyDxWH8nbxeYe5S9gs6nHDlydxQqFMjpo_g";
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${ApiKey}`;

    try {
        return await Search(url).then((data) => data.items.filter((video) => video.id.kind.includes("video")));
    } catch (error) {
        return `Sua pesquisa por "${search}" não retornou resultados. Tente de novo.`
    }
}

export { TicketMasterSearch, YouTubeSearch };