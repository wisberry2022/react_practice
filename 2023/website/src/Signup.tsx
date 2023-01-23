import './style/SignUp.scss';

type dataList = {
  id: number,
  title: string,
  type: string,
  name: string
}

const Signup = () => {
  const inputList: Array<dataList> = [
    { id: 1, title: "아이디", type: "text", name: "id" },
    { id: 2, title: "비밀번호", type: "password", name: "pwd" },
    { id: 3, title: "이메일", type: "email", name: "email" }
  ];

  return (
    <div className="container">
      <h3>회원가입</h3>
      <form action="http://localhost:8080/webspace/register.jsp" method="post">
        <table>
          <thead></thead>
          <tbody>
            {inputList.map(it => {
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
              <td align="center" colSpan={2}><input type="submit" value="가입하기" /></td>
            </tr>
          </tfoot>
        </table>
      </form>
    </div>
  )
}

export default Signup;