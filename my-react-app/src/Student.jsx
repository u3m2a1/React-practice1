

function Student(props) {
  return(
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}


export default Student

// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key = value />

// propTypes = a mechanism that ensures that the passed value
//            is of the correct datatype.
//            age: PropTypes.number