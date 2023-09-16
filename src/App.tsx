import { useState } from 'react';
import { MainLayout } from './components/Layout';
import { Widget } from './components/common';
import { MyText } from './features/labs/Mytext';
import { StudentCar } from './features/labs/Student';
import { Student } from './models';

function App() {
  const [count, setCount] = useState(0);

  const john: Student = {
    name: 'John',
    age: 3,
    isHero: true,
  };

  function handleStudentClick(student: Student) {
    console.log('student Click', student);
  }

  return (
    <>
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
