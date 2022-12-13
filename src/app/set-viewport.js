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

const mainHeightViewport = () => {
    let mainHeightValue = null;

    return new Promise((resolve) => {

        let getHeight = setInterval(() => {
            mainHeightValue = document.querySelector(".bs_main")?.offsetHeight;

            if (mainHeightValue) {
                resolve(mainHeightValue);
                clearInterval(getHeight);
            }
        }, 100);
    })
}

const mainViewportDifferenceValue = async () => {
    let mainHeightDifference = await mainViewportDifference().then((data) => data);
    return mainHeightDifference;
}

const listHeightViewportValue = async () => {
    let listHeight = await listViewportDifference().then((data) => data);
    return listHeight;
}

const mainHeightViewportValue = async () => {
    let mainHeight = await mainHeightViewport().then((data) => data);
    return mainHeight;
}

export { mainViewportDifferenceValue, listHeightViewportValue, mainHeightViewportValue };