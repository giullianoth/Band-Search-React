import { useState } from "react";
import thumbnail from "../../assets/images/samples/hqdefault.webp";
import Social from "./social";
import Video from "./video";

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

const back = () => {
    let form = document.querySelector(".bs_main_content_form");
    form.classList.remove("list");
}

const BandList = () => {

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

    let socialNetworks = Object.keys(socialInfo[0].externalLinks);
    let socialLinks = Object.values(socialInfo[0].externalLinks).map((item) => item[0].url);

    // fetch("https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=metallica&apikey=q2GNlCrgGo6c8uej3Ib4MsbAC2KIr5nG")
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             console.log(data._embedded.attractions[0], socialInfo[0]);
    //         })

    const listItems = [
        {
            snippet: {
                title: "Metallica: Nothing Else Matters (Official Music Video)",
                description: "Video Premiere Date: February 25, 1992 Follow Metallica: Website & Store: http://www.metallica.com Official Live ...",
                thumbnails: {
                    medium: {
                        url: thumbnail
                    }
                }
            }
        },

        {
            snippet: {
                title: "Metallica: Nothing Else Matters (Official Music Video)",
                description: "Video Premiere Date: February 25, 1992 Follow Metallica: Website & Store: http://www.metallica.com Official Live ...",
                thumbnails: {
                    medium: {
                        url: thumbnail
                    }
                }
            }
        },

        {
            snippet: {
                title: "Metallica: Nothing Else Matters (Official Music Video)",
                description: "Video Premiere Date: February 25, 1992 Follow Metallica: Website & Store: http://www.metallica.com Official Live ...",
                thumbnails: {
                    medium: {
                        url: thumbnail
                    }
                }
            }
        },

        {
            snippet: {
                title: "Metallica: Nothing Else Matters (Official Music Video)",
                description: "Video Premiere Date: February 25, 1992 Follow Metallica: Website & Store: http://www.metallica.com Official Live ...",
                thumbnails: {
                    medium: {
                        url: thumbnail
                    }
                }
            }
        }
    ];

    return (
        <section className="bs_main_content_results">
            <div className="bs_main_content_results_header">
                <header className="bs_main_content_results_header_title">
                    <h1>{mainTitle}</h1>
                </header>

                <ul className="bs_main_content_results_header_desc">
                    {socialNetworks.map((item, index) =>
                        <Social network={item} href={socialLinks[index]} key={index + 1} />
                    )}
                </ul>

                <button className="back" onClick={back}>Voltar</button>
            </div>

            <div className="bs_main_content_results_list" style={{ height: `${listHeightDifference}px` }}>
                {listItems.map((item, index) =>
                    <Video data={item} key={index + 1} />
                )}
            </div>
        </section>
    );
}

export default BandList;