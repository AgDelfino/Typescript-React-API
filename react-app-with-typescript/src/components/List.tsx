import { Sub } from "../types";

interface Props {
  subs: Array<Sub>;
}

const List = ({ subs }: Props) => {

    const renderList = (): JSX.Element[] => {
        return subs.map(sub => {
            return (
                <li key={sub.nick}>
                    <img src={sub.avatar} alt={`Este es el avatar de ${sub.nick}`} />
                    <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                    <p>{sub.description?.substring(0, 100)}</p>
                </li>
            )
        })
    }

    return (
        <div>
            {renderList()}
        </div>
    )
};

export default List;
