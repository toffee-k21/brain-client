import { graphqlClient } from "@/clients/api";
import { gql } from "graphql-request";

export const getUserThoughts = async () =>{
  const client = graphqlClient();
  const document = gql`
    query GetThoughts {
  getThoughts {
    id
    content
    user {
      name
      email
      id
    }
  }
}
  `;
   try {
    if (client == null) {
      throw new Error('Client not initialized');
    }
    const data = await client.request(document);
    return data;
  } catch (error) {
    console.error('GraphQL Request Failed:', error);
    throw error; 
  }
}
