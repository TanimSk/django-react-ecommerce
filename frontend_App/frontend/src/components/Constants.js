// export const URL = "http://127.0.0.1:8000";
export const URL = `https://${window.location.host}`;

export const csrf = document.getElementsByName("csrfmiddlewaretoken")[0].value;