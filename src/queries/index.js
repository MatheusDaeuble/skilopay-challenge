import gql from 'graphql-tag';

// Consulta que retorna os repositórios com mais estrelas no github (default: 10 primeiros).
export const GET_TRENDINGS = gql`
    query trendings ($cursor: String, $first: Int=10) {
        search(after: $cursor, query: "stars:>1", type: REPOSITORY, first: $first) {
            edges {
                cursor
                node {
                    ... on Repository {
                        id
                        name
                        owner {
                            login
                            avatarUrl
                        }
                        primaryLanguage {
                            name
                        }
                        stargazers {
                            totalCount
                        }
                    }
                }
            }
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    }
`;

//  Consulta que retorna detalhes de um repositório atraves de uma nome e um login.
export const GET_REPOSITORY_DETAILS = gql`
    query repositoryDetails ($name: String!, $owner: String!){
        repository(name: $name, owner: $owner) {
            nameWithOwner
            description
            url
            forkCount
            stargazers{
                totalCount
            }
            owner{
                avatarUrl
            }
            issues {
                totalCount
            }
        }
    }
`; 

// Consulta que carrega a lista de favoritos (Em cache).
export const GET_FAVORITES = gql`
    query {
        favorites @client
    }
`;

