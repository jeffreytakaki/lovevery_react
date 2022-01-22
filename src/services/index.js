import { request, gql } from 'graphql-request';
const graphCMSEndpoint = "https://api-us-west-2.graphcms.com/v2/ckynxea1o178r01xu4n0y4tjd/master";
// const graphCMSToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDI3NDEzODEsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NreW54ZWExbzE3OHIwMXh1NG4weTR0amQvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZWI0NWI0ZTYtNDJlZS00Y2I4LThhMmUtNzk0NGVjNGI4MWI0IiwianRpIjoiY2t5bnhzeWIwMTczeDAxeGo3dGI3YWNrZiJ9.x5FNWuFEgXVgGjmwenQh5-pLPRy5YYos3guvmcG6Ughy33WiNbfq3aWcEYiTGCV7V6694JwkvAhZ3p6F1gc5kj87_IAiz8cn06HfTNSos4oy5sMrdLomWheGDNowvzi-aBIEDZ-_utx9adm3cdXkLR4cHNFPfel9qV5SbTCgOENuv5QU7PkRSL3PI7DSGNssDfnZPW1QW_XD9uj1VdhL2XpLdp9RvHB2t4s_BDqZmPidB-FtJJLCsC7ZjKBETij2h2QNe8qP3jYmZgMZIQGlDmWzNTqSfzRUPBc6YziwTPjsv3ttlLa2CWGQOdCd-WeXk8sFFGjSfxNxxDOqQcSoXKYwgqERkVRqgkE7-dXOCqMJCSpu4n2xKnvXl9qK75FZgwegCEULntS1a2xIvKZWkoc3RuQjS_nTd-NthjaFXm91Op__Z-BN7xrQOPbe7tgNrfutUh8bRkoko7lsz1ERt-4gWUGLBACdR0-mW3jztZwOdW_TcwaoHfMR8_6NfruG43HLlg9bcgEmrdFSntX4Bwnoa9ktyPd-LRlyIuoKnMMIpj_ScNFdc7LlUHrOLPlxhsy4WK3_j8f4fMZfeMQ0smhPW8K0ehE3xkRhTREiSesobVUg3Lyi6jktAqh4mUbcdpclFa-9HF5UUZtWsrtNMuPZvSRTxynurIiUBJAdgWQ"

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
                }
            }
        `;

        const result = await request(graphCMSEndpoint, query);
        // console.log('getProducts ->', result);
        resolve(result.products)
    })
    
    
}