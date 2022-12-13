import { useState } from "react";
import { TicketMasterSearch, YouTubeSearch } from "../../app/search";
import { mainViewportDifferenceValue } from "../../app/set-viewport";
import BandList from "../band-list";
import Error from "../error";
import Form from "../form";
import Loading from "../loading";

const Main = () => {
    const [mainHeightDifference, setMainHeightDifference] = useState(0);
    const [loading, setLoading] = useState(false);
    const [bandList, setBandList] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [bandData, setBandData] = useState({});

    let bandDataUpdate = null;

    mainViewportDifferenceValue().then((height) => {
        setMainHeightDifference(height);
    })

    window.onload = () => {
        mainViewportDifferenceValue().then((height) => {
            setMainHeightDifference(height);
        })
    };

    window.onresize = () => {
        mainViewportDifferenceValue().then((height) => {
            setMainHeightDifference(height);
        })
    };

    const setIsLoading = (check) => {
        setLoading(check);
    }

    const setSearch = async (search) => {

        setIsError(false);
        setBandList(false);

        try {
            const dataInfo = await TicketMasterSearch(search).then((data) => data);

            if (typeof (dataInfo) === "object") {

                const { socialInfo, mainTitle } = dataInfo;

                const listItems = await YouTubeSearch(search).then((data) =>
                    data.filter((video) => video.id.kind.includes("video"))
                );

                bandDataUpdate = { mainTitle, socialInfo, listItems };
                setBandData({ ...bandDataUpdate });

                setLoading(false);
                setBandList(true);

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