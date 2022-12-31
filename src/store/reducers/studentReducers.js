const studentReducers = {
  updatedStudent: (state, action) => {
    state.student.name = action.payload.name ? action.payload.name : state.student.name;
    state.student.class = action.payload.class ? action.payload.class : state.student.class;
    state.student.roll = action.payload.roll ? action.payload.roll : state.student.roll;
    state.student.subject = action.payload.subject ? action.payload.subject : state.student.subject;
  },
};

export default studentReducers;
