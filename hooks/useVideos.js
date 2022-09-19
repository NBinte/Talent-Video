import { gql, useQuery } from "@apollo/client";

const GET_VIDEOS = gql`
    query {
        allVideos {
            id
            title
            link
        }
    }
`;

export const useVideos = () => {
    const { error, data, loading } = useQuery(GET_VIDEOS);

    return { error, data, loading };
};
