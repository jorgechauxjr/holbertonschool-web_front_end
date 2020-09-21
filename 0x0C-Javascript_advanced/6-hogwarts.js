/*Module studentHogwarts*/
class studentHogwarts{
    constructor(){
        this.privateScore = 0;
        this.name = null;
    };

    /* Private method changeScoreBy */
    changeScoreBy(points){
        this.privateScore = this.privateScore + points;
    };

    /*The module gives access to four public methods (return an object)*/
    setName(newName){
        this.name = newName;
    };

    rewardStudent(){
        this.changeScoreBy(1);
    };

    penalizeStudent() {
        this.changeScoreBy(-1);
    };

    getScore(){
        return (this.name + ": " + this.privateScore);
    // return `${this.name}: ${this.privateScore}`
    };
};

let harry = new studentHogwarts();
harry.setName("Harry");
for (let i = 0; i < 4; i++) harry.rewardStudent()
console.log(harry.getScore());

let draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
for (let i = 0; i < 3; i++) draco.penalizeStudent()
console.log(draco.getScore());
