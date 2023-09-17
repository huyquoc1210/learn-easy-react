import { Fragment, useEffect, useState } from 'react';
import { MainLayout } from './components/Layout';
import { Widget } from './components/common';
import { MyText } from './features/labs/Mytext';
import { StudentCar } from './features/labs/Student';
import { Student } from './models';

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  const john: Student = {
    name: 'John',
    age: 3,
    isHero: true,
  };

  function handleStudentClick(student: Student) {
    console.log('student Click', student);
  }

  // if (loading) return <p>loading...</p>;
  //sever
  const studentList = [
    { id: 1, name: 'type' },
    { id: 2, name: 'script' },
  ];

  //client
  const statusList = ['pending', 'active'];

  return (
    <>
      <ul>
        {studentList.map((student) => (
          //Trong tình huống nhiều thẻ li thì dùng fragment để bỏ key
          <Fragment key={student.id}>
            <li>{student.name}</li>
            <li>{student.name}</li>
          </Fragment>
        ))}
      </ul>

      <ul>
        {statusList.map((status, index) => (
          <li key={index}>{status}</li>
        ))}
      </ul>
      {loading && <p>loading...</p>}
      {loading ? <p>Loading...</p> : <p>data ready!</p>}
      {true && 'show true'}
      {false && 'show false'}
      {[].length > 0 && 'Show 0'}
      {Boolean(NaN) && 'Show NaN'}
      <MainLayout>
        <StudentCar student={john} onClick={handleStudentClick} />
      </MainLayout>
      <MyText>TypeScript</MyText>
      <MyText>{18}</MyText>
      <MyText>{null}</MyText>
      <MyText>{undefined}</MyText>
      <MyText>{false}</MyText>
      <MyText>
        <span>Type</span>
      </MyText>
      <MyText>
        <span>Type</span> script
      </MyText>
      <MyText>
        <span>Type</span>
        <span>Script</span>
      </MyText>
      <div>
        <div>
          <Widget title="Earning Overview">Chart1</Widget>
        </div>

        <div>
          <Widget title="Revenue Sources">Chart2</Widget>
        </div>

        <div>
          <Widget title="Earning Overview">
            <img src="abc" alt="" />
          </Widget>
        </div>

        <div>
          <Widget title="Earning Overview">Chart4</Widget>
        </div>
      </div>
    </>
  );
}

export default App;
