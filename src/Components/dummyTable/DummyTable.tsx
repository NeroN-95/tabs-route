import {DummyTableProps} from "./type";

const DummyTable  = ({id } :DummyTableProps)  => (
    <table>
        <tbody>
        <tr>
            <td>{id}</td>
        </tr>
        </tbody>
    </table>
);

export default DummyTable;




