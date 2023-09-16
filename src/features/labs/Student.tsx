import { Student } from '@/models';
import * as React from 'react';

export interface StudentCarProps {
  student: Student;
  onClick?: (student: Student) => void;
  // onDeleteClick?:(student:Student) => void;
  // onEditClick?:(student:Student)=>void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function StudentCar({ student, onClick }: StudentCarProps) {
  const { name, isHero } = student;

  function handleClick() {
    onClick?.(student);
  }
  return (
    // Component cha chỉ cần biết bao giờ xảy ra sự kiện đó thì truyền dưới dạng  inline function onClick
    // Khi cần biét thông tin từ thằng con truyển lên thì truyền dưới dạng custom function
    <div onClick={handleClick}>
      Student: {name} {isHero ? 'hero' : 'no-hero'}
    </div>
  );
}
