import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // getByText로 가져오는 글자가 해당 파일에 존재하는지를 체크하는 것이므로
  // const linkElement = screen.getByText(/learn react/i);
  // 그래서 메인 화면에 뜨게 되는 아무 글자를 넣어줌!
  const linkElement = screen.getByText(/Book Search/);
  expect(linkElement).toBeInTheDocument();
});
