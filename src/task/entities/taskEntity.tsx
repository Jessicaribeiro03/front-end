export class TaskEntity {


  id: number;
  description: string;
  creationDate: number;
  status: Boolean;
  user: User;

}
export class User {
  id: number;
}
