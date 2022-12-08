import { useState } from "react";
import thumbnail from "../../assets/images/samples/hqdefault.webp";
import MainHeader from "./main-header";
import MainResults from "./main-results";

const listViewportDifference = () => {

    let mainHeight = null;
    let formHeight = null;
    let listHeaderHeight = null;
    let paddingDiff = 40;

    return new Promise((resolve) => {

        let getList = setInterval(() => {

            mainHeight = document.querySelector(".bs_main")?.offsetHeight;
            formHeight = document.querySelector(".bs_main_content_form")?.offsetHeight;
            listHeaderHeight = document.querySelector(".bs_main_content_results_header")?.offsetHeight;

            if (mainHeight && formHeight && listHeaderHeight) {

                paddingDiff = window.innerWidth < 1024 ? 40 : 80;
                listHeaderHeight = window.innerWidth < 1024 ? listHeaderHeight : 0;

                resolve(mainHeight - formHeight - listHeaderHeight - paddingDiff);
                clearInterval(getList);
            }
        }, 100);
    })
}

const BandList = (props) => {

    const [listHeightDifference, setListHeightDifference] = useState(0);

    listViewportDifference().then((data) => {
        setListHeightDifference(data);
    })

    window.onload = () => {
        listViewportDifference().then((data) => {
            setListHeightDifference(data);
        })
    };

    window.onresize = () => {
        listViewportDifference().then((data) => {
            setListHeightDifference(data);
        })
    };

    const mainTitle = "Metallica";

    // const socialInfo = await fetch("https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=metallica&apikey=q2GNlCrgGo6c8uej3Ib4MsbAC2KIr5nG")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         data._embedded.attractions.forEach((attraction) => {
    //             if (attraction.classifications.some((classification) => classification.segment.name === "Music")) {
    //                 return attraction;
    //             }
    //         });
    //     })
    //     .catch((error) => {
    //         return error;
    //     })

    const socialInfo = [
        {
            classifications: [
                { segment: { name: "Music" } }
            ],

            externalLinks: {
                facebook: [{ url: "https://www.facebook.com/Metallica" }],
                instagram: [{ url: "https://instagram.com/metallica" }],
                youtube: [{ url: "https://www.youtube.com/user/MetallicaTV" }],
                twitter: [{ url: "https://twitter.com/Metallica" }],
                spotify: [{ url: "https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB" }],
                itunes: [{ url: "https://music.apple.com/ca/artist/metallica/3996865" }],
            }
        }
    ];


    let socialNetworks = Object.keys(socialInfo[0]?.externalLinks) ?? null;
    let socialLinks = Object.values(socialInfo[0]?.externalLinks).map((item) => item[0].url) ?? null;

    const listItems = [{
        snippet: {
            title: "Metallica: Enter Sandman (Official Music Video)",
            description: "Metallica's official music video for “Enter Sandman,” from the album “Metallica.” Subscribe for more videos: ...",
            thumbnails: {
                medium: {
                    url: "https://i.ytimg.com/vi/CD-E-LDc384/mqdefault.jpg"
                }
            }
        },

        id: {
            videoId: "CD-E-LDc384"
        }
    }];

    for (let i = 0; i < 3; i++) {
        listItems.push({
            snippet: {
                title: "Metallica: Nothing Else Matters (Official Music Video)",
                description: "Video Premiere Date: February 25, 1992 Follow Metallica: Website & Store: http://www.metallica.com Official Live ...",
                thumbnails: {
                    medium: {
                        url: thumbnail
                    }
                }
            },

            id: {
                videoId: "tAGnKpE4NCI"
            }
        });
    }

    return (
        <section className="bs_main_content_results">
            <MainHeader data={{ socialNetworks, socialLinks }} title={mainTitle} />
            <MainResults data={listItems} height={listHeightDifference} />
        </section>
    );
}

export default BandList;