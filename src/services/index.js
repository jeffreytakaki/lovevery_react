import { request, gql } from 'graphql-request';
const graphCMSEndpoint = "https://api-us-west-2.graphcms.com/v2/ckynxea1o178r01xu4n0y4tjd/master";


// GraphCMS Token has READ only access. Safe for public use.
export const getProducts = () => {
    return new Promise(async (resolve, reject) => {
        const query = gql`
            query GET_PRODUCTS {
                products {
                    slug
                    name
                    id
                    description
                    shortDescription
                    images {
                        ... on Image {
                            id
                            url
                            productName
                        }
                    }
                    numberOfReviews
                    averageReviewRating
                }
            }
        `;

        const result = await request(graphCMSEndpoint, query);
        // console.log('getProducts ->', result);
        resolve(result.products)
    })
    
    
}