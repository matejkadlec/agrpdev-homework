import {useQuery, gql} from "@apollo/client";

export function getQuery(id: any) {
    return gql`query GetList {getList(id: "${id}") {id, name, type}}`;
}

function GetList(props: any) {
    const { loading, error, data } = useQuery(props);

    if (loading) return <p>Loading...</p>;
    if (error) return <></>;

    return data.getList.map(({id, name}: any) => (
        <li key={id}>
            {name}
            <ul>
                <GetList {...getQuery(id)}/>
            </ul>
        </li>
    ));
}

export default GetList;