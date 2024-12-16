'use client'//this not works for outside react components
import { GraphQLClient } from "graphql-request";

export const graphqlClient = () =>{
      if (typeof window == "undefined") {
      return null;
  }
    const endpoint = 'http://localhost:4000/graphql';
    const client = new GraphQLClient(endpoint, {
        headers: {
            Authorization: `${window.localStorage.getItem('second_brain_token')}`
        }
    });
    return client;
}