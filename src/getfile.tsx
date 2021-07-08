import {gql, useQuery} from "@apollo/client";

export function fileQuery(id: any) {
    return gql`query {getFile(id: "${id}") {id, name, text}}`;
}

function GetFile(props: any) {
    const { loading, error, data } = useQuery(props);

    if (loading) return <p>Loading...</p>;
    if (error) return <></>;

    return <p>{data.getFile['text']}</p>
}

export default GetFile;