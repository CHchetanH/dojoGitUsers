const UserList = ({ names, title }) => {


    return (<div className="user-list">
        <h1>{title}</h1>
        {names.map((e) => (
            <div className="alluser" key={e.id}>
                <h2>{e.name}</h2>
                <h3>Lives in: {e.city}</h3>
                <h4>{e.age} year Old</h4>
            </div>
        ))}
    </div>);
}

export default UserList;