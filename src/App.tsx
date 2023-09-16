import { useState } from 'react';
import { Footer, Header } from './components/common';
import { StudentCar } from './features/labs/Student';
import { Student } from './models';
import { MyText } from './features/labs/Mytext';

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
      <Header></Header>
      <StudentCar student={john} onClick={handleStudentClick} />
      <Footer>TypeScript</Footer>
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
    

    </>
  );
}

export default App;
