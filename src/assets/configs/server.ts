import axios from "axios";


function server_url(endpoint: string): string {
    let url: string = endpoint.trim().replace(/^\/+|\/+$/g, "");
    return process.env.DEV ? `${process.env.SERVER_URL}/${url}` : `/${endpoint}/`;
}


function server(method: string, url: string, data: any = null): Promise<any> {
    return axios({
        validateStatus: (status: number) => status >= 200 && status < 400,
        withCredentials: true,
        method: method,
        url: server_url(url),
        headers: {"Async": true, "X-CSRFToken": getCookie("csrftoken")},
        data: data && data
    })
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

export { 
    server, 
    server_url
}