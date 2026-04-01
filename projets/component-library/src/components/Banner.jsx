import React from "react";
import "./Banner.css";
import attentionIcon from "../assets/icons/attentionIcon.svg";
import infoIcon from "../assets/icons/infoIcon.svg";
import okIcon from "../assets/icons/okIcon.svg";
import stopIcon from "../assets/icons/stopIcon.svg";

    const BANNER_TITLES = {
        success: {
            title: "Congratulations!",
            icon: okIcon
        },
        warning: {
            title: "Attention",
            icon: attentionIcon
        },
        error: {
            title: "There is a problem with your application",
            icon: stopIcon
        },
        neutral: {
            title: "Update available",
            icon: infoIcon
        }
    }

/** * 
 * @param {"success"|"warning"|"error"|"neutral"} type - Le style de la bannière determine sa couleur
 */
export default function Banner({ type = "neutral", children }) {

    return (
        <div className={`banner ${type}`}>
                <div className="banner-title-icon">
                    <img src={BANNER_TITLES[type].icon} alt={`${type} icon`} />
                </div>
                <div className="banner-content">
                    <div className="banner-content-title">
                        {BANNER_TITLES[type].title}
                    </div>
                    {children && <div className="banner-content-text">{children}</div>}
                </div>
        </div>
    )


}