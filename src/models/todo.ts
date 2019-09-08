export default interface Todo {
  id: string;
  title: string;
  date: Date | null;
  completed: boolean;
}