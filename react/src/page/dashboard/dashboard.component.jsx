import Logo from "../../assets/image.svg";
import { Link } from "react-router-dom";
import "./dashboard.component.css";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const { state } = useLocation();
  const usersArr = state.usersArr;

  console.log(usersArr[0])

  return (
    <dashboard>
      <header className="dashboard-header-container">
        <Link to="/" state={usersArr}>
          <img src={Logo} alt="logo-img" />
        </Link>
        {<p>{`${usersArr[0].name} ${usersArr[0].lastName}`}</p>}
      </header>
      <section className="dashboard-table-container">
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>SOBRENOME</th>
              <th>DATA</th>
              <th>E-MAIL</th>
              <th>CPF</th>
            </tr>
          </thead>
          <tbody>
            {usersArr &&
              usersArr.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.birthdate}</td>
                  <td>{user.email}</td>
                  <td>{user.cpf}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </dashboard>
  );
}

export default Dashboard;
