export interface ICard {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface IContext {
  cards: ICard[];
  onFilter: (a: string) => void;
}

export interface User {
  login: string;
  password: string;
  age: number;
  // addr?: string;
  addr: string | undefined; // используем юнион тайп
  parents?: {
    father: string;
  };
}

const user: User = {
  login: "Stasya",
  password: "qwert1111",
  age: 30,
  addr: undefined,
};

let dbName: string;
sendUserData(user);

console.log(dbName!);
function sendUserData(obj: User, db?: string): void {
  dbName = "12345";
  console.log(obj.parents!.father?.toLowerCase(), db?.toLowerCase);
}

const basicPortd: readonly number[] = [3000, 3001, 3002];
const bports: [number, number, number, ...string[]] = [
  3000,
  3001,
  3002,
  "3000",
  "3002",
];

bports.push(5);
console.log(bports);

const userFreeze: Readonly<User> = {
  login: "Stasya",
  password: "qwert1111",
  age: 30,
  addr: undefined,
};

const ports2: ReadonlyArray<number> = [3000, 3001, 3002];

enum Direction {
  TOP,
  RIGHT,
  LEFT,
  BOTTOM,
}

enum TimingFunction {
  EASE = 1,
  EASE_IN = 10,
  LINER = 30 + EASE_IN,
}

function frame(elem: string, dir: Direction, tFunc: TimingFunction) {
  console.log(tFunc);
  if (dir === Direction.RIGHT) {
  }
}

frame("red", Direction.LEFT, TimingFunction.LINER);
