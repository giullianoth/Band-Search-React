import { useEffect } from "react";
import { useState } from "react";
import { TicketMasterSearch, YouTubeSearch } from "../../app/search";
import BandList from "../band-list";
import Error from "../error";
import Form from "../form";
import Loading from "../loading";

const mainViewportDifference = () => {

    let headerHeight = null;
    let footerHeight = null;

    return new Promise((resolve) => {

        let getHeader = setInterval(() => {
            headerHeight = document.querySelector(".bs_header")?.offsetHeight;
            footerHeight = document.querySelector(".bs_footer")?.offsetHeight;

            if (headerHeight && footerHeight) {
                resolve(headerHeight + footerHeight);
                clearInterval(getHeader);
            }
        }, 100);
    })
}

const Main = () => {
    const [mainHeightDifference, setMainHeightDifference] = useState(0);
    const [loading, setLoading] = useState(false);
    const [bandList, setBandList] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [bandData, setBandData] = useState({
        mainTitle: "",
        socialInfo: {},
        listItems: []
    });

    let bandDataUpdate = null;

    mainViewportDifference().then((data) => {
        setMainHeightDifference(data);
    })

    window.onload = () => {
        mainViewportDifference().then((data) => {
            setMainHeightDifference(data);
        })
    };

    window.onresize = () => {
        mainViewportDifference().then((data) => {
            setMainHeightDifference(data);
        })
    };

    const setIsLoading = (check) => {
        setLoading(check);
    }

    const setSearch = async (search) => {

        setIsError(false);
        setBandList(false);

        try {
            const dataInfo = await TicketMasterSearch(search)
                .then((data) => data);

            if (typeof (dataInfo) === "object") {

                const isMusic = dataInfo.some((itemData) =>
                    itemData.classifications.some((itemClassification) =>
                        itemClassification.segment.name === "Music"
                    )
                );

                if (isMusic) {
                    const socialInfo = dataInfo.find((itemData) =>
                        itemData.classifications.find((itemClassification) =>
                            itemClassification.segment.name === "Music"
                        )
                    ).externalLinks;

                    const mainTitle = dataInfo.find((itemData) =>
                        itemData.classifications.find((itemClassification) =>
                            itemClassification.segment.name === "Music"
                        )
                    ).name;

                    const listItems = await YouTubeSearch(search).then((data) =>
                        data.filter((video) => video.id.kind.includes("video"))
                    );

                    bandDataUpdate = { mainTitle, socialInfo, listItems };
                    setBandData({...bandDataUpdate});

                    setLoading(false);
                    setBandList(true);

                } else {
                    setIsError(true);
                    setErrorMessage(`Sua pesquisa por ${search} é inválida. Apenas bandas ou artistas (cantores).`);
                    setLoading(false);
                }

            } else {
                setIsError(true);
                setErrorMessage(dataInfo);
                setLoading(false);
            }
        } catch (error) {
            setIsError(true);
            setErrorMessage("Erro inesperado na pesquisa.");
            setLoading(false);
            console.log(error);
        }
    }

    return (
        <main className="bs_main" style={{ height: `calc(100vh - ${mainHeightDifference}px)` }}>
            <div className="bs_main_content">
                <Form isLoading={setIsLoading} search={setSearch} />
                {bandList && <BandList data={bandData} />}
                {loading && <Loading />}
                {isError && <Error>{errorMessage}</Error>}
            </div>
        </main>
    );
}

export default Main;