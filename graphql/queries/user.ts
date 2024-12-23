import { graphqlClient } from "@/clients/api";
import { useCurrentUser } from "@/hooks/useCurrenUser";
import { gql } from 'graphql-request';
export const getToken = async (token: string) => {
  const client = graphqlClient();
  const variables = {
    token,
  };

  const document = gql`
    query Qu($token: String!) {
      verifyGoogleToken(token: $token)
    }
  `;

  try {
    console.log('Variables:', variables);
    if (client == null) {
      throw new Error('Client not initialized');
    }
    const data = await client.request(document, variables);
    console.log('Response:', data);
    return data;
  } catch (error) {
    console.error('GraphQL Request Failed:', error);
    throw error; // Re-throw the error if necessary
  }
};

export const getCurrentUser = async () => {
  const client = graphqlClient();
  const document = gql`
    query {
      getCurrentUser {
        id
        name
        proflieImgURL
      }
    }
  `;

  try {
    if (client == null) {
      throw new Error('Client not initialized');
    }
    const data = await client.request(document);
    console.log('logged in user info:', data);
    return data;
  } catch (error) {
    console.error('GraphQL Request Failed:', error);
    throw error; // Re-throw the error if necessary
  }
}
