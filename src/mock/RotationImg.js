import Mock from 'mockjs'
Mock.mock("/api/rotation", "get", {
    code: 0,
    msg: "",
    data: [
      {
        id: "1",
        bigImg: "https://images.pexels.com/photos/1683989/pexels-photo-1683989.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2500",
        descript:'askdjlska'
  
      },
      {
        id: "2",
        bigImg:
          "https://images.pexels.com/photos/2472858/pexels-photo-2472858.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2500",
          descript:'aksdjlkas'

      },
      {
        id: "3",
        bigImg: "https://images.pexels.com/photos/3738670/pexels-photo-3738670.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2500",
        descript:'aksldjklas'
     
       
      },
      {
        id: "4",
        bigImg:
          "https://images.pexels.com/photos/1268877/pexels-photo-1268877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2500",
          descript:'al;djkl;as'
  
      },
    ],
  });