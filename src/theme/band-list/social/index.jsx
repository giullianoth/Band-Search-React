import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const socialInfos = {
    facebook: {
        color: "#1877F2",
        title: "Facebook",
        // icon: (<FontAwesomeIcon icon={brands("facebook-f")} />)
    },

    instagram: {
        color: "#D62976",
        title: "Instagram",
        // icon: (<FontAwesomeIcon icon={brands("instagram")} />)
    },

    youtube: {
        color: "#FE0002",
        title: "YouTube",
        // icon: (<FontAwesomeIcon icon={brands("youtube")} />)
    },

    twitter: {
        color: "#1DA1F2",
        title: "Twitter",
        // icon: (<FontAwesomeIcon icon={brands("twitter")} />)
    },

    spotify: {
        color: "#1ED760",
        title: "Spotify",
        // icon: (<FontAwesomeIcon icon={brands("spotify")} />)
    },

    itunes: {
        color: "#EA4CC0",
        title: "iTunes",
        // icon: (<FontAwesomeIcon icon={brands("itunes-note")} />)
    }
}

const Social = (props) => {

    let isValidSocialNetwork = props.network ? Object.keys(socialInfos).some((social) => social === props.network) : false;

    return isValidSocialNetwork
        && (
            <li>
                <a href={props.href} style={{ backgroundColor: socialInfos[props.network].color }} target="_blank">
                    {socialInfos[props.network].title}
                </a>
            </li>
        );
}

export default Social;