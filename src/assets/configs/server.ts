/* ===================================================
    Date: 2023-08-02
    Desc: Server URL and Cookie handler
    Author: 🟣 Enoc Lima
=====================================================*/


export function server_url(endpoint: string): string {
    let url: string = endpoint.trim().replace(/^\/+|\/+$/g, "");
    return process.env.DEV ? `${process.env.SERVER_URL}/${url}` : `/${endpoint}/`;
}

function getCookie(name: string): string | null {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        let cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + "=")) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break
            };
        };
    };
    return cookieValue;
}

export default getCookie;