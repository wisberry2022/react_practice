import './style/App.scss';
import { Link } from 'react-router-dom';

type dataList = {
  id: number,
  title: string,
  type: string,
  name: string;
}

const Login = () => {
  const dataList: Array<dataList> = [
    { id: 1, title: '아이디:', type: 'text', name: 'id' },
    { id: 2, title: '비밀번호:', type: 'password', name: 'pwd' },
  ];

  return (
    <div className="Wrapper container">
      <h1>Login Page</h1>
      <form action="http://localhost:8080/webspace/login.jsp" method="post">
        <table>
          <thead></thead>
          <tbody>
            {dataList.map(it => {
              return (
                <tr key={it.id}>
                  <td>{it.title}</td>
                  <td><input type={it.type} name={it.name} required /></td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2} align="center"><input type="submit" value="로그인하기" /></td>
            </tr>
          </tfoot>
        </table>
      </form>
      <Link to="/signup">회원가입하기</Link>
    </div>
  )
}

export default Login;
