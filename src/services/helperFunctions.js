export async function fetchJson(path){
    return await fetch(path)
    .then(response => response.json());
}