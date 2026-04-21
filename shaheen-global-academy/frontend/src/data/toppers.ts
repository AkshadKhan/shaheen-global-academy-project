export type Topper = {
  name: string;
  exam: string;
  score: string;
  rank: string;
  image: string;
  college: string;
};

export const toppers: Record<string, Topper[]> = {
  "2026": [
    {
      name: "Aqsa fatima",
      exam: "10th CBSE",
      score: "92%",
      rank: "",
      image: "aqsa-fatima.png",
      college: "",
    },
  ],
  // "2025": [
  //   //   {
  //   //     name: "Student A",
  //   //     exam: "NEET",
  //   //     score: "720/720",
  //   //     rank: "123",
  //   //     image: "testImage.png",
  //   //     college: "AIIMS Delhi",
  //   //   },
  // ]
};
