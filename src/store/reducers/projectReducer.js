const initState = {
  projects: [
    { id: "1", title: "help me ", content: "apiofj poij poij poijpo ij" },
    { id: "2", title: "kill me ", content: "apiofj poij poij poijpo ij" },
    { id: "3", title: "connect me ", content: "apiofj poij poij poijpo ij" },
    { id: "4", title: "year me ", content: "apiofj poij poij poijpo ij" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
  return state;
};

export default projectReducer;
