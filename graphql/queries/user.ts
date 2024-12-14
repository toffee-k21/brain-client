import { gql, GraphQLClient } from 'graphql-request';

export const getToken = async (token: string) => {
  const variables = {
    token,
  };

  const document = gql`
    query Qu($token: String!) {
      verifyGoogleToken(token: $token)
    }
  `;

  const endpoint = 'http://localhost:4000/graphql';
  const client = new GraphQLClient(endpoint);

  try {
    console.log('Variables:', variables);
    const data = await client.request(document, variables);
    console.log('Response:', data);
    return data;
  } catch (error) {
    console.error('GraphQL Request Failed:', error);
    throw error; // Re-throw the error if necessary
  }
};
