//rafce

const basics = () => {
  // declaration ici
  const name = " Fatima Zahrae";
  const x = 7;
  const y = 2;
  const firstNames = ["Fatima Zahrae", "Mohamed", "Hiba"];
  const lastNames = ["Laaroussi", "Laaroussi", "Bihi"];

  return (
    // rule : it must return a single element
    <div className="container pt-5">
      <p>Hello {name}</p>
      <p>
        The sum of {x} and {y} is <span className="text-success"> {x + y}</span>{" "}
      </p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
        </thead>
        <tbody>
          {firstNames.map((fname, index) => (
            <tr key={index}>
              <td>{fname}</td>
              <td>{lastNames[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default basics;
