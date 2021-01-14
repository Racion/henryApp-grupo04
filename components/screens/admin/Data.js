export const user = [
  {
    name: "Sofía",
    points: "120",
    email: "sofia@gmail.com",
  },
];

export const alumniRanking = [
  { name: "Rafael", points: "200", id: 1, cohorte: "8" },
  { name: "Ona", points: "100", id: 2, cohorte: "6" },
  { name: "Aye", points: "300", id: 3, cohorte: "7" },
  { name: "Pedro", points: "200", id: 4, cohorte: "8" },
  { name: "Becca", points: "100", id: 5, cohorte: "6" },
  { name: "Oliver", points: "295", id: 6, cohorte: "7" },
  { name: "Lucía", points: "200", id: 7, cohorte: "8" },
  { name: "Esteban", points: "100", id: 8, cohorte: "6" },
  { name: "Rocío", points: "290", id: 9, cohorte: "7" },
];

export const activeCohortes = [
  { id: 7, mesas: 15, activas: 12 },
  { id: 8, mesas: 22, activas: 12 },
  { id: 9, mesas: 22, activas: 20 },
];

export const activeThemeTables = [
  {
    id: 1,
    name: "React",
    mesas: 15,
    studentsByCohorte: { 7: 15, 8: 15, 9: 22 },
  },
  {
    id: 2,
    name: "Express",
    mesas: 11,
    studentsByCohorte: { 7: 10, 8: 11, 9: 12 },
  },
  {
    id: 3,
    name: "Algoritmos",
    mesas: 10,
    studentsByCohorte: { 7: 25, 8: 20, 9: 17 },
  },
];

export const groups = [
  { id: 1, cohorte: 7, totalStudents: 18, studentsConnected: 14, pm: "Franco" },
  {
    id: 2,
    cohorte: 7,
    totalStudents: 22,
    studentsConnected: 12,
    pm: "Rafael Osorio",
  },
  {
    id: 3,
    cohorte: 7,
    totalStudents: 15,
    studentsConnected: 11,
    pm: "Manuel Barna",
  },
  {
    id: 4,
    cohorte: 8,
    totalStudents: 28,
    studentsConnected: 24,
    pm: "Rodrigo Fleitas",
  },
  {
    id: 5,
    cohorte: 8,
    totalStudents: 25,
    studentsConnected: 22,
    pm: "Patricio Pallua",
  },
  {
    id: 6,
    cohorte: 8,
    totalStudents: 16,
    studentsConnected: 15,
    pm: "Lucio Cosculluela",
  },
  {
    id: 7,
    cohorte: 9,
    totalStudents: 28,
    studentsConnected: 20,
    pm: "Ayelen Damaris",
  },
  {
    id: 8,
    cohorte: 9,
    totalStudents: 25,
    studentsConnected: 8,
    pm: "Julian Bonavita",
  },
  {
    id: 9,
    cohorte: 9,
    totalStudents: 16,
    studentsConnected: 14,
    pm: "Marcos Rojo",
  },
];

export const mostPopularTheme = () => {
  let maxTables = 0;
  let maxId = 0;
  activeThemeTables.forEach((theme) => {
    if (theme.mesas > maxTables) {
      maxTables = theme.mesas;
      maxId = theme.id;
    }
  });
  return activeThemeTables.filter((theme) => theme.id === maxId)[0].name;
};

export const getCohorteRanking = () => {
  return activeCohortes.sort((a, b) =>
    a.activas / a.mesas < b.activas / b.mesas ? 1 : -1
  );
};

export const getConnectedGroupRanking = () => {
  return groups.sort((a, b) =>
    a.studentsConnected / a.totalStudents <
    b.studentsConnected / b.totalStudents
      ? 1
      : -1
  );
};

export const getAssistanceRate = () => {
  const cohorteQuantity = activeCohortes.length;
  return Math.ceil(
    (activeCohortes
      .map((cohorte) => cohorte.activas / cohorte.mesas)
      .reduce((el, acc) => el + acc) /
      cohorteQuantity) *
      100
  );
};
