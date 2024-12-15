import { GraphQLClient } from "graphql-request";

export const graphqlClient = () =>{
    const endpoint = 'http://localhost:4000/graphql';
    const client = new GraphQLClient(endpoint, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('second_brain_token')}`
        }
    });
    return client;
}