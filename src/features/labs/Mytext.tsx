import { ReactNode } from 'react';

export interface MyTextProps {
  children?: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// Nếu k có prop children thì k nên khai báo prop để nó báo lỗi
//React Node ,React Text,ReactElement,ReactFagment
export function MyText({ children }: MyTextProps) {
  return <div>{children}</div>;
}
