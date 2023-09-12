import "./column.css";

const Column = ({title, items}) => {
    return (
        <div className="column">
            <p style={{fontSize: "16px"}}>{title}</p>
            <ul className="custom-list">{items}</ul>
        </div>
    );
};

export default Column;
