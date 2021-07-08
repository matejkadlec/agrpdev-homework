import {useQuery, gql} from "@apollo/client";
import GetFile, {fileQuery} from './getfile'

export function listQuery(id: any) {
    return gql`query {getList(id: "${id}") {id, name, type}}`;
}

function GetList (props: any) {
    const { loading, error, data } = useQuery(props);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>test</p>;

    return data.getList.map((file: any) => (
        file.type === 'FOLDER' ?
            <li key={file.id}>
                {file.name}
                <ul>
                    <GetList {...listQuery(file.id)}/>
                </ul>
            </li> :
            <li key={file.id}>
                {file.name}
                <GetFile {...fileQuery(file.id)}/>
            </li>
    ));
}

export default GetList;
