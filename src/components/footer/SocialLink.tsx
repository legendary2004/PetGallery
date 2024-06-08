import React from "react";

function SocialLink(prop) {
    return (
        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
            {prop.social}
        </a>
    )
}

export default SocialLink