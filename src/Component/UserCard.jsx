const Instructure=(data)=>{
    return (
        <div className="Instructor">
            <h1>{data.id} Information</h1>
                <p> Name: {data.name}</p>
                <p>Email: {data.mail}</p>
                <p>Location: {data.location} </p>
           
        </div>
    )
}
export default Instructure