// export const URL = "http://127.0.0.1:8000";
export const URL = window.location.hostname;

export const csrf = document.getElementsByName("csrfmiddlewaretoken")[0].value;