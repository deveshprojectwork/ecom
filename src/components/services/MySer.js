import Axios from "axios";

export function latestNews()
{
    const url="http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-24&sortBy=publishedAt&apiKey=ce9d278934764885b47a5bb76793f88d";
    Axios.get(url)
}

export function jsonUser()
{
    let URl="https://jsonplaceholder.typicode.com/users";
    fetch(URl)
}