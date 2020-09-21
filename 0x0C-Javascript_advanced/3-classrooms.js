function createClassRoom(numbersOfStudents){
    function studentSeat(seat){
        return function(){
            return seat
        };
    }
    let students = [];
    for(let i = 0; i < numbersOfStudents;i++){
        let st_seats = studentSeat(i + 1);
        students[i] = st_seats;
    };
    return students;
};

classRoom = createClassRoom(10);
