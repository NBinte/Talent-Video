import { gql, useQuery } from "@apollo/client";

const GET_VIDEO = gql`
    query GetVideo($id: ID!) {
        Video(id: $id) {
            id
            title
            link
        }
    }
`;

export const useVideo = id => {
    const { error, data, loading } = useQuery(GET_VIDEO, {
        variables: {
            id
        }
    });

    return { error, data, loading };
};
