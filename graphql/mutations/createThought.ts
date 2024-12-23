import { graphqlClient } from "@/clients/api";
import { gql } from "graphql-request";

const client = graphqlClient();

export const CreateThought = async (data:{content: string, private:boolean}) =>{
    const provider = {
        payload:{
            content : data.content,
            private : data.private
        }
    }
  const document = gql`
    mutation CreateThought($payload: ThoughtInput!) {
  createThought(payload: $payload) {
    content
  createdAt
  user {
    name
  }
  }
}
  `;
   try {
    if (client == null) {
      throw new Error('Client not initialized');
    }
    const data = await client.request(document,provider);
    return data;
  } catch (error) {
    console.error('GraphQL Request Failed:', error);
    throw error; 
  }
}
